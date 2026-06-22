export type NavLink = {
	label: string;
	path: string;
};

export const siteName = 'Cameron Nowzari';

export const navLinks: NavLink[] = [
	{ label: 'Home', path: '' },
	{ label: 'Research', path: 'research' },
	{ label: 'Teaching', path: 'teaching' },
	{ label: 'Publications', path: 'publications' },
	{ label: 'Group', path: 'group' }
];

export const footerCredit = {
	note: 'CREATE Lab, George Mason University'
};
