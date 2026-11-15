export async function onRequest(context) {
  const request = context.request;
  const url = new URL(request.url);

  // Keep the canonical host if a www request ever reaches this project.
  if (url.hostname === 'www.migibio.net') {
    return Response.redirect(`https://migibio.net${url.pathname}${url.search}`, 301);
  }

  const accept = request.headers.get('Accept') || '';
  const read = request.method === 'GET' || request.method === 'HEAD';
  const isAsset = /\.[a-z0-9]+$/i.test(url.pathname);

  if (read && accept.includes('text/markdown') && !isAsset && context.env.ASSETS) {
    const mdPath = url.pathname.endsWith('/')
      ? `${url.pathname}index.md`
      : `${url.pathname}/index.md`;
    const mdUrl = new URL(mdPath, url);
    const asset = await context.env.ASSETS.fetch(
      new Request(mdUrl.toString(), { method: request.method, headers: request.headers })
    );
    const type = asset.headers.get('content-type') || '';
    if (asset.status === 200 && type.includes('text/markdown')) {
      const headers = new Headers(asset.headers);
      headers.set('Content-Type', 'text/markdown; charset=utf-8');
      headers.set('Vary', 'Accept');
      headers.set('X-Markdown-Source', 'pages-middleware');
      return new Response(request.method === 'HEAD' ? null : asset.body, { status: 200, headers });
    }
  }

  return context.next();
}
