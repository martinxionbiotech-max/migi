---
title: "Research Laboratories: Using POCT Without Breaking a Dataset"
slug: "applications/research-laboratory"
description: "Using point-of-care assays in veterinary research: where they fit (screening, stratification, welfare monitoring), what they cannot support, and the documentation a reviewer will ask for in a methods section."
faq:
  - q: "Can point-of-care results be published in a research paper?"
    a: "Yes, if the methods section states the platform, the reagent lot, the calibration approach, the precision at the concentrations used, and the reference interval source. What reviewers reject is not POCT — it is an unstated method. A result reported as 'CRP measured' without platform and lot is not reproducible."
  - q: "What are POCT assays unsuitable for in research?"
    a: "Primary endpoints that require traceable absolute values, longitudinal studies spanning multiple reagent lots without bridging, and any measurement where the reference method defines the unit. In those cases the assay can support screening or stratification, but the endpoint should be measured on a validated platform."
  - q: "How should lot changes be handled in a long study?"
    a: "Bridge them: measure a set of retained samples on both lots, document the comparison, and report whether a correction was applied. A lot change without a bridge is a confound that reviewers will find, often after publication."
---

# Research Laboratories: Using POCT Without Breaking a Dataset

**Quick Answer** — Point-of-care assays are excellent for screening, stratification, welfare monitoring and time-course experiments where the question is relative change. They are weak for primary endpoints that require traceable absolute values. The dividing line is not assay quality — it is whether the study needs a number that can be compared with literature produced on another platform. Get that decision right and the rest is documentation.

## Quick Answer

Three questions decide the fit: does the endpoint need absolute traceability, will the study span a lot change, and will a reviewer be able to reproduce the method from what you write?

## Where POCT fits well

| Use | Why it fits |
|---|---|
| Screening animals for inclusion/exclusion | Fast, low volume, result available before randomisation |
| Stratification by severity | Quantitative value supports grouping better than a clinical score alone |
| Welfare monitoring in longitudinal studies | Same-day results allow intervention thresholds |
| Time-course experiments | Frequent sampling is impractical with sent-out testing |
| Pilot work before committing to a reference-lab study | Cheap way to size the effect |

## Where it does not

| Use | Why not |
|---|---|
| Primary endpoint requiring absolute comparison with published values | Platform-specific calibration and bias |
| Multi-year study across lots without bridging | Lot shift confounds the time series |
| Measurements where the unit is defined by a reference method | Assay-defined units are not comparable |
| Regulatory submission data | Traceability chain must terminate at a recognised reference |

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## The methods paragraph a reviewer expects

A reproducible POCT methods section contains, at minimum:

1. Platform and model, with firmware/software version where relevant.
2. Analyte, reagent catalogue number and **lot number**.
3. Calibration approach — lot-specific code, on-board curve, or shared curve.
4. Sample type and handling, including time to analysis and storage.
5. Precision at the concentrations used, from the platform's own data or an in-study repeatability check.
6. Reference interval source, and a statement that it is platform-specific.
7. Statistical treatment of values below LoQ or above the measuring interval.

Omitting items 2, 3 and 5 is the most common reason a methods section is challenged.

## Lot bridging, in practice

When a long study crosses a reagent lot change:

1. Retain 20–30 samples spanning the measuring interval.
2. Measure them on the old lot before depletion.
3. Measure the same aliquots on the new lot within the new lot's stability window.
4. Compute the bias and decide: accept, correct, or report as a limitation.
5. Document the decision in the study file, not only in the paper.

A lot change without bridging is not a small documentation gap; it is a plausible alternative explanation for any effect the study reports.

## Data integrity

- **Export raw values**, with units and timestamps, rather than transcribing into a spreadsheet by hand.
- **Keep the instrument's own records** for audit.
- **Record exclusions** — clotted samples, insufficient volume, repeat runs — because they affect the denominator.
- **Store the lot numbers with the dataset**, not only in the lab notebook.

## Six traps

1. **Using POCT for a traceable primary endpoint.** The most common design error.
2. **Crossing a lot change without bridging.** Confound that reviewers find.
3. **Missing lot numbers in the methods.** Not reproducible.
4. **Reporting below-LoQ values as numbers.** Manufactures precision.
5. **Ignoring hemolysis in the sample set.** Interference becomes a study effect.
6. **Assuming reference intervals transfer.** They do not, and the paper will be criticised for it.

## The Author's Take

**Position.** The research segment is small in revenue but disproportionate in credibility: a vendor whose platform appears in a well-documented published study gains a reference that marketing cannot buy.

**Reasoning.** Researchers are the harshest technical reviewers a diagnostic product will ever face, and they publish their verdicts. A platform that supports reproducible methods — lot documentation, stated traceability, precision at the concentrations used — accumulates citations that function as third-party validation, which is precisely what this category lacks. The commercial mistake is to treat research as a low-margin channel and under-support it; the correct move is to publish a methods template and a lot-bridging protocol, which cost nothing and turn every study into a reference.

**Disclosure.** This page is methodological guidance, not a performance claim. Figures marked indicate where platform documentation must be inserted.

## Sources

1. Reference to be added.
2. Reference to be added.
3. CLSI EP05 / EP09 / EP28 — precision, method comparison, reference intervals.
