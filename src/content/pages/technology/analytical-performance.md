---
title: "Analytical Performance: What Our Platform Measures and How to Read It"
slug: "technology/analytical-performance"
description: "LoB, LoD, LoQ, measuring interval, precision and lot-to-lot consistency for Migibio's FICT platform, defined in CLSI terms with the questions buyers should ask any vendor."
faq:
  - q: "What is the difference between LoD and LoQ?"
    a: "LoD is the lowest concentration the assay can detect above blank at a stated probability; LoQ is the lowest concentration it can report with acceptable total error at a stated CV target. LoD is a detection claim, LoQ is a measurement claim — only results at or above LoQ should be trended."
  - q: "Why does Migibio publish analytical performance separately from clinical performance?"
    a: "Analytical performance describes whether the platform can measure a concentration reliably (LoD, LoQ, precision, linearity). Clinical performance describes whether a positive result corresponds to disease, which requires sensitivity and specificity against a reference standard. They are different categories of evidence and are published on separate pages."
  - q: "What should a buyer request from any veterinary POCT vendor?"
    a: "LoD with method and probability, LoQ with its CV target, precision separated into repeatability and intermediate precision with days and lots stated, linearity verified by dilution rather than asserted, lot-to-lot tolerance, the sample type used in each study, and access to study identifiers on request."
---

# Analytical Performance: What Our Platform Measures and How to Read It

## Quick Answer

This page defines the analytical performance characteristics of Migibio's fluorescence immunochromatographic (FICT) platform in the standard terms used by veterinary diagnostic laboratories: limit of blank, limit of detection, limit of quantification, measuring interval, precision, and lot-to-lot consistency. Assay-level values are listed in the table below. Clinical sensitivity and specificity are a different category of evidence and are published separately, because a test can be analytically excellent and clinically uninformative at the same time.

---

## Why this page exists separately from "clinical performance"

Veterinary buyers routinely conflate two different questions:

| Question | Category | Where the evidence lives |
|---|---|---|
| Can the assay detect a low concentration reliably? | Analytical | Limit of detection, limit of quantification |
| If the result is positive, is the animal actually diseased? | Clinical | Diagnostic sensitivity and specificity vs a reference standard |
| If I repeat the test, will I get the same number? | Analytical | Precision (repeatability, intermediate precision) |
| Does the number mean the same thing on day 1 and after a lot change? | Analytical + QC | Linearity, lot-to-lot, calibration |

A platform can hold a LoD of a few pg/mL and still be clinically weak if the analyte is not specific for the disease in question. Publishing the two categories in one undifferentiated table is how marketing documents get written — and it is also how procurement committees get misled. We keep them apart deliberately.

---

## The definitions we use

These follow the CLSI conventions that veterinary laboratories are evaluated against, so a reviewer can check our numbers without translation.

**Limit of Blank (LoB)** — the highest result expected from a sample containing no analyte, at a stated probability (typically 95%). It characterises the assay's noise floor, not its usefulness.

**Limit of Detection (LoD)** — the lowest concentration expected to be detected above the blank at a stated probability (typically 95%). LoD is a claim about *seeing* something, not about *measuring* it. A result at LoD is a detection event, not a number to trend.

**Limit of Quantification (LoQ)** — the lowest concentration that can be reported with acceptable total error, defined by a precision goal you choose in advance (commonly a CV target at low concentration). **LoQ is the number that matters in clinical use**, because it is where the assay stops being a yes/no detector and starts being a value you can compare across visits.

**Measuring interval (reportable range)** — the concentration span between LoQ and the upper limit of linearity, within which results are reported without dilution.

**Repeatability vs intermediate precision** — repeatability is within-run, one operator, one lot, one day. Intermediate precision adds operators, days, and lots. The gap between the two tells you how much of your observed variation is the assay and how much is the clinic.

**Lot-to-lot consistency** — whether a new reagent lot reproduces the previous lot's results within a defined tolerance. For a monitoring assay this is not a technical footnote: a shift between lots looks exactly like a patient improving or deteriorating.

---

## How to read the table (worked example, illustrative only)

`[[ The rows below are EXAMPLE format — replace every value with your verified measurement before publishing. Do not publish this example block. ]]`

| Analyte | Species | Sample | LoB | LoD | LoQ (CV target) | Measuring interval | Units |
|---|---|---|---|---|---|---|---|
| cCRP | Canine | `[[ plasma ]]` | `[[ x ]]` | `[[ x ]]` | `[[ x at CV ≤ 20% ]]` | `[[ LoQ – UL ]]` | mg/L |
| fSAA | Feline | `[[ serum ]]` | `[[ x ]]` | `[[ x ]]` | `[[ x ]]` | `[[ LoQ – UL ]]` | mg/L |
| cPL | Canine | `[[ plasma ]]` | `[[ x ]]` | `[[ x ]]` | `[[ x ]]` | `[[ LoQ – UL ]]` | µg/L |

