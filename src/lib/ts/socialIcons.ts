import type { SocialKind, SocialLink } from './group';

export type SocialMeta = {
	icon: string;
	label: string;
};

export const socialMeta: Record<SocialKind, SocialMeta> = {
	scholar: { icon: 'academicons:google-scholar', label: 'Google Scholar' },
	orcid: { icon: 'academicons:orcid', label: 'ORCID' },
	linkedin: { icon: 'mdi:linkedin', label: 'LinkedIn' },
	researchgate: { icon: 'academicons:researchgate', label: 'ResearchGate' },
	other: { icon: 'mdi:link-variant', label: 'Link' }
};

export function socialIcon(social: SocialLink): string {
	if (social.kind === 'other') return social.icon?.trim() || 'mdi:link-variant';
	return socialMeta[social.kind]?.icon ?? 'mdi:link-variant';
}

export function socialLabel(social: SocialLink): string {
	if (social.kind === 'other') {
		try {
			return new URL(social.href).hostname.replace(/^www\./, '');
		} catch {
			return 'Link';
		}
	}
	return socialMeta[social.kind]?.label ?? 'Link';
}
