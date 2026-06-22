export type SocialKind = 'scholar' | 'orcid' | 'linkedin' | 'researchgate' | 'other';

export type SocialLink = {
	kind: SocialKind;
	href: string;
	icon?: string;
};

export type Member = {
	id?: string;
	slug?: string;
	name: string;
	period?: string;
	photo: string;
	note?: string;
	bio?: string;
	education: string[];
	email?: string;
	socials: SocialLink[];
};

export type MemberGroup = {
	heading: string;
	members: Member[];
};

export const memberPhotoPlaceholder = '/team-placeholder.svg';

export function memberPhoto(photo?: string): string {
	return photo && photo.trim() ? photo : memberPhotoPlaceholder;
}

export const professor: Member = {
	name: 'Dr. Cameron Nowzari',
	photo: '/images/pf.png',
	education: [
		'Postdoc, University of Pennsylvania, 2013-2016',
		'Ph.D., University of California, San Diego, 2013',
		'M.S., University of California, San Diego, 2010',
		'B.S., University of California, Santa Barbara, 2009'
	],
	email: 'cnowzari@gmu.edu',
	socials: [
		{ kind: 'scholar', href: 'https://scholar.google.com/citations?user=CcS83CIAAAAJ&hl=en' },
		{ kind: 'orcid', href: 'https://orcid.org/0000-0001-7287-9972' },
		{ kind: 'linkedin', href: 'https://www.linkedin.com/in/cameron-nowzari-42401034/' },
		{ kind: 'researchgate', href: 'https://www.researchgate.net/profile/Cameron_Nowzari' }
	]
};

export const memberGroups: MemberGroup[] = [
	{
		heading: 'Ph.D. Students',
		members: [
			{
				name: 'Ricardo Vega',
				period: '2021 - present',
				photo: '/images/ricardo.jpg',
				education: ['B.S., Electrical Engineering, George Mason University, 2021'],
				email: 'rvega7@gmu',
				socials: [{ kind: 'linkedin', href: 'https://www.linkedin.com/in/ricardovega2021/' }]
			},
			{
				name: 'Kevin Zhu',
				period: '2022 - present',
				photo: '/images/kevin.png',
				note: 'co-advised with Dr. Maryam Parsa',
				education: ['B.S. Computer Engineering, George Mason University, 2021'],
				email: 'kzhu4@gmu',
				socials: [{ kind: 'linkedin', href: 'https://www.linkedin.com/in/kevin-g-zhu/' }]
			},
			{
				name: 'Shantanu Bhattacharjee',
				period: '2024 - present',
				photo: '/images/Photo_Shan.jpg',
				education: [
					'B.S. Electrical and Electronic Engineering, Chittagong University of Engineering and Technology, 2022'
				],
				email: 'sbhatt28@gmu',
				socials: [
					{ kind: 'scholar', href: 'https://scholar.google.com/citations?user=O2ic-jMAAAAJ&hl=en' },
					{ kind: 'linkedin', href: 'https://www.linkedin.com/in/shantanu-bhattacharjee/' }
				]
			},
			{
				name: 'Benjamin Wheeler',
				period: '2024 - present',
				photo: '/images/unknown.jpg',
				education: [],
				email: 'bwheele@gmu',
				socials: []
			}
		]
	},
	{
		heading: 'Alumni',
		members: [
			{
				name: 'Dr. Mohanad Ajina',
				period: '2016 - 2020',
				photo: '/images/Mohanad_Ajina.jpg',
				education: [
					'Ph.D., Electrical Engineering, George Mason University, 2020',
					'M.S., Electrical Engineering, George Mason University, 2016',
					'B.S., Electrical Engineering, Southern Illinois University, 2014'
				],
				email: 'majina@gmu',
				socials: [
					{ kind: 'scholar', href: 'https://scholar.google.com/citations?hl=en&user=jD_MTnMAAAAJ' }
				]
			},
			{
				name: 'Dr. James Berneburg',
				period: '2018 - 2023',
				photo: '/images/james.jpg',
				education: [
					'Ph.D., Electrical and Computer Engineering, George Mason University, 2023',
					'M.S., Electrical Engineering, George Mason University, 2020',
					'B.S., Electrical Engineering, George Mason University, 2017'
				],
				email: 'jbernebu@gmu',
				socials: [
					{ kind: 'scholar', href: 'https://scholar.google.com/citations?hl=en&user=14kipQgAAAAJ' },
					{ kind: 'researchgate', href: 'https://www.researchgate.net/profile/James_Berneburg' }
				]
			},
			{
				name: 'Dr. Joseph Prince Mathew',
				period: '2020 - 2024',
				photo: '/images/JosephPrinceMathew.jpg',
				education: [
					'Ph.D., Electrical and Computer Engineering, George Mason University, 2024',
					'M.S., Electrical Engineering, George Mason University, 2023',
					'B.S. Electronics and Communication, Rajagiri School of Engineering and Technology, 2014'
				],
				email: 'jprincem@gmu',
				socials: []
			}
		]
	}
];
