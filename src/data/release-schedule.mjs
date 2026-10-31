// Staged release schedule for pages added in the October 2026 content expansion.
// A path is indexable once its wave date has passed; before that it renders
// <meta name="robots" content="noindex,follow"> and is excluded from the sitemap.
// To release early, move the path to an earlier wave (or delete the entries
// below entirely, which makes every page indexable again).

export const RELEASE_WAVES = {
  '2026-10-31': [
    '/applications/',
    '/compare/',
    '/glossary/',
    '/resources/',
    '/species/',
    '/technology/',
    '/technology/analytical-performance/',
    '/technology/clinical-performance/',
    '/technology/method-comparison/',
    '/technology/precision/',
    '/technology/reference-intervals/',
    '/technology/sample-handling/',
    '/technology/units-and-reporting/',
  ],
  '2026-11-07': [
    '/diseases/infectious/',
    '/technology/calibration-traceability/',
    '/technology/hook-effect/',
    '/technology/interference/',
    '/technology/quality-control/',
  ],
  '2026-11-14': [
    '/compare/analyzer-selection-matrix/',
    '/compare/fia680-vs-fia880/',
    '/compare/fict-vs-chemiluminescence/',
    '/compare/fict-vs-elisa/',
    '/compare/fict-vs-lfia/',
    '/compare/fict-vs-pcr/',
    '/compare/in-house-vs-reference-lab/',
    '/compare/migibio-vs-alternatives/',
    '/diseases/cardiac/',
    '/diseases/endocrine/',
    '/diseases/inflammatory/',
    '/diseases/pancreatic/',
    '/diseases/renal/',
    '/diseases/reproduction/',
    '/diseases/vector-borne/',
  ],
  '2026-11-21': [
    '/applications/animal-shelter/',
    '/applications/breeding-kennel/',
    '/applications/mobile-vet/',
    '/applications/reference-laboratory/',
    '/applications/research-laboratory/',
    '/applications/veterinary-clinic/',
    '/species/cats/',
    '/species/dogs/',
    '/species/kittens/',
    '/species/puppies/',
    '/species/seniors/',
  ],
  '2026-11-28': [
    '/resources/certificates/',
    '/resources/coa/',
    '/resources/ifu/',
    '/resources/validation/',
  ],
};

export function releaseDateFor(pathname) {
  const p = pathname.endsWith('/') ? pathname : pathname + '/';
  for (const [date, paths] of Object.entries(RELEASE_WAVES)) {
    if (paths.includes(p)) return date;
  }
  return null;
}

export function isReleased(pathname, today = new Date()) {
  const date = releaseDateFor(pathname);
  if (!date) return true;
  return today >= new Date(`${date}T00:00:00Z`);
}
