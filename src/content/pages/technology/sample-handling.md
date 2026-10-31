---
title: "Sample Handling: Where Most Point-of-Care Errors Actually Come From"
slug: "technology/sample-handling"
description: "Specimen matrix, anticoagulant compatibility, centrifugation, storage and freeze-thaw limits for FICT assays — and why pre-analytical error outweighs analytical imprecision in routine clinic use."
faq:
  - q: "Can I use serum and plasma interchangeably on the same assay?"
    a: "Only where the manufacturer's validation covers both. Clotting removes fibrinogen and releases platelet contents, which can shift some analytes; the two matrices are not automatically equivalent. Use the matrix named in the instruction for use, and do not convert historical results between matrices without a documented comparison."
  - q: "Which anticoagulant should be avoided for immunoassays?"
    a: "EDTA chelates divalent cations and can affect assays whose antibodies or buffer systems depend on them. Lithium heparin is the common choice for plasma immunoassays, but compatibility is assay-specific and must be verified per analyte rather than assumed across a menu."
  - q: "How long can a sample wait before testing?"
    a: "That is analyte-specific and must be stated per assay. Cells continue to consume and release substances after collection, so delays before centrifugation and delays before analysis affect different analytes differently. A single blanket holding time across a menu is not a defensible specification."
---

# Sample Handling: Where Most Point-of-Care Errors Come From

**Quick Answer** — Analytical imprecision is usually the smallest source of error in routine clinic testing. Specimen choice, anticoagulant, time to centrifugation, storage temperature, freeze-thaw cycles and hemolysis routinely produce larger deviations than the assay itself. A platform that publishes a precise CV while leaving pre-analytical limits vague is optimising the part of the process that matters least.

## Quick Answer

The question to ask of any assay is not only "how precise is it" but "what sample, handled how, within what window." Both halves belong on the technical page, because a clinic can only control what it has been told.

## The pre-analytical chain

Every step before the cartridge is loaded introduces variance:

1. **Collection** — needle size, tourniquet time, order of draw, sample volume.
2. **Anticoagulant / clot activation** — the matrix decision, made once, affecting everything downstream.
3. **Time to centrifugation** — cells continue metabolism; some analytes rise, some fall, some are released by hemolysis.
4. **Centrifugation** — relative centrifugal force, duration, temperature; incomplete separation leaves cellular contamination.
5. **Storage and transport** — temperature and duration before analysis.
6. **Freeze-thaw** — repeated cycles degrade proteins; the number of cycles matters.
7. **Loading** — pipetting accuracy, bubble exclusion, temperature equilibration of the cartridge.

`[[ Insert the platform's specified limits for each step, per analyte. Where a limit differs within the menu, it must be stated per analyte, not as a single menu-wide value. ]]`

## Specimen matrix

| Matrix | Status on this platform | Notes |
|---|---|---|
| Serum | `[[ supported / not supported ]]` | `[[ clot time, separation window ]]` |
| Lithium heparin plasma | `[[ ]]` | `[[ preferred matrix per IFU ]]` |
| EDTA plasma | `[[ ]]` | `[[ chelation compatibility per analyte ]]` |
| Whole blood | `[[ ]]` | `[[ not applicable for serum-based immunoassays ]]` |
| Rectal swab / faecal | `[[ ]]` | `[[ for enteric antigen assays only ]]` |
| Urine | `[[ ]]` | `[[ for renal markers where validated ]]` |

**The rule that prevents most confusion:** a result is only comparable to another result from the same matrix, on the same platform, handled the same way. Converting a historical serum result to a plasma value without a documented comparison is a calculation, not a measurement.

## Stability windows

| Condition | Limit | Analytes affected |
|---|---|---|
| Room temperature before centrifugation | `[[ ]]` | `[[ ]]` |
| 2–8 °C after separation | `[[ ]]` | `[[ ]]` |
| −20 °C | `[[ ]]` | `[[ ]]` |
| Freeze-thaw cycles | `[[ max ]]` | `[[ ]]` |

