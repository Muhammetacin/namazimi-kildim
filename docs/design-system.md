# EPIC 02 design system

Initial implementation for NK-008 and NK-009. The approved palette is unchanged.
Typography uses platform system fonts and supports native text scaling. Shared
screens use safe areas, scrolling and a bounded content width. Buttons expose
disabled state and a minimum 48-point touch target. No personal records are
created by these primitives.

Remaining: tracking squares, icons and language flags, navigation, numbered
onboarding stepper, responsive and accessibility verification. Platform CI and
review are required before closing any issue.

## Icons (Final Design v1.3)

The navigation icons clock (Saat), calendar (Vakitler), grid (Takip) and
settings (two sliders) are plain geometry in `src/components/icon-shapes.ts` on
a 24 grid with a 1.5 stroke, rendered with React Native views. They need no SVG
dependency, take the tab color and stay hidden from screen readers unless a
label is given. Inactive tabs use the muted color, the active tab emerald.
Utility glyphs (check, back, next, close, add, info) remain text glyphs.
