import { TextBlockType } from '../sharedTypes/data';

export const ProjectsInfo: TextBlockType = {
  title: { purple: 'What ', white: "I've been doing" },
  body: [
    {
      type: 'p',
      content:
        "Check out some of the stuff I've been working on in my free time. For personal projects, I enjoy working on the web with React, Javascript (Typescript nowadays), and Svelte on occasion.",
    },
    {
      type: 'p',
      content:
        "I'm also currently working on learning Golang, see AppTrack.tech.",
    },
  ],
};

export const BestPastryDescription = [
  'Best Pastry is a weekend project I made to attempt to find the best pastry. It utilizes the T3 Stack, an interesting combination of Typescript, NextJS, TailwindCSS, tRPC, along with PSQL and Prisma.',
  "The application was a great exercise in to end-to-end typesafety, and this is a stack I'll be using in the future.",
];

export const AppTrackDescription = [
  'AppTrack is a daily email digest that ensures the end user never miss out on important job postings. Users receive emails daily with job applications sourced from popular open-source GitHub repositories.',
  'This was built on a small team; I largely focused on architecting application structure and building out our API and data store, while also helping on the client app a bit.',
];
export const FEATURED_PROJECTS = ['AppTrack.tech', 'Best Pastry'];

export const ProjectsList: TextBlockType = {
  body: [
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/apptrack',
        title: 'AppTrack.tech',
        live: 'https://apptrack.tech',
        year: 2022,
        descriptionBlocks: AppTrackDescription,
        techStack: [
          'Golang',
          'React',
          'Typescript',
          'AWS Lambda',
          'Python',
          'PostgreSQL',
          'TailwindCSS',
        ],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/jackbiscegliadotcom',
        title: 'jackbisceglia.com',
        live: '/',
        year: 2022,
        techStack: ['React', 'Typescript', 'Next'],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/best-pastry',
        title: 'Best Pastry',
        live: 'https://best-pastry.vercel.app',
        year: 2022,
        techStack: ['React', 'Typescript', 'Next', 'tRPC', 'Prisma'],
        descriptionBlocks: BestPastryDescription,
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/joepetrillo/cs326-final-bullymaguire',
        title: 'LoneMusic',
        live: 'https://lonemusic.herokuapp.com/login/',
        year: 2022,
        techStack: [
          'Vanilla Javascript',
          'ExpressJS',
          'MongoDB',
          'HTML',
          'CSS',
        ],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/chess.comProfiler',
        title: 'Chess.com Dashboard',
        live: 'https://chessdashboard.netlify.app/',
        year: 2021,
        techStack: ['Svelte'],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/battls',
        title: 'Battls',
        year: 2020,
        techStack: [
          'React',
          'Typescript',
          'Redux Toolkit',
          'PostgreSQL',
          'ExpressJS',
        ],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/trello-clone',
        title: 'Trello Clone',
        year: 2020,
        techStack: ['React', 'Javascript', 'ExpressJS', 'PostgreSQL'],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/Sort-ify',
        live: 'https://jackbisceglia.github.io/Sort-ify/',
        title: 'Sort-ify',
        year: 2020,
        techStack: ['Vanilla Javascript', 'HTML', 'CSS'],
      },
    },
    {
      type: 'a',
      content: {
        github: 'https://github.com/jackbisceglia/sneaker-swipe',
        title: 'Sneaker Swipe',
        year: 2021,
        techStack: [
          'React',
          'Javascript',
          'Java',
          'Springboot',
          'AWS RDS (PostgreSQL)',
        ],
      },
    },
  ],
};

export const SideBar: TextBlockType = {
  body: [
    {
      type: 'p',
      content:
        "I'll try and list all important projects and repositories I've worked on here!",
    },
  ],
};
