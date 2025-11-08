export const PROCESS_STEPS = ["discovery", "architecture", "delivery", "handoff"] as const;

export type ProcessStepKey = (typeof PROCESS_STEPS)[number];


