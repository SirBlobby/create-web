export type LinkText = {
	text: string;
	href: string;
};

export type NewsItem = {
	summary: string;
	date: string;
	href?: string;
	extraLink?: LinkText;
};

export type TravelItem = {
	name: string;
	href?: string;
	details: string[];
};

export type Sponsor = {
	name: string;
	image: string;
};

export const featuredProject = {
	title: 'Featured Project',
	image: '/images/game_sketch.png',
	imageAlt: 'Defend The Republic competition',
	link: 'http://sparx.vse.gmu.edu/',
	body: 'Defend The Republic is a Navy sponsored aerial soccer-game type competition. The last competition was hosted at Eagle Bank Arena on April 24-28, 2023.',
	mentions: [
		{ text: 'Featured on Fox 5', href: 'https://www.youtube.com/watch?v=avubY5vcRH0' },
		{
			text: 'NBC 4 News',
			href: 'https://www.nbcwashington.com/news/local/blimps-battle-in-competition-at-george-mason-university/3338565/'
		}
	],
	callToAction: 'Continue to our external website'
};

export const aboutMe = {
	name: 'Cameron Nowzari',
	image: '/images/pf.png',
	paragraphs: [
		'Cameron Nowzari is currently an Associate Professor in the Electrical and Computer Engineering Department at George Mason University. He received his B.S. in Mechanical Engineering in June 2009 from the University of California, Santa Barbara, and his Ph.D. in Engineering Sciences in Sept 2013 from the University of California, San Diego. He was with the Air Force Research Laboratory at the Wright-Patterson Air Force Base as a Summer Faculty Fellow in 2019, working with the Aerospace Systems directorate.',
		"Dr. Nowzari's research interests are in the broad area of dynamics, controls, and robotics. More specifically, he is interested in the analysis and control of complex distributed and/or networked systems and spreading processes. A large motivation for the specific problems include minimizing energy or wireless communication, efficient computation of control strategies or decisions, and the use of sparse sensing and/or control. His work has applications in a wide number of areas including mobile sensors, autonomous robots, allocation of resources, public health and epidemiology, network protection, and marketing campaigns.",
		"Dr. Nowzari has received various awards related to his research in the areas of distributed control and robotics including the 2021 Office of Naval Research's Young Investigator Program (YIP) Award. Notable awards for individual papers or lines of research include the 2019 International Conference on Data Mining Best Paper Award, the 2018 IEEE Control Systems Magazine Best Paper Award, the 2012 O. Hugo Schuck Best Paper Award, and multiple Best Student Paper Finalist Awards in both the student and advisor roles."
	]
};

export const news: NewsItem[] = [
	{
		summary: 'Dr. Cameron Nowzari promoted to the rank of Associate Professor with Tenure',
		date: 'Aug 2022'
	},
	{
		summary:
			"Dr. Cameron Nowzari Named Recipient of the Office of Naval Research's 2021 Young Investigator Program (YIP) Award",
		href: 'https://www.navy.mil/Press-Office/News-Stories/Article/2598362/best-and-brightest-onrs-2021-young-investigators/',
		extraLink: {
			text: 'See all winners here',
			href: 'https://www.onr.navy.mil/Education-Outreach/Sponsored-Research/YIP/2021-young-investigators'
		},
		date: 'Nov 2021'
	},
	{
		summary: 'Associate Editor of IFAC Journal on Nonlinear Analysis: Hybrid Systems',
		href: 'https://www.journals.elsevier.com/nonlinear-analysis-hybrid-systems',
		date: 'Oct 2021'
	},
	{
		summary:
			'Guest Editor of SIAM Journal on Control and Optimization Special Section on Mathematical Modeling, Analysis, and Control of Epidemics',
		href: 'https://sinews.siam.org/Details-Page/Call-for-Papers-SIAM-Journal-on-Control-and-Optimization-Special-Section-on-Mathematical-Modeling-Analysis-and-Control-of-Epidemics',
		date: 'Oct 2021'
	}
];

export const allNewsLink = '/news';

export const travel: TravelItem[] = [
	{
		name: 'IEEE International Conference on Robotics and Automation',
		href: 'https://www.icra2023.org/welcome',
		details: ['London, UK', 'May 29 - June 2, 2023']
	}
];

export const contact = {
	department: 'Electrical and Computer Engineering',
	address: ['George Mason University Engineering 3211', 'Fairfax, VA 22030'],
	email: 'cnowzari@gmu.edu',
	cvLink: 'https://people-ece.vse.gmu.edu/~cnowzari/cv.pdf'
};

export const sponsors: Sponsor[] = [
	{ name: 'Office of Naval Research', image: '/images/ONRLogo.png' },
	{ name: 'Air Force Office of Scientific Research', image: '/images/AFOSR.png' },
	{ name: 'Kairos', image: '/images/kairos_logo.png' },
	{ name: 'National Science Foundation', image: '/images/nsf.png' },
	{ name: 'Google', image: '/images/googleLogo.jpg' },
	{ name: 'Air Force Research Laboratory', image: '/images/afrl.png' }
];
