export type NavLink = {
	label: string;
	path: string;
};

export type SiteContact = {
	department?: string;
	address?: string[];
	email?: string;
};

export type SiteFeatured = {
	title?: string;
	body?: string;
	image?: string;
	imageAlt?: string;
	link?: string;
	callToAction?: string;
};

export type SiteInfo = {
	logo?: string;
	labName?: string;
	institution?: string;
	tagline?: string;
	intro?: string;
	featuredProject?: SiteFeatured;
	contact?: SiteContact;
	showAccessibility?: boolean;
};

export const siteNav: NavLink[] = [
	{ label: 'Home', path: '' },
	{ label: 'Research', path: 'research' },
	{ label: 'Projects', path: 'projects' },
	{ label: 'Team', path: 'team' },
	{ label: 'Publications', path: 'publications' },
	{ label: 'News', path: 'news' }
];

export const basePath = '';
