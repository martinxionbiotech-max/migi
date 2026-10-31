---
title: "Core Technology"
slug: "core-technology"
description: "Fluorescence Immunochromatographic Technology (FICT): how a lateral-flow assay produces an instrument-read concentration, what makes that quantification possible, and where the method's limits sit."
faq:
  - q: "What makes FICT quantitative rather than qualitative?"
    a: "The detection signal is fluorescence from labelled microspheres, read by an instrument rather than judged by eye. Because the emitted intensity is measured against a lot-specific calibration curve, the result is a concentration rather than the presence or absence of a visible line."
  - q: "Does a quantitative result mean the assay is automatically more accurate?"
    a: "No. Quantification is a property of signal handling and calibration; accuracy depends on the assay's bias against a reference method and on its clinical validation. A quantitative assay can be precise and still biased, which is why analytical and clinical performance are published separately."
  - q: "Where are the limits of the method?"
    a: "Three matter most: interference from hemolysis, lipemia and icterus in real clinical samples; antigen excess in sandwich formats, which can produce a falsely low signal at very high concentrations; and pre-analytical handling, which in routine use produces larger deviations than the assay itself."
---

# Core Technology

Migibio's diagnostic platforms are built on **Fluorescence Immunochromatographic Technology (FICT)** — a lateral-flow immunoassay in which the detection signal comes from fluorescent microspheres rather than colloidal gold, and in which the signal is read by an instrument rather than by eye.

That second half of the sentence is the part that matters commercially. A colloidal-gold strip answers a question with a visible line. A FICT cartridge answers it with a number, and a number is only useful if the instrument, the calibration and the reporting conventions around it are specified. This page describes the technology, and links to the pages that specify it.

## How FICT Works

1. **Sample application** — serum, plasma, whole blood, or a swab specimen is applied to the sample well.
2. **Immuno-binding** — fluorescent microspheres labelled with analyte-specific antibodies bind the target.
3. **Capillary migration** — the labelled complex flows along a nitrocellulose membrane and is captured at the test (T) and control (C) lines.
4. **Quantification** — the analyzer excites the captured fluorophores and converts emitted fluorescence intensity into a concentration using the stored calibration curve for the reagent lot.

## Why fluorescence, and why an instrument

Three properties follow from moving the detection step off the human eye:

**Dynamic range.** A visual strip compresses a wide concentration range into a narrow visual scale; above a certain intensity, all strong positives look identical. Fluorescence detection preserves gradations well past the point where a gold line saturates, which is what allows a reported value to be trended between visits.

**Objectivity.** Visual reading varies between operators and between lighting conditions. An instrument reading removes that variance — and simultaneously makes it *measurable*, because instrument-read results can be quality controlled with control materials and charts.

**Recordability.** A numeric result can be stored, exported, plotted and audited. A visual impression cannot.

The cost of that shift is dependency: a quantitative result is only as good as its calibration. `[[ State whether the calibration curve is lot-specific and how the lot identity reaches the instrument. ]]`

## Temperature control

Immunoassay kinetics are temperature-dependent; capillary migration rate and antibody binding both shift with temperature. A platform that does not control temperature is implicitly assuming the clinic's ambient conditions.

`[[ State the temperature control mechanism and the specified operating range, and what happens outside it. ]]`

## What FICT does not solve

A technology page that lists only advantages is a brochure. Three limitations belong on this page rather than in a footnote:

| Limitation | Consequence | Where it is specified |
|---|---|---|
| Interference from hemolysis, lipemia, icterus | Distorted values in the sickest samples | [Interference and cross-reactivity](/technology/interference/) |
| Antigen excess in sandwich formats | Falsely low or negative result at very high concentration | [The hook effect](/technology/hook-effect/) |
| Sample handling before the cartridge | Larger error than the assay in routine use | [Sample handling](/technology/sample-handling/) |

## How the numbers are supported

Each of the following is a separate discipline, and each is published separately because collapsing them produces a marketing page rather than a specification:

- **[Analytical performance](/technology/analytical-performance/)** — LoB, LoD, LoQ, measuring interval.
- **[Precision](/technology/precision/)** — repeatability and intermediate precision, and what CV at low concentration means.
- **[Method comparison](/technology/method-comparison/)** — what agreement means beyond correlation.
- **[Reference intervals](/technology/reference-intervals/)** — why they are platform-specific and cannot be borrowed.
- **[Clinical performance](/technology/clinical-performance/)** — sensitivity, specificity, and the effect of prevalence.

## Platform specifications

Manufacturer-reported platform characteristics are published on the [analytical performance page](/technology/analytical-performance/), which separates platform-level figures from assay-level studies. `[[ Verify every figure quoted in marketing material against that page; where a value is platform-level, say so. ]]`

## Where the technology is applied

- **Veterinary diagnostics** — infectious disease antigens and antibodies, hormones, inflammatory markers, and kidney biomarkers for dogs and cats.
- **Food safety** — veterinary drug residue and mycotoxin screening.
- **Environmental monitoring** — heavy metal ion detection.

## The Author's Take

**Position.** The strongest thing this page can do is name the method's failure modes, because the alternative — presenting fluorescence as strictly superior — is contradicted the first time a clinic runs a hemolysed sample or a severely positive antigen case.

**Reasoning.** Every quantitative platform in this category has the same three exposures: interference, antigen excess, and pre-analytical handling. Buyers who have used POCT before already know this, so a page that omits them reads as either inexperienced or evasive, and experienced buyers discount everything else on it. Naming them, and linking to the mechanism and the mitigation, converts three potential complaints into three demonstrations of competence. In my judgement this is the highest-leverage change available to a technology page in this market: it costs nothing, and it changes how the rest of the site is read.

**Disclosure.** Written from published immunoassay principles and CLSI methodology; no new experimental data. Figures marked `[[ ]]` are placeholders for Migibio's platform documentation.

## Sources

1. CLSI EP06 — linearity and measuring interval.
2. CLSI EP07 — interference testing.
3. CLSI EP17 — detection capability.
4. `[[ Internal platform specification document — temperature control, calibration mechanism, dynamic range ]]`
