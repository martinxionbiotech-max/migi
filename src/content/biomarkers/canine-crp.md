---
title: "Canine C-Reactive Protein (cCRP)"
slug: "canine-crp"
description: "Canine C-reactive protein is a major acute-phase protein; quantitative measurement supports detection and serial monitoring of systemic inflammation."
species: "canine"
biomarker: "C-reactive protein (CRP)"
method: "Fluorescence immunoassay (FICT)"
unit: "mg/L"
category: "inflammatory"
clinicalContext: "Canine C-reactive protein is a major acute-phase protein; quantitative measurement supports detection and serial monitoring of systemic inflammation."
referenceRange: "Reference ranges vary by species, age and laboratory method — always interpret against the kit IFU and your in-house validation."
source: "Manufacturer documentation + clinical literature cited in related articles"
date: "2026-09-12"
confidence: "MEDIUM — reference ranges are method-specific"
relatedProducts: ["migi-dog-canine-c-reactive-protein-ccrp-rapid-quantitative-test"]
relatedBlogs: ["canine-crp-feline-saa-inflammation-testing"]
faq:
  - q: "What does the Canine C-Reactive Protein (cCRP) test measure?"
    a: "Migibio's Canine C-Reactive Protein (cCRP) test is a quantitative fluorescence immunoassay (FICT) run on the FIA680/FIA880 analyzer. It is intended as an aid in clinical assessment: Canine C-reactive protein is a major acute-phase protein; quantitative measurement supports detection and serial monitoring of systemic inflammation. The exact specimen, sample handling, and reporting units are specified in the kit IFU."
  - q: "When is canine CRP testing most useful?"
    a: "When systemic inflammation is suspected or to monitor response to treatment, surgery, or infection. A baseline and serial measurements help distinguish resolving from persistent inflammation. For dogs, use the result with the clinical history, physical examination, and any other laboratory findings."
  - q: "Why does this Data Hub not publish a universal reference range?"
    a: "Reference ranges vary by species, age and laboratory method — always interpret against the kit IFU and your in-house validation."
---

## Quick Answer

Canine CRP is an acute-phase protein that rises within hours of systemic inflammation and falls quickly once the trigger resolves, which makes it better suited to *trending* than to single-point diagnosis. Migibio's cCRP assay reports a quantitative value on the FIA680/FIA880 platform; interpretation depends on a platform-specific reference interval and on comparing consecutive results from the same analyzer rather than absolute cut-offs borrowed from other systems.

---

## What canine CRP actually measures

C-reactive protein is produced by the liver in response to interleukin-6 during acute inflammation. In dogs it behaves as a **major** acute-phase protein — the hepatic response is large and fast, unlike in cats where serum amyloid A (SAA) plays the dominant acute-phase role. Two consequences follow, and they determine how the test should be used:

1. **It moves early.** Because the hepatic response is triggered within hours, a normal CRP in a dog with a two-day history of lethargy is meaningful information, not a "too early to tell" result.
2. **It moves down.** CRP has a short circulating half-life compared with immunoglobulins, so a falling value is evidence that the inflammatory stimulus is resolving. This is why serial measurement carries more clinical weight than a single data point.

What CRP does **not** tell you is *where* the inflammation is. It is a magnitude signal, not a localization signal. A dog with pyometra, one with immune-mediated polyarthritis, and one with aspiration pneumonia can present with overlapping CRP values and completely different next steps. Treating CRP as a diagnostic endpoint rather than as a triage and monitoring instrument is the single most common misuse of this assay.

---

## Why quantitative, not qualitative

A qualitative rapid test answers "is CRP elevated above the strip's visual cut-off." That answer is clinically thin: mild inflammation, moderate inflammation, and severe systemic inflammatory response collapse into the same positive band, and the clinician cannot distinguish a treating response from a non-response.

A quantitative readout supports three things a qualitative strip cannot:

| Question | Qualitative strip | Quantitative assay |
|---|---|---|
| Is there inflammation? | Yes/no above cut-off | Value relative to reference interval |
| Is it improving? | Only once it crosses back under the cut-off | Magnitude of change between two dates |
| Is the change real or assay noise? | Not assessable | Comparable against the platform's own imprecision |

The third row is the one buyers consistently underestimate. Without knowing your own assay's imprecision at the relevant concentration, a drop from 80 to 65 mg/L cannot be distinguished from analytical variation — and clinical decisions get made on noise.

---

## Reference intervals — the part that cannot be borrowed

CRP reference intervals are **analyzer-, method-, and reagent-dependent**. Literature on veterinary point-of-care assays has repeatedly documented proportional bias between platforms (published bias figures for canine CRP POCT versus reference methods commonly fall in the 10–30% range), and the practical implication is explicit in that literature: follow-up examinations should be performed with the same assay and analyzer.

That means a reference interval taken from another manufacturer's insert, or from a textbook written for a bench chemistry analyzer, is not transferable to this platform.

| Population | Reference interval | n | Method / notes |
|---|---|---|---|
| Adult dogs (1–7 y) | `[[ LL – UL mg/L ]]` | `[[ n ]]` | `[[ CLSI EP28-A3c, non-parametric, 90% CI ]]` |
| Puppies (< 1 y) | `[[ LL – UL mg/L ]]` | `[[ n ]]` | `[[ age-dependent; may differ from adult ]]` |
| Geriatric dogs (> 7 y) | `[[ LL – UL mg/L ]]` | `[[ n ]]` | `[[ comorbidity screening applied ]]` |

**Editorial interpretation (not a manufacturer claim):** where a laboratory has fewer than the guideline-recommended number of reference individuals, publishing the interval with n and the statistical method is still more useful than publishing nothing — provided the limitation is stated. An interval with a visible sample size invites verification; an absent interval invites the reader to guess.

---

## Decision thresholds

Absolute values should be read against the interval above, not against numbers from a different platform. What is stable across platforms is the *shape* of the response:

| Band | Interpretation | Typical clinical action |
|---|---|---|
| Within reference interval | No significant acute-phase response at sampling time | Re-evaluate if clinical suspicion persists — a normal CRP does not exclude localized or chronic disease |
| `[[ mild band ]]` | Low-grade or resolving inflammation | Trend in 24–48 h rather than treat reflexively |
| `[[ moderate band ]]` | Active inflammation | Pair with localization diagnostics (imaging, cytology, culture) |
| `[[ marked band ]]` | Severe systemic inflammation / SIRS candidate | Urgent workup; serial monitoring to judge response |

`[[ Bands must be set from your own platform data and clinical validation — do not import these from another manufacturer. ]]`

---

## The framework most clinics get wrong: baseline + delta

The useful unit of CRP measurement is not the value, it is the **change relative to baseline in the same patient on the same analyzer**. A defensible workflow:

1. Measure at presentation (baseline), before antibiotics or surgery where feasible.
2. Define an expected response window for the condition — `[[ e.g. 48–72 h post-initiation of appropriate therapy ]]`.
3. Re-measure at the window. Compare against baseline, not against the reference interval alone.
4. Interpret the delta against the assay's own imprecision at those concentrations. `[[ Insert the platform's CV at low / mid / high concentration — a change smaller than the assay's combined imprecision is not a clinical change. ]]`
5. Escalate localization work only when the delta fails to move, or moves in the wrong direction.

This is why the precision data on the technical page is not decorative: **without it, step 4 is guesswork**, and the entire monitoring use case degrades into "the number went down a bit."

---

## Sample handling

`[[ Complete from the current IFU; the table below is the required structure, values must be platform-specific ]]`

