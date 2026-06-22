export type Publication = {
	id?: string;
	tag: string;
	authors: string;
	title: string;
	venue: string;
	date?: string;
	doi?: string;
	pdf?: string;
	video?: string;
	award?: string;
};

export type PublicationSection = {
	heading: string;
	entries: Publication[];
};

export type PublicationType = {
	label: string;
	prefix: string;
};

export const publicationTypes: PublicationType[] = [
	{ label: 'Journal Articles', prefix: 'J' },
	{ label: 'Conference Proceedings', prefix: 'C' },
	{ label: 'Book Chapters', prefix: 'BC' }
];

export type RawPublication = {
	id: string;
	type: string;
	title: string;
	authors: string;
	venue: string;
	date?: string;
	doi?: string;
	pdf?: string;
	award?: string;
};

export function sectionsFromPublications(publications: RawPublication[]): PublicationSection[] {
	const sections: PublicationSection[] = [];
	for (const type of publicationTypes) {
		const ofType = publications
			.filter((publication) => publication.type === type.label)
			.sort((first, second) => (first.date ?? '').localeCompare(second.date ?? ''));
		if (ofType.length === 0) continue;
		const entries: Publication[] = ofType.map((publication, index) => ({
			id: publication.id,
			tag: `${type.prefix}-${index + 1}`,
			authors: publication.authors,
			title: publication.title,
			venue: publication.venue,
			date: publication.date,
			doi: publication.doi,
			pdf: publication.pdf,
			award: publication.award
		}));
		entries.reverse();
		sections.push({ heading: type.label, entries });
	}
	return sections;
}

const paper = (file: string) => `https://people-ece.vse.gmu.edu/~cnowzari/papers/${file}`;

