export const HIGHLIGHT_METRICS = [
  "projectsDelivered",
  "performanceGain",
  "satisfaction"
] as const;

export type HighlightMetricKey = (typeof HIGHLIGHT_METRICS)[number];


