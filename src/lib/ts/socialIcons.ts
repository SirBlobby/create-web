import type { SocialKind } from './group';

export type SocialMeta = {
	icon: string;
	label: string;
};

export const socialMeta: Record<SocialKind, SocialMeta> = {
	scholar: { icon: 'academicons:google-scholar', label: 'Google Scholar' },
	orcid: { icon: 'academicons:orcid', label: 'ORCID' },
	linkedin: { icon: 'mdi:linkedin', label: 'LinkedIn' },
	researchgate: { icon: 'academicons:researchgate', label: 'ResearchGate' }
};
