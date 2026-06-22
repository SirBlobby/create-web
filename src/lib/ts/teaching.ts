export type Course = {
	term: string;
	code: string;
	title: string;
	href?: string;
};

export type TeachingPlace = {
	institution: string;
	image: string;
	imageAlt: string;
	courses: Course[];
};

export const teachingPlaces: TeachingPlace[] = [
	{
		institution: 'George Mason University',
		image: '/images/gmu_science_building.jpg',
		imageAlt: 'George Mason University science building',
		courses: [
			{ term: 'Spring 2023', code: 'ECE 619', title: 'Nonlinear System and Control' },
			{ term: 'Spring 2023', code: 'ECE 424', title: 'Modern Control Systems' },
			{ term: 'Spring 2022', code: 'ECE 424', title: 'Modern Control Systems' },
			{ term: 'Spring 2021', code: 'ECE 424', title: 'Modern Control Systems' },
			{ term: 'Spring 2021', code: 'ECE 699', title: 'Network Systems and Control' },
			{ term: 'Fall 2020', code: 'ECE 619', title: 'Nonlinear System and Control' },
			{ term: 'Spring 2020', code: 'ECE 424', title: 'Modern Control Systems' },
			{ term: 'Spring 2020', code: 'ECE 499', title: 'Modern Control Systems Lab' },
			{ term: 'Fall 2019', code: 'ECE 521', title: 'Linear Systems and Control' },
			{ term: 'Spring 2019', code: 'ECE 424', title: 'Modern Control Systems Design' },
			{ term: 'Spring 2019', code: 'ECE 521', title: 'Linear Systems and Control' },
			{ term: 'Spring 2018', code: 'ECE 619', title: 'Nonlinear Systems and Control' },
			{ term: 'Spring 2018', code: 'ECE 429', title: 'Control Systems Lab' },
			{ term: 'Fall 2017', code: 'ECE 499', title: 'Modern Control Systems' },
			{ term: 'Spring 2017', code: 'ECE 699', title: 'Network Control' },
			{ term: 'Fall 2016', code: 'ECE 721', title: 'Nonlinear Systems and Control' }
		]
	},
	{
		institution: 'University of Pennsylvania',
		image: '/images/upenn_campus.jpg',
		imageAlt: 'University of Pennsylvania campus',
		courses: [
			{
				term: 'Fall 2015',
				code: 'ESE 617',
				title: 'Nonlinear Systems and Control',
				href: 'https://www.seas.upenn.edu/~ese617/spring14/'
			},
			{
				term: 'Spring 2014',
				code: 'ESE 617',
				title: 'Nonlinear Systems and Control',
				href: 'https://www.seas.upenn.edu/~ese617/'
			}
		]
	}
];
