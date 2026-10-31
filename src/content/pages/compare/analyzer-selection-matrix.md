---
title: "Analyzer Selection Matrix: Four Variables That Decide the Purchase"
slug: "compare/analyzer-selection-matrix"
description: "A weighted selection framework for veterinary point-of-care analyzers based on peak concurrent demand, test menu fit, space and staffing, and total cost — with the scoring logic exposed so you can disagree with it."
faq:
  - q: "Should I choose an analyzer by test menu size?"
    a: "Menu size matters only where you will actually run the tests. A large menu that the clinic never uses adds cost in expiring reagents and training burden without adding decision value. Score menu by fit to case mix and by expected utilisation, not by count."
  - q: "How do I weigh price against capability?"
    a: "Convert both to cost per decision-relevant test: analyzer depreciation over its life, divided by expected tests, plus consumables and staff time. A cheaper device that does not fit the workflow has a higher real cost per useful result."
  - q: "What is the single most predictive variable?"
    a: "Peak concurrent demand. It determines whether a single-channel device queues at the moment testing matters most, and it is the variable clinics most often estimate from their daily average instead of their busiest hour."
---

# Analyzer Selection Matrix

**Quick Answer** — Four variables decide most purchases: peak concurrent demand, menu fit to case mix, physical and staffing constraints, and cost per decision-relevant test. Everything else — brand, feature list, brochure throughput — is downstream of those four. This page makes the weighting explicit so that a buyer can disagree with it deliberately rather than by instinct.

## The four variables, weighted

| Variable | Weight | Why |
|---|---|---|
| Peak concurrent demand | 35% | Determines queueing at the moment that matters |
| Menu fit to case mix | 30% | Unused menu is cost without benefit |
| Space, staffing, workflow | 20% | Predicts whether the device gets used at all |
| Cost per decision-relevant test | 15% | The financial reality, after the first three |

Weights are a starting point, not a doctrine. A shelter will weight cost higher; a hospital with an emergency service will weight peak demand above all.

## Scoring, per variable

**1. Peak concurrent demand (35%)**

| Observation | Score |
|---|---|
| Tests never cluster; one at a time is fine | 1 |
| Occasional overlap, no clinical consequence | 2 |
| Regular overlap during busy periods | 3 |
| Emergency or multi-vet service where a wait delays treatment | 4 |
| Batch arrivals (shelter outbreak, referral intake) | 5 |

**2. Menu fit (30%)** — score by how many of your top ten decision-changing tests the platform covers, then discount for assays you would order monthly or less.

**3. Space, staffing, workflow (20%)** — placement near the treatment area, bench space, training burden, assignment of QC ownership.

**4. Cost per decision-relevant test (15%)** — `(analyzer cost / expected lifetime tests) + consumables + staff minutes` compared with the send-out equivalent.

> **Data pending.** This section reports measured values from internal validation studies. They are published once the supporting study is complete; the current report is available from technical support on request.

## Reading a completed matrix

| Total score | Interpretation |
|---|---|
| 4–8 | Single-channel bench-top device is likely sufficient |
| 9–13 | Multi-channel device; evaluate custom curves and connectivity |
| 14–17 | Multi-channel plus parallel units, or a higher-throughput platform |
| 18–20 | Reassess whether in-house testing is the right model at all |

The last row is deliberate. Very high scores across all four variables sometimes indicate that the clinic needs a different model — a shared laboratory service, or a partnership — rather than a bigger instrument.

## The variables clinics forget

- **QC ownership.** An instrument without a named owner is an instrument that drifts.
- **Reagent expiry.** A broad menu in a low-volume clinic expires before it is used.
- **Connectivity.** Manual transcription is where results get lost.
- **Service and downtime.** What happens when the device fails during an outbreak?
- **Training turnover.** Locums and new staff must be able to run it from a card.

## Using the matrix with a vendor

A vendor who helps you complete the matrix will usually recommend a smaller device than you expected. That is a signal to trust, not a sales failure: the device that fits gets used, and the one that does not fit gets blamed for its own underuse.

## Six traps

1. **Scoring menu by count.** Fit beats breadth.
2. **Estimating peak demand from the average.** The average hides the queue.
3. **Ignoring staffing.** The analyzer is used by people, not by the clinic.
4. **Treating cost as sticker price.** Cost per useful result is the number.
5. **Skipping the "do we need in-house at all" question.** Sometimes the answer is no.
6. **No owner assigned.** The most reliable predictor of underuse.

## The Author's Take

**Position.** Publishing a scoring matrix — including the row that suggests you may not need an analyzer at all — is the single most credible thing a vendor can put on a comparison page.

**Reasoning.** Buyers have been through enough sales processes to recognise a decision framework that exists only to justify a predetermined recommendation. A matrix published openly, with weights the buyer can change and a terminal row that argues against the purchase, reads as engineering advice rather than marketing. It also does something practical: it moves the conversation from "which model" to "which variables", which is where the vendor's actual expertise lives and where the buyer's uncertainty is highest.

**Disclosure.** Weights are a proposed framework, not a validated instrument. Figures marked indicate where platform data must be inserted.

## Sources

1. [FIA680 vs FIA880](/compare/fia680-vs-fia880/) — capacity and specification detail
2. [In-clinic POCT: capacity, menu and workflow](/applications/veterinary-clinic/)
3. Reference to be added.
