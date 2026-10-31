---
title: "Calibration and Traceability: What 'Traceable' Actually Means for a Veterinary Assay"
slug: "technology/calibration-traceability"
description: "How lot-specific calibration works on the FICT platform, what the traceability chain looks like, and why many veterinary analytes have no certified reference material — stated plainly rather than implied away."
faq:
  - q: "What does calibration do on a fluorescence immunoassay analyzer?"
    a: "Calibration establishes the mathematical relationship between measured signal and analyte concentration for a specific reagent lot. On cartridge-based platforms this is often carried by a lot-specific code or identifier read by the instrument, so the stored curve matches the chemistry in the box rather than a generic master curve."
  - q: "Is a veterinary assay traceable to an international standard?"
    a: "For many veterinary analytes, no certified reference material exists, and a traceability claim cannot be made to an SI reference in the way it can for clinical chemistry analytes such as glucose or creatinine. The honest statement scopes the claim: traceable to an internal master lot or to a defined comparison method, with the limitation stated rather than implied away."
  - q: "How often should recalibration be performed?"
    a: "Recalibration is triggered by events rather than by the calendar: a new reagent lot, a confirmed QC shift, instrument service, or a significant environmental excursion. A fixed interval with no event triggers does not substitute for lot-change verification."
---

# Calibration and Traceability: What "Traceable" Means for a Veterinary Assay

**Quick Answer** — Calibration defines the signal-to-concentration relationship for a specific reagent lot; verification through quality control confirms that relationship still holds. Traceability describes the unbroken chain of comparisons linking a reported value to a defined reference. For many veterinary analytes that chain terminates at a manufacturer's master lot rather than at an international standard — which is a legitimate state of affairs, provided it is stated rather than glossed.

## Quick Answer

"Traceable" is not a badge; it is a statement about where the chain ends. A vendor that names the end point is more useful than one that prints the word alone.

## What happens at calibration on a cartridge platform

1. **Lot identity is read.** The instrument reads a lot-specific identifier (often carried by a code chip or an encoded label) so the stored calibration corresponds to that lot's chemistry.
2. **The curve is loaded.** The instrument applies the stored signal-to-concentration relationship rather than assuming a universal curve.
3. **Verification follows.** Controls confirm that the loaded curve reproduces expected values on that instrument, on that day.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

The distinction matters commercially and technically: a lot-specific curve scopes risk to a lot; a shared master curve requires demonstration that the manufacturing variation between lots is small enough to be absorbed. One is not automatically better, but a buyer cannot evaluate the claim without knowing which is in use.

## Verification is not recalibration

| Situation | Action |
|---|---|
| Routine day | QC only |
| New reagent lot | Verify with controls before patient use |
| QC shift confirmed | Investigate, then recalibrate/replace lot, then re-verify |
| Instrument service | Verify, and recalibrate if service touched optics or mechanics |
| Temperature excursion | Verify before use |
| Assay used outside validated sample type | Not a calibration issue — do not recalibrate to compensate |

The last row is the one that matters most. Clinics sometimes "fix" discordant results by recalibrating, which removes the evidence of a pre-analytical or usage error and installs a bias instead.

## The traceability chain, honestly described

A complete traceability statement names each link:

```
Reported result
  → assay calibration (lot-specific curve)
    → internal master calibrator (defined concentration assignment)
      → comparison method or reference material
        → [end point: certified reference material / international standard / none]
```

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

**The clinical consequence of a shortened chain.** If two manufacturers' assays both terminate at their own internal master lots, their results are not guaranteed comparable in absolute terms. This is not a defect unique to one vendor — it is the state of veterinary immunoassay — but it has a practical implication clinicians must be told: absolute values are platform-specific, and cut-offs derived from another platform's master lot do not transfer.

## What should trigger a recalibration

- New reagent lot, always, before patient use.
- Confirmed QC shift (two consecutive controls beyond 2 SD on the same side, or one beyond 3 SD that repeats).
- Service affecting optics, mechanics, or temperature control.
- Environmental excursion outside the specified operating range.
- Discrepancy between an expected control value and the observed one that survives re-testing.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## Documenting a calibration event

Minimum record: date and time, operator, instrument ID, reagent lot, calibration identifier, control values before and after, pass/fail against acceptance criteria, and the reviewer. This record is what converts a calibration from an action into evidence.

## Five errors

1. **Treating calibration as maintenance that can be skipped when controls pass.** Controls verify; calibration establishes.
2. **Using a shared curve across lots without demonstrated comparability.** A manufacturing assumption presented as a fact.
3. **Claiming "traceable to international standards" without naming one.** For most veterinary analytes this claim cannot be made.
4. **Recalibrating to fix a sample-handling problem.** Installs bias and destroys evidence.
5. **No record of the calibration event.** Unverifiable after the fact.

## The Author's Take

**Position.** For veterinary immunoassays, the truthful statement — "traceable to our internal master lot, no certified reference material exists for this analyte" — is commercially stronger than an ambiguous claim of international traceability.

**Reasoning.** Buyers in this category are increasingly sophisticated: distributors preparing registration dossiers, laboratories that have read the CLSI documents, and reference labs that will ask which method the calibrator was assigned against. An ambiguous claim survives until the first technical question, and then costs credibility on every other claim on the site. A scoped claim survives the question, and it also tells the buyer something actionable: absolute values are platform-specific, which is exactly the information they need before switching methods. The uncomfortable sentence is the one that keeps the rest of the page believable.

**Disclosure.** Written from CLSI calibration and traceability conventions; no new experimental data. Values marked are placeholders for Migibio's calibration documentation.

## Sources

1. CLSI EP32 / EP15 — metrological traceability and verification of performance for quantitative measurement procedures.
2. ISO 17511 — in vitro diagnostic medical devices: establishment of metrological traceability of values assigned to calibrators and control materials (scope and limits for analytes without reference materials).
3. CLSI C24 — statistical quality control (verification practice following calibration).
4. Reference to be added.

<!-- DATA REQUIRED before publication:
1. Calibration mechanism (code chip / barcode / on-board) and whether curves are lot-specific
2. Calibrator value assignment method per analyte
3. Traceability end point per analyte (certified material / comparison method / internal master lot)
4. Operating temperature and humidity range, and excursion response
5. Recalibration trigger policy as written in the IFU
6. Calibration record template fields
-->
