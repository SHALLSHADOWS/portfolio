export const EXPERTISE_AREAS = ["productWeb", "backendApi", "deliveryOps"] as const;

export type ExpertiseAreaKey = (typeof EXPERTISE_AREAS)[number];