| Specimen | Acceptable | Notes |
|---|---|---|
| Serum | `[[ Y/N ]]` | `[[ clotting time, separation window ]]` |
| Lithium heparin plasma | `[[ Y/N ]]` | `[[ preferred per IFU ]]` |
| EDTA plasma | `[[ Y/N ]]` | `[[ compatibility statement ]]` |
| Whole blood | `[[ Y/N ]]` | `[[ not applicable / point-of-care only ]]` |
| Storage before testing | `[[ room temp h / 2–8 °C h ]]` | `[[ max delay to centrifugation ]]` |
| Freeze–thaw | `[[ max cycles ]]` | `[[ −20 °C stability ]]` |

---

## Interference and cross-reactivity

Interference is not a theoretical footnote for an acute-phase protein: hemolysis and lipemia are common in exactly the populations where CRP is ordered (acutely ill, dehydrated, post-trauma animals).

| Interferent | Tested concentration | Effect on result |
|---|---|---|
| Hemoglobin | `[[ g/L ]]` | `[[ none / bias % ]]` |
| Triglycerides (lipemia) | `[[ mg/dL ]]` | `[[ none / bias % ]]` |
| Bilirubin | `[[ mg/dL ]]` | `[[ none / bias % ]]` |
| Biotin | `[[ ng/mL ]]` | `[[ relevant only for streptavidin-biotin systems — state whether applicable ]]` |
| Heterophile antibodies / RF | `[[ tested? ]]` | `[[ false elevation risk statement ]]` |

`[[ Hook effect: dog CRP values in severe SIRS can be high; state whether the assay has a defined upper reporting limit and the dilution protocol above it. ]]`

---

## Six interpretation traps (editorial)

1. **Reading a single value as a diagnosis.** CRP is a magnitude signal. Localization requires imaging, cytology, or culture.
2. **Comparing two analyzers.** Published bias between canine CRP platforms reaches double digits; a patient monitored across two devices can appear to improve or worsen purely from method difference.
3. **Comparing across a kit lot change without a control.** `[[ State lot-to-lot policy here. ]]`
4. **Treating a normal CRP as exclusion.** Localized, walled-off, and chronic low-grade processes can sit inside the reference interval.
5. **Ignoring the sampling interval.** A re-check drawn 6 h after the first sample may fall inside the assay's imprecision band and be reported as "no change."
6. **Using CRP to choose an antibiotic.** CRP supports decisions about *whether* inflammation is present and *whether therapy is working*; it does not identify the organism.

---

## The Author's Take

**Position.** For a platform competing on quantitative point-of-care testing, the CRP assay is not a differentiator by itself — the differentiator is whether the platform publishes its own reference interval and its own imprecision, because those two things are what make a quantitative number interpretable in a clinic that has never used the assay before.

**Reasoning.** A buyer comparing two fluorescence platforms will find near-identical claims: quantitative, minutes to result, broad menu. The decision then turns on evidence: can I trust the number, and can I interpret it on day one? A vendor that publishes an interval with sample size and method, plus CV at clinically relevant concentrations, removes the buyer's largest unknown. That is a lower-cost differentiator than adding another analyte to the menu.

**Disclosure.** This page was written from published veterinary literature on acute-phase proteins and point-of-care assay validation, plus the general analytical framework in CLSI EP28. It does not report new experimental data. Figures marked `[[ ]]` are placeholders for Migibio's own measurements and must not be published unreplaced.

---

## Sources

1. Canine CRP physiology and acute-phase behaviour — `[[ cite the reference textbook or review used by your medical affairs team ]]`
2. Evaluation of a novel quantitative canine species-specific point-of-care assay for C-reactive protein. *BMC Veterinary Research* (2018). https://doi.org/10.1186/s12917-018-1415-2 — source for platform-dependent bias (10–30% range reported across POCT evaluations), reference interval methodology (n = 60 healthy dogs), and the same-analyzer follow-up recommendation.
3. CLSI EP28-A3c — Defining, establishing, and verifying reference intervals in the clinical laboratory (methodology standard).

---