Three rules for reading any such table, ours included:

1. **Check the sample type.** A LoD established on lithium heparin plasma does not automatically transfer to serum or whole blood.
2. **Check the CV target behind LoQ.** A LoQ quoted at CV ≤ 20% and one quoted at CV ≤ 10% are not the same claim at the same concentration.
3. **Check whether LoD or LoQ is being quoted.** Documents that quote "sensitivity" without saying which of the two are not comparable with documents that do.

---

## Assay-level performance

`[[ Insert the full assay table here. Required columns: Analyte | Species | Sample | LoB | LoD | LoQ + CV target | Measuring interval | Precision (within-run CV%, between-run CV%, between-lot CV%) | Cut-off (if qualitative interpretation is offered) | Data on file (study ID / date) ]]`

**Editorial note:** assays without completed studies should be listed with `Data pending` rather than omitted. An incomplete table with visible gaps is more credible than a complete-looking table with absent provenance.

---

## Precision: why the low-concentration CV is the one that decides usefulness

Clinicians read a value at the top of the range and a value at the bottom of the range very differently, and the analytical behaviour at those two places is not symmetric. Imprecision is usually largest in relative terms at low concentration, which is exactly where the clinically decisive question is asked: *is this mildly elevated, or is this normal?*

Consider a dog monitored after starting therapy. The value moves from `[[ 82 ]]` to `[[ 68 ]]` mg/L over 48 hours. Whether that is a clinical improvement depends entirely on the combined imprecision at those concentrations. If the assay's intermediate precision at 70 mg/L is CV = 8%, the 95% confidence band on a single result is roughly ±16%, and a 17% apparent drop is inside the noise. If precision at that level is CV = 3%, the same drop is real.

This is why our technical documentation asks clinics to compare consecutive results from the same analyzer only, and why the reference change value framework is published alongside the reference interval.

---

## What a buyer should ask any vendor (including us)

A checklist we would want used on our own claims:

1. Is LoD quoted with a probability and a method (CLSI EP17-style), or is it a single replicate?
2. Is LoQ stated with the CV target that defines it?
3. Are precision figures separated into repeatability and intermediate precision — and across how many days and lots?
4. Is the measuring interval verified by dilution linearity, or asserted?
5. Is lot-to-lot consistency described as a tolerance, or as "validated"?
6. Is the sample type for each study stated, and does it match what the clinic will actually use?
7. Are the raw study identifiers available on request?

A vendor that cannot answer 1–4 has not measured what it claims. A vendor that cannot answer 7 is asking for trust instead of evidence.

---

## Limits of this page

Analytical performance says nothing about whether the test answers a clinical question. It also does not cover pre-analytical error — hemolysis, delayed separation, storage, and sampling technique routinely produce larger deviations than the assay itself. Those are addressed on the sample handling and interference pages, and they are the most common cause of a "wrong" result.

---

## The Author's Take

**Position.** Publishing a partly empty analytical table is a stronger commercial position than publishing a full-looking table without provenance.

**Reasoning.** Procurement and regulatory reviewers do not expect every assay to be equally mature — they expect the vendor to know which is which. A table that says "these eleven assays have completed precision and LoD studies; these six have LoD only; these four are pending" tells the reviewer that the quality system tracks evidence status. A uniformly confident table tells them the opposite, and the first missing study ID confirms it. In tenders, this distinction usually decides whether the vendor is treated as a manufacturer or as a trader.

**Disclosure.** This page describes methodology and reporting conventions; it does not report new experimental results. Figures marked `[[ ]]` are placeholders for Migibio's internal measurements and must not be published unreplaced.

---

## Sources

1. CLSI EP05 — Evaluation of precision of quantitative measurement procedures (repeatability and intermediate precision design).
2. CLSI EP06 — Evaluation of linearity of quantitative measurement procedures.
3. CLSI EP17 — Evaluation of detection capability (LoB, LoD, LoQ definitions and experimental design).
4. CLSI EP28-A3c — Defining, establishing, and verifying reference intervals.
5. ASVCP quality assurance guidelines for veterinary laboratories (quality goals and total allowable error conventions in veterinary clinical pathology).
6. Baral RM, Dhand NK, Krockenberger MB, Govendir M. Assessments of feline plasma biochemistry reference intervals for three in-house analysers and a commercial laboratory analyser. *Journal of Feline Medicine and Surgery* 2015;17(8):667–679 — evidence that analyser-provided limits frequently fall outside locally calculated confidence intervals.
7. Evaluation of a novel quantitative canine species-specific point-of-care assay for C-reactive protein. *BMC Veterinary Research* 2018. https://doi.org/10.1186/s12917-018-1415-2 — source for platform-dependent bias and same-analyzer follow-up recommendation.

---
