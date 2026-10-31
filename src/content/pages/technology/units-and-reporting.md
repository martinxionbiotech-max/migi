---
title: "Units and Reporting: Why 'Tu/ml' Needs a Definition Before It Needs a Marketing Page"
slug: "technology/units-and-reporting"
description: "Reporting units, relative versus mass concentration, decimals and rounding, below-LoQ and above-range conventions — and why an undefined test unit undermines an otherwise credible quantitative assay."
faq:
  - q: "What does Tu/ml mean on a test result?"
    a: "Test units per millilitre is a relative unit defined by the assay's own calibration rather than by an SI mass or molar quantity. It is a valid way to report a result only when the definition is published: what one unit represents, whether it can be converted to a mass concentration, and the fact that values are not comparable with assays that use a different unit."
  - q: "Why is a relative unit a problem for veterinary buyers?"
    a: "Buyers compare menus, cut-offs and published literature across platforms. A result in an undefined unit cannot be compared with a literature threshold reported in mg/L, cannot be converted for a tender specification, and cannot be reconciled when a clinic switches platforms. The unit becomes a barrier to adoption even when the assay itself performs well."
  - q: "How should a result below the limit of quantification be reported?"
    a: "Report it as below the limit of quantification with the limit stated, not as a zero and not as a number the assay cannot support. A reported zero implies a measurement that was not made; a fabricated number implies precision the method does not have."
---

# Units and Reporting: Why "Tu/ml" Needs a Definition Before It Needs a Marketing Page

**Quick Answer** — A quantitative assay is only as useful as its unit. Reporting in a mass concentration (mg/L, µg/L) allows comparison with literature, cut-offs and other platforms; reporting in an assay-defined test unit (Tu/ml) is legitimate only if the definition, the conversion status and the comparability limits are published alongside it. An undefined unit turns a precise number into an unusable one.

## Quick Answer

Units are not formatting. They determine whether a clinician can act on a number, whether a buyer can compare a menu, and whether a registration dossier can be written without a footnote.

## The two kinds of unit

| Type | Example | What it guarantees | What it does not |
|---|---|---|---|
| Mass concentration | mg/L, µg/L, ng/mL | Comparability with literature using the same quantity | Comparability across methods with different bias |
| Molar concentration | nmol/L, pmol/L | Cross-analyte stoichiometry where the molecule is defined | Applicability when the analyte is a heterogeneous mixture |
| Assay-defined unit | Tu/ml, AU/mL | Internal consistency within one assay family | Anything outside that assay family |
| Ratio / index | UPC, HIL index | A defined arithmetic relationship | Absolute concentration |

**Assay-defined units are not illegitimate.** Antibody titres, allergen-specific IgE and many immunoassays legitimately report relative units because no mass assignment is possible. The issue is not the choice of unit; it is whether the choice is declared.

## What an undefined unit costs, concretely

1. **Literature comparison fails.** A clinician reading a paper that reports mg/L cannot map a Tu/ml result onto it.
2. **Tender and registration documents cannot be completed** without a conversion or an explicit statement that none exists.
3. **Switching platforms becomes non-comparable**, so historical patient data cannot be reinterpreted.
4. **AI and search extraction fails.** A number without a comparable unit is not an extractable fact, which removes the page from the answer layer entirely.
5. **It signals an unfinished document.** Buyers read an undefined unit as a symptom, not a detail.

`[[ State, per analyte, whether the unit is mass, molar, or assay-defined; if assay-defined, publish the definition and the conversion status. ]]`

## The three acceptable resolutions for an assay-defined unit

| Option | Requirement | When appropriate |
|---|---|---|
| Convert to mass concentration | A documented assignment (gravimetric standard, comparison to a validated mass-reporting method) with the conversion factor published | Where the analyte is a well-defined molecule and assignment is feasible |
| Define the unit explicitly | "1 Tu = [definition]; not convertible to mass units; not comparable across platforms" | Where assignment is not feasible — the honest option |
| Report both | Mass where available, relative unit as secondary | Where a partial assignment exists |

Reporting a number in a unit nobody can interpret, with no definition anywhere on the site, is the only option that is not defensible.

`[[ Insert the platform's decision per analyte: unit type, definition, conversion factor or explicit non-convertibility statement. ]]`

## Reporting conventions that should be standard

- **Decimals follow analytical performance.** Reporting three decimals from an assay with 10% CV at that concentration implies precision the method does not have.
- **Below LoQ is reported as "< [LoQ]"**, not zero and not a manufactured number.
- **Above the measuring interval is flagged, not truncated.** A result at the top of the range requires dilution confirmation, not a maximum value.
- **Units appear on every result line**, including printed reports and exported data — not only in the IFU.
- **Derived qualitative interpretations are stated as derived**, with the threshold that produced them, so a "positive" can be traced to a number.
- **Rounding rules are documented**, so two operators cannot produce two different reported values from one measurement.

`[[ Insert the rounding rules per analyte and the reporting template fields, including how below-LoQ and above-range are displayed. ]]`

## A worked illustration of the problem

Two clinics use the same platform. Clinic A reports `[[ 12.4 Tu/ml ]]`; clinic B's laboratory reports `[[ 8 mg/L ]]` for the same analyte in the same species. Without a published definition, neither clinician can tell whether these values agree, differ by a constant factor, or differ by a factor that changes across the range. The assay may be excellent; the reporting makes the comparison impossible — and the clinician, not the assay, pays for that.

## Common errors

1. **Publishing a unit with no definition anywhere.** The most common and most costly.
2. **Implying comparability through formatting.** Identical layouts with different units invite false comparison.
3. **Reporting below-LoQ values as numbers.** Manufactures precision.
4. **Inconsistent decimals between the analyzer screen and the printed report.**
5. **Deriving "positive/negative" without publishing the threshold.**
6. **Omitting units from exported data.** Makes downstream analysis ambiguous.

## The Author's Take

**Position.** Resolve the unit question before writing a single marketing sentence about accuracy, because the unit is the first thing a technical buyer checks and the cheapest thing to fix.

**Reasoning.** An assay can have excellent precision, a defensible reference interval and a real clinical use case, and still fail a distributor's technical review at the first table, because a value in an undefined unit cannot be placed in a tender document. The fix costs an internal decision and a published definition — not a study. In this context, leaving `Tu/ml` undefined is not a neutral choice; it converts a solved technical problem into an open commercial one, and it does so at the exact point where credibility is being assessed.

**Disclosure.** Written from general laboratory reporting conventions and ISO 17511 scope; no new experimental data. Values marked `[[ ]]` are placeholders for Migibio's decisions and assay documentation.

## Sources

1. ISO 17511 — assignment of values to calibrators and the limits of metrological traceability where no reference material exists.
2. CLSI EP06 — linearity and measuring interval (reportable range conventions).
3. CLSI C24 / general laboratory reporting practice — below-LoQ and above-range reporting conventions.
4. `[[ Internal unit-definition decision per analyte ]]`

<!-- DATA REQUIRED before publication:
1. Unit type per analyte (mass / molar / assay-defined)
2. Definition of Tu where used, and conversion status
3. Rounding rules and reported decimals per analyte
4. Below-LoQ and above-range display conventions
5. Threshold used for any derived qualitative interpretation
6. Whether units appear in printed and exported reports
-->
