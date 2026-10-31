---
title: "Point-of-Care Testing in a Reference Laboratory: Where It Fits and Where It Does Not"
slug: "applications/reference-laboratory"
description: "Where quantitative POCT adds value in a reference laboratory — STAT samples, overflow capacity, after-hours cover and analyzer downtime — and the acceptance criteria to apply before adding a second measurement platform."
faq:
  - q: "Does point-of-care testing belong in a reference laboratory?"
    a: "It belongs in specific roles: STAT samples that cannot wait for the batch run, overflow when the main analyzer is at capacity, after-hours cover when staffing is thin, and backup during analyzer downtime. It does not replace a high-volume validated platform for routine batch work, because per-test cost and traceability economics both favour the main analyzer."
  - q: "What acceptance criteria should a reference laboratory apply before adding POCT?"
    a: "Four: a method comparison against the laboratory's existing method with bias inside the laboratory's total allowable error; documented imprecision at the concentrations where clinical decisions are made; a defined QC and calibration regime that satisfies the laboratory's quality system; and a result-integrity pathway into the LIS, including flags and units."
  - q: "What is the main risk of introducing POCT into a reference laboratory?"
    a: "Two measurement channels producing non-comparable results for the same analyte. If the POCT value and the main analyzer value differ systematically and both are reported under the same analyte name, clinicians receive a number whose meaning depends on which instrument ran it. That risk must be managed at the reporting level, not only at the analytical level."
---

# Point-of-Care Testing in a Reference Laboratory: Where It Fits and Where It Does Not

**Quick Answer** — A reference laboratory should adopt POCT as a **capacity and continuity tool**, not as a replacement for its main platform. The four defensible roles are STAT samples, overflow, after-hours cover, and backup during downtime. Before any of them is used, the laboratory needs a method comparison, a precision statement at decision concentrations, a QC regime that fits its quality system, and a reporting pathway that prevents two channels from producing two meanings for one analyte.

## Quick Answer

The question is not "is POCT good enough" — it is "for which samples, in which window, with which acceptance criteria, and how is the result labelled".

## The four legitimate roles

| Role | Clinical driver | Constraint |
|---|---|---|
| STAT samples | A result needed before the batch run completes | Volume must stay low enough that per-test cost is justified |
| Overflow | Main analyzer at capacity during peak | Queue logic must be explicit, not ad hoc |
| After-hours cover | Staffing thin overnight | Competency and QC must be maintainable by the on-call staff |
| Downtime backup | Main analyzer failure | Documented continuity procedure, not improvisation |

`[[ State the platform's throughput, time-to-result and per-test economics, and the sample volumes at which each role becomes defensible. ]]`

## The acceptance criteria that a laboratory quality system will ask for

1. **Method comparison** against the existing method, with Passing-Bablok slope/intercept and Bland-Altman bias, judged against the laboratory's total allowable error. r alone is not an acceptance criterion.
2. **Imprecision at decision concentrations**, not at midrange only — because that is where results are classified.
3. **QC and calibration regime** documented in the laboratory's own SOP, including lot-change verification and the record format that survives an audit.
4. **Traceability statement** scoped honestly: which calibrator, which assignment method, and where the chain ends.
5. **Result integrity**: units, flags, reference intervals and below-LoQ/above-range conventions that match the LIS, so the reporting layer cannot silently mix two methods.

`[[ Insert the laboratory-specific TEa values used for acceptance, and the platform data that must be compared against them. ]]`

## The two-channel problem

The risk that gets underestimated is reporting, not measurement. If the POCT channel reports `[[ ]]` and the main analyzer reports `[[ ]]` for the same analyte in the same unit, and both appear in the same report under one analyte name, the clinician has no way to know which method produced the value. That is not a small inconsistency; it invalidates trend interpretation and can invalidate a reference interval.

Three mitigations, in order of preference:

1. **Label the method on every result line** in the LIS, so the value carries its provenance.
2. **Use the POCT channel only for analytes where a method-specific reference interval is displayed alongside it.**
3. **Do not mix channels for trending** on the same patient without documenting the switch.

## Capacity planning

`[[ Insert the queue model: samples per hour, batch size, turnaround target, and the volume at which the POCT channel reduces the laboratory's overall turnaround rather than adding a parallel queue. ]]`

A POCT channel that duplicates an existing fast path adds cost without improving turnaround. It earns its place when it removes a specific bottleneck — the single urgent sample that would otherwise wait 90 minutes, or the overnight gap when the main platform is not staffed.

## Operational requirements often missed

- **Competency assessment** for whoever runs the device, including weekend and locum staff.
- **Reagent management** separate from the main platform: lot control, expiry, storage temperature.
- **Connectivity** — result transfer without manual transcription, or a documented and audited manual pathway.
- **Continuity procedure** for when the POCT device itself fails, since it is being used as the backup.

## Six traps

1. **Treating POCT as a cheaper substitute for the main platform.** Per-test economics rarely support that.
2. **Accepting correlation as method validation.** Bias and TEa are the criteria.
3. **Two channels, one analyte name.** The reporting failure described above.
4. **No competency plan for on-call staff.** The device works; the operator is untrained.
5. **Backup device with no backup.** Continuity planning that stops at one level.
6. **QC organised around the main platform's schedule.** The POCT device needs its own rhythm.

## The Author's Take

**Position.** In a reference laboratory, the value of POCT is measured in minutes saved on a small number of urgent samples — and a vendor that sells it as a volume platform will lose the account at the first cost review.

**Reasoning.** Laboratory directors run the numbers on a per-test basis, and POCT loses that comparison by design: the economics of batch testing are better. What POCT wins is the tail — the 3 a.m. sample, the STAT that would otherwise miss a surgical window, the week the main analyzer is down. Vendors who understand this sell a small number of units into a well-defined role; vendors who overstate the case sell an instrument that gets used enthusiastically for a quarter and then sits idle while the director writes it off. The narrower claim is not a concession, it is the only claim that survives a procurement committee.

**Disclosure.** This page is operational guidance for laboratories, not a performance claim. Figures marked `[[ ]]` indicate where platform specifications and laboratory-specific TEa values must be inserted.

## Sources

1. CLSI EP09 — method comparison and bias estimation using patient samples.
2. CLSI EP05 — precision evaluation.
3. CLSI EP28-A3c — reference intervals (channel-specific validity).
4. `[[ Laboratory's own total allowable error policy and LIS reporting conventions ]]`