`[[ A stability table that names no analyte is not a specification. Publish per-analyte limits, or state explicitly which analytes share a limit and why. ]]`

## Hemolysis, lipemia and icterus

These are not rare events in the populations where POCT is used: trauma, sepsis, dehydration and metabolic crisis all produce samples that are hemolysed, lipemic, or both.

| Interferent | Threshold | Effect |
|---|---|---|
| Hemoglobin | `[[ g/L ]]` | `[[ none / positive bias / negative bias ]]` |
| Triglycerides | `[[ mg/dL ]]` | `[[ ]]` |
| Bilirubin | `[[ mg/dL ]]` | `[[ ]]` |

Practical guidance for clinics, independent of platform:

- **Assess before loading.** A visual check is crude but better than no check; where the analyzer reports a hemolysis index, use it.
- **Do not centrifuge twice as a fix.** Re-spinning a hemolysed sample does not remove free hemoglobin.
- **Repeat rather than correct.** If a result is flagged for interference, a fresh sample answers the question more reliably than an arithmetic adjustment.
- **Document the flag.** A result reported with a known interferent and no annotation is worse than a delayed result.

## Time to result versus time to test

Vendors quote time to result — minutes from loading to reading. Clinicians experience **time to test**, which includes collection, separation, transport and queueing. For an in-house analyzer these are close; for a shared device or a satellite clinic they can differ by hours, and it is the second number that determines whether a result changes a same-visit decision.

`[[ State both: instrument time to result per assay, and the maximum sample age at which the result remains valid. ]]`

## Six traps

1. **Assuming serum and plasma are interchangeable.** They are not, absent a comparison.
2. **Using EDTA because it was the available tube.** Chelation effects are assay-specific.
3. **Delaying centrifugation in a warm room.** The most common silent error in busy clinics.
4. **Re-freezing an aliquot "just once more."** Cycles accumulate.
5. **Loading a cold cartridge.** Temperature equilibration affects reaction kinetics.
6. **Reporting a result with no interference annotation.** The number outlives the caveat.

## The Author's Take

**Position.** The most useful single artefact a POCT vendor can give a clinic is a one-page sample acceptance card — matrix, tube type, time to centrifugation, storage window, interference flags — laminated and stuck to the wall next to the analyzer.

**Reasoning.** Training does not survive staff turnover; a card does. Every complaint about "unreliable results" that I would expect in this category traces back to a pre-analytical deviation that no one recorded: a sample left on the bench, a tube type substituted, a hemolysed draw. Vendors tend to invest in analytical claims because they are measurable and comparable, while the largest source of field error sits in a process nobody documents. A card also has a commercial function: it makes the platform look operationally thought-through, which is what a multi-site buyer is actually assessing — not the CV, but whether ten branches will run it the same way.

**Disclosure.** Written from general pre-analytical laboratory practice and CLSI conventions; no new experimental data. Values marked `[[ ]]` are placeholders for Migibio's validation work and IFU content.

## Sources

1. CLSI GP41 / GP48 — specimen collection, handling and transport conventions for venous blood specimens.
2. CLSI EP07 — interference testing in clinical chemistry (hemolysis, lipemia, icterus evaluation).
3. `[[ Per-analyte stability studies — internal validation reports; state study identifiers ]]`
4. ASVCP quality assurance guidelines — pre-analytical considerations in veterinary laboratory testing.

<!-- DATA REQUIRED before publication:
1. Supported matrices per analyte, and the matrix named in each IFU
2. Anticoagulant compatibility statement per analyte (Li-heparin, EDTA, citrate)
3. Centrifugation specification (RCF, minutes, temperature)
4. Stability: room temp / 2-8C / -20C and freeze-thaw maximum, per analyte
5. Hemolysis, lipemia, icterus thresholds per analyte
6. Instrument time to result vs maximum valid sample age
-->
