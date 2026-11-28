# Final Design v1.3

Interactive reference: [namazimi-kildim-v1.3.html](namazimi-kildim-v1.3.html).
It supersedes Final Design v1.1 and the unreleased v1.2 prototype. Approved by
the owner on 2026-11-28. The test-time slider and the "Prototip kontrolleri"
panel exist only in the prototype and are not part of the app.

## Visible design changes

| Change                                                                      | Tickets                |
| --------------------------------------------------------------------------- | ---------------------- |
| Settings icon is a two-slider icon instead of a sun-like gear               | NK-011, NK-012         |
| Week and month heatmaps start on Monday and show weekday labels (Pzt..Paz)  | NK-038, NK-039         |
| Today is outlined in every heatmap                                          | NK-038, NK-039, NK-040 |
| The 12/24-hour setting applies to the clock, daily times and the day detail | NK-029, NK-034, NK-048 |

## Corrections

| Correction                                                                                         | Tickets                |
| -------------------------------------------------------------------------------------------------- | ---------------------- |
| Language, location and city cards use the same width as the search field and primary button        | NK-045, NK-046         |
| Stepper connectors are vertically centered on the numbered circles                                 | NK-013, NK-044         |
| Location and notification screens opened from Settings show a back header and "Tamam", no stepper  | NK-046, NK-047, NK-048 |
| Daily times: prayer name aligned with its time; "Şu anki vakit" appears only on the active row     | NK-034                 |
| Month heatmap starts in the correct weekday column                                                 | NK-039                 |
| Year heatmap opens at the current month and month labels sit above the matching week columns       | NK-040                 |
| Day detail: empty ring shows no dot at 0/5, history cannot go before the first record, large arrows | NK-041                 |
| Settings: even section spacing, equal-width selects, no wrapped labels                             | NK-048                 |
| Français uses the French flag                                                                      | NK-045                 |
| Text inputs use at least 16 px on touch devices so iOS does not zoom                               | NK-014, NK-046         |
| Inactive tabs use the muted color #82735E; active tab uses emerald #086347                         | NK-012                 |
| Navigation icons are clock (Saat), calendar (Vakitler), grid (Takip)                               | NK-011, NK-012         |