export const publicationSections: PublicationSection[] = [
	{
		heading: 'Journal Articles',
		entries: [
			{
				tag: 'J-17',
				authors: 'C. Taylor and C. Nowzari',
				title: 'The impact of catastrophic collisions and collision avoidance on a swarming behavior',
				venue: 'Robotics and Autonomous Systems 140, pp. 103754',
				pdf: paper('jp17.pdf')
			},
			{
				tag: 'J-16',
				authors:
					'S. M. P. Dinakarrao, X. Guo, H. Sayadi, C. Nowzari, A. Sasan, S. Rafatirad, L. Zhao and H. Homayoun',
				title: 'Scalable technique for securing IoT networks against malware epidemics',
				venue: 'IEEE Access 8 (2), 2020, pp. 138508-138528',
				pdf: paper('jp16.pdf')
			},
			{
				tag: 'J-15',
				authors: 'D. Tabatabai, M. Ajina, and C. Nowzari',
				title: 'Self-triggered k-order coverage control.',
				venue: 'IEEE Transactions on Control of Network Systems 8 (3), 2021, pp. 1059-1068',
				pdf: paper('jp15.pdf')
			},
			{
				tag: 'J-14',
				authors: 'J. Berneburg and C. Nowzari',
				title:
					'Robust dynamic event-triggered coordination of multi-agent systems with a designable minimum inter-event time.',
				venue: 'IEEE Transactions on Automatic Control 66 (8), 2021, pp. 3417-3428',
				pdf: paper('jp14.pdf')
			},
			{
				tag: 'J-13',
				authors: 'M. Ajina, D. Tabatabai, and C. Nowzari',
				title:
					'Asynchronous distributed event-triggered coordination for multi-agent coverage control.',
				venue: 'IEEE Transactions on Cybernetics 51 (12), 2021, pp. 5941-5953',
				pdf: 'https://arxiv.org/pdf/1910.10803.pdf'
			},
			{
				tag: 'J-12',
				authors: 'P. Xu, C. Nowzari, and Z. Tian',
				title: 'A class of distributed event-triggered average consensus algorithms for multi-agent systems.',
				venue: 'International Journal of Control 95 (2), 2022, pp. 502-515',
				pdf: 'https://arxiv.org/pdf/1906.02649.pdf'
			},
			{
				tag: 'J-11',
				authors: 'S. L. Bowman, C. Nowzari, G. J. Pappas',
				title: 'Consensus of multi-agent systems via asynchronous cloud communication.',
				venue: 'IEEE Transactions on Control of Network Systems 7 (2), 2019, pp. 627-637',
				pdf: paper('jp11.pdf')
			},
			{
				tag: 'J-10',
				authors: 'C. Nowzari, E. Garcia, and J. Cortes',
				title: 'Event-triggered communication and control of networked systems for multi-agent consensus.',
				venue: 'Automatica 105, 2019, pp. 1-27',
				pdf: paper('jp10.pdf')
			},
			{
				tag: 'J-9',
				authors: 'N. J. Watkins, C. Nowzari, and G. J. Pappas',
				title: 'Robust economic Model Predictive Control of continuous-time epidemic processes.',
				venue: 'IEEE Transactions on Automatic Control 63 (3), 2019, pp. 1116-1131',
				pdf: paper('jp09.pdf')
			},
			{
				tag: 'J-8',
				authors: 'N. J. Watkins, C. Nowzari, V. M. Preciado, and G. J. Pappas',
				title: 'Optimal resource allocation for competitive spreading processes on bilayer networks.',
				venue: 'IEEE Transactions on Control of Network Systems 5 (1), 2018, pp. 298-307',
				pdf: paper('jp08.pdf')
			},
			{
				tag: 'J-7',
				authors: 'C. Nowzari, V. M. Preciado, and G. J. Pappas',
				title: 'Analysis and control of epidemics.',
				venue: 'IEEE Control Systems Magazine 36 (1), 2016, pp. 26-46',
				pdf: paper('jp07.pdf'),
				award: 'IEEE Control Systems Magazine Outstanding Paper Award'
			},
			{
				tag: 'J-6',
				authors: 'C. Nowzari, V. M. Preciado, and G. J. Pappas',
				title: 'Optimal resource allocation for control of networked epidemic models.',
				venue: 'IEEE Transactions on Control of Network Systems 4 (2), 2017, pp. 159-169',
				pdf: paper('jp06.pdf')
			},
			{
				tag: 'J-5',
				authors: 'S. Han, V. M. Preciado, C. Nowzari, and G. J. Pappas',
				title: 'Data-driven network resource allocation for controlling spreading processes.',
				venue: 'IEEE Transactions on Network Science and Engineering 2 (4), 2015, pp. 127-138',
				pdf: paper('jp05.pdf')
			},
			{
				tag: 'J-4',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Distributed event-triggered coordination for average consensus on weight-balanced digraphs.',
				venue: 'Automatica 68, 2016, pp. 237-244',
				pdf: paper('jp04.pdf')
			},
			{
				tag: 'J-3',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Team-triggered coordination for real-time control of networked cyber-physical systems.',
				venue: 'IEEE Transactions on Automatic Control 61 (1), 2016, pp. 34-47',
				pdf: paper('jp03.pdf')
			},
			{
				tag: 'J-2',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Self-triggered optimal servicing in dynamic environments with acyclic structure.',
				venue: 'IEEE Transactions on Automatic Control 58 (5), 2013, pp. 1236-1249',
				pdf: paper('jp02.pdf')
			},
			{
				tag: 'J-1',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Self-triggered coordination of robotic networks for optimal deployment.',
				venue: 'Automatica 48 (6), 2012, pp. 1077-1087',
				pdf: paper('jp01.pdf')
			}
		]
	},
	{
		heading: 'Book Chapters',
		entries: [
			{
				tag: 'BC-4',
				authors: 'C. Nowzari, J. Cortes, and G. J. Pappas',
				title: 'Event-triggered control for multi-agent average consensus.',
				venue: 'Cooperative Control of Multi-Agent Systems: Theory and Applications, Wiley, 2017, pp. 177-208',
				pdf: paper('bc04.pdf')
			},
			{
				tag: 'BC-3',
				authors: 'V. M. Preciado, M. Zargham, C. Nowzari, S. Han, M. Ogura, and G. J. Pappas',
				title: 'Bio-inspired framework for allocation of protection resources in cyber-physical networks.',
				venue: 'Principles of Cyber-Physical Systems, Cambridge University Press, 2020, pp. 293-324',
				pdf: 'http://arxiv.org/pdf/1503.03537.pdf'
			},
			{
				tag: 'BC-2',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Self-triggered and team-triggered control of networked cyber-physical systems.',
				venue: 'Event-Based Control and Signal Processing, Series in Embedded Systems, CRC Press, 2015, pp. 203-220',
				pdf: paper('bc02.pdf')
			},
			{
				tag: 'BC-1',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Robust team-triggered coordination of networked cyberphysical systems.',
				venue: 'Lecture Notes in Control and Information Sciences, vol. 449, Springer-Verlag, 2013, pp. 317-336',
				pdf: paper('bc01.pdf')
			}
		]
	},
	{
		heading: 'Conference Proceedings',
		entries: [
			{
				tag: 'C-32',
				authors: 'J. Prince Mathew and C. Nowzari',
				title: 'Real-time distributed multi-robot target tracking via virtual pheromones.',
				venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems, Kyoto, Japan, 2022, pp. 5833-5839',
				pdf: paper('cp32.pdf')
			},
			{
				tag: 'C-31',
				authors: 'M. Mubarak, J. Berneburg, and C. Nowzari',
				title: 'Stochastic vs. Deterministic Modeling for the Spread of COVID-19 in Small Networks.',
				venue: 'American Control Conference, New Orleans, LA, 2021, pp. 1342-1347',
				pdf: paper('cp31.pdf')
			},
			{
				tag: 'C-30',
				authors: 'C. Taylor, A. Siebold, and C. Nowzari',
				title: 'On the Effects of Minimally Invasive Collision Avoidance on an Emergent Behavior.',
				venue: 'Twelfth International Conference on Swarm Intelligence, Barcelona, Spain, 2020, pp. 324-332',
				pdf: paper('cp30.pdf')
			},
			{
				tag: 'C-29',
				authors: 'J. Berneburg, E. Garcia, A. Gerlach, D. Casbeer, and C. Nowzari',
				title: 'Strongly Non-Zeno Event-Triggered Wireless Clock Synchronization.',
				venue: 'International Federation of Automatic Control World Congress, Berlin, Germany, 2020, pp. 2787-2792',
				pdf: paper('cp29.pdf'),
				video: paper('c29v.mp4')
			},
			{
				tag: 'C-28',
				authors: 'C. Taylor, C. Luzzi, and C. Nowzari',
				title: 'On the effects of collision avoidance on emergent swarm behavior.',
				venue: 'American Control Conference, Denver, Colorado, 2020, pp. 931-936',
				pdf: paper('cp28.pdf'),
				video: paper('c28v.mp4')
			},
			{
				tag: 'C-27',
				authors: 'J. Berneburg and C. Nowzari',
				title:
					'Distributed dynamic event-triggered algorithms with positive minimum inter-event times on weight-balanced digraphs.',
				venue: 'IEEE Conference on Decision and Control, Nice, France, 2019, pp. 2598-2603',
				pdf: paper('cp27.pdf')
			},
			{
				tag: 'C-26',
				authors: 'X. Guo, L. Zhao, C. Nowzari, S. Rafatirad, H. Homayoun and S. M. P. Dinakarrao',
				title: 'Deep multi-attributed graph translation with node-edge co-evolution.',
				venue: 'IEEE International Conference on Data Mining, Beijing, China, 2019, pp. 250-259',
				pdf: paper('cp26.pdf'),
				award: 'ICDM Best Paper Award'
			},
			{
				tag: 'C-25',
				authors: 'J. Berneburg and C. Nowzari',
				title: 'Distributed dynamic event-triggered coordination with a designable minimum inter-event time.',
				venue: 'American Control Conference, Philadelphia, Pennsylvania, 2019, pp. 1424-1429',
				pdf: paper('cp25.pdf'),
				award: 'ACC Best Student Paper Award Finalist'
			},
			{
				tag: 'C-24',
				authors: 'D. Tabatabai and C. Nowzari',
				title: 'Higher-order optimal deployment with self-triggered coordination.',
				venue: 'American Control Conference, Philadelphia, Pennsylvania, 2019, pp. 2710-2715',
				pdf: paper('cp24.pdf')
			},
			{
				tag: 'C-23',
				authors: 'S. M. P. Dinakarrao, H. Sayedi, H. M. Makrani, C. Nowzari, S. Rafatirad, and H. Homayoun',
				title: 'Lightweight node-level malware detection and network-level malware confinement in IoT networks.',
				venue: 'Design, Automation, and Test, Florence, Italy, 2019, pp. 776-781',
				pdf: paper('cp23.pdf')
			},
			{
				tag: 'C-22',
				authors: 'N. J. Watkins, C. Nowzari, and G. J. Pappas',
				title: 'A robust moment closure for general continuous-time epidemic processes.',
				venue: 'IEEE Conference on Decision and Control, Miami, Florida, 2018, pp. 244-249',
				pdf: paper('cp22.pdf')
			},
			{
				tag: 'C-21',
				authors: 'P. Xu, C. Nowzari, and Z. Tian',
				title: 'A class of event-triggered coordination algorithms for multi-agent systems on weight-balanced digraphs.',
				venue: 'American Control Conference, Milwaukee, Wisconsin, 2018, pp. 5988-5993',
				pdf: paper('cp21.pdf')
			},
			{
				tag: 'C-20',
				authors: 'M. Ajina and C. Nowzari',
				title: 'An event-triggered virtual force algorithm for multi-agent coverage control with obstacles.',
				venue: 'American Control Conference, Milwaukee, Wisconsin, 2018, pp. 1009-1014',
				pdf: paper('cp20.pdf')
			},
			{
				tag: 'C-19',
				authors: 'C. Nowzari',
				title: 'Multi-agent coordination via a shared wireless spectrum.',
				venue: 'IEEE Conference on Decision and Control, Melbourne, Australia, 2017, pp. 6714-6719',
				pdf: paper('cp19.pdf')
			},
			{
				tag: 'C-18',
				authors: 'N. J. Watkins, K. Gatsis, C. Nowzari, and G. J. Pappas',
				title: 'Battery management for control systems with energy harvesting sensors.',
				venue: 'IEEE Conference on Decision and Control, Melbourne, Australia, 2017, pp. 4538-4543',
				pdf: paper('cp18.pdf')
			},
			{
				tag: 'C-17',
				authors: 'Y. Liu, C. Nowzari, Z. Tian, and Q. Ling',
				title: 'Asynchronous periodic event-triggered coordination of multi-agent systems.',
				venue: 'IEEE Conference on Decision and Control, Melbourne, Australia, 2017, pp. 6696-6701',
				pdf: paper('cp17.pdf')
			},
			{
				tag: 'C-16',
				authors: 'N. J. Watkins, C. Nowzari, and G. J. Pappas',
				title: 'Inference, prediction, and control of networked epidemics.',
				venue: 'American Control Conference, Seattle, Washington, 2017, pp. 5611-5616',
				pdf: paper('cp16.pdf')
			},
			{
				tag: 'C-15',
				authors: 'S. L. Bowman, C. Nowzari, and G. J. Pappas',
				title: 'Coordination of multi-agent systems via asynchronous cloud communication.',
				venue: 'IEEE Conference on Decision and Control, Las Vegas, Nevada, 2016, pp. 2215-2220',
				pdf: paper('cp15.pdf')
			},
			{
				tag: 'C-14',
				authors: 'M. Fazlyab, C. Nowzari, G. J. Pappas, A. Ribeiro, and V. M. Preciado',
				title: 'Self-triggered time-varying convex optimization.',
				venue: 'IEEE Conference on Decision and Control, Las Vegas, Nevada, 2016, pp. 3090-3097',
				pdf: paper('cp14.pdf')
			},
			{
				tag: 'C-13',
				authors: 'N. Bezzo, K. Mohta, C. Nowzari, I. Lee, V. Kumar, and G. J. Pappas',
				title: 'Online planning for energy-efficient and disturbance-aware UAV operations.',
				venue: 'IEEE/RSJ International Conference on Intelligent Robots and Systems, Daejeon, Korea, 2016, pp. 5027-5033',
				pdf: paper('cp13.pdf')
			},
			{
				tag: 'C-12',
				authors: 'C. Nowzari and G. J. Pappas',
				title: 'Multi-agent coordination with asynchronous cloud access.',
				venue: 'American Control Conference, Boston, Massachusetts, 2016, pp. 4649-4654',
				pdf: paper('cp12.pdf')
			},
			{
				tag: 'C-11',
				authors: 'C. Nowzari, M. Ogura, V. M. Preciado, and G. J. Pappas',
				title: 'Optimal resource allocation for containing epidemics on time-varying networks.',
				venue: 'Asilomar Conference on Signals, Systems, and Computers, Pacific Grove, California, 2015, pp. 1333-1337',
				pdf: paper('cp11.pdf')
			},
			{
				tag: 'C-10',
				authors: 'C. Nowzari, M. Ogura, V. M. Preciado, and G. J. Pappas',
				title: 'A general class of spreading processes with non-Markovian dynamics.',
				venue: 'IEEE Conference on Decision and Control, Osaka, Japan, 2015, pp. 5073-5078',
				pdf: paper('cp10.pdf')
			},
			{
				tag: 'C-9',
				authors: 'S. A. Aleem, C. Nowzari, and G. J. Pappas',
				title: 'Self-triggered pursuit of a single evader.',
				venue: 'IEEE Conference on Decision and Control, Osaka, Japan, 2015, pp. 1433-1440',
				pdf: paper('cp09.pdf')
			},
			{
				tag: 'C-8',
				authors: 'X. Meng, L. Xie, Y. C. Soh, C. Nowzari, and G. J. Pappas',
				title: 'Periodic event-triggered average consensus over directed graphs.',
				venue: 'IEEE Conference on Decision and Control, Osaka, Japan, 2015, pp. 4151-4156',
				pdf: paper('cp08.pdf')
			},
			{
				tag: 'C-7',
				authors: 'C. Nowzari, J. Cortes, and G. J. Pappas',
				title: 'Team-triggered coordination of robotic networks for optimal deployment.',
				venue: 'American Control Conference, Chicago, Illinois, 2015, pp. 5744-5751',
				pdf: paper('cp07.pdf')
			},
			{
				tag: 'C-6',
				authors: 'N. J. Watkins, C. Nowzari, V. M. Preciado, and G. J. Pappas',
				title: 'Optimal resource allocation for competing epidemics over arbitrary networks.',
				venue: 'American Control Conference, Chicago, Illinois, 2015, pp. 1381-1386',
				pdf: paper('cp06.pdf')
			},
			{
				tag: 'C-5',
				authors: 'C. Nowzari, V. M. Preciado, and G. J. Pappas',
				title: 'Stability analysis of generalized epidemic models over directed networks.',
				venue: 'IEEE Conference on Decision and Control, Los Angeles, California, 2014, pp. 6197-6202',
				pdf: paper('cp05.pdf')
			},
			{
				tag: 'C-4',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Zeno-free, distributed event-triggered communication and control for multi-agent average consensus.',
				venue: 'American Control Conference, Portland, Oregon, 2014, pp. 2148-2153',
				pdf: paper('cp04.pdf')
			},
			{
				tag: 'C-3',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Team-triggered coordination of networked systems.',
				venue: 'American Control Conference, Washington, D.C. 2013, pp. 3827-3832',
				pdf: paper('cp03.pdf')
			},
			{
				tag: 'C-2',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Robust optimal decision policies for servicing targets in acyclic digraphs.',
				venue: 'IEEE Conference on Decision and Control, Maui, Hawaii, 2012, pp. 136-141',
				pdf: paper('cp02.pdf')
			},
			{
				tag: 'C-1',
				authors: 'C. Nowzari and J. Cortes',
				title: 'Self-triggered coordination of robotic networks for optimal deployment.',
				venue: 'American Control Conference, San Francisco, California, 2011, pp. 1039-1044',
				pdf: paper('cp01.pdf'),
				award: 'O. Hugo Schuck Best Paper Award, ACC Best Student Paper Award Finalist'
			}
		]
	}
];
