import { TextBlockType } from '../sharedTypes/data';

export const ProjectsInfo: TextBlockType = {
  title: { purple: 'What ', white: "I've been doing" },
  body: [
    {
      type: 'p',
      text: "Check out some of the stuff I've been working on in my free time. For personal projects, I enjoy working on the web with React, Javascript (Typescript nowadays), and Svelte on occasion.",
    },
    {
      type: 'p',
      text: "I'm also currently working on learning Golang, see AppTrack.tech.",
    },
  ],
};

export const ProjectsList: TextBlockType = {
  body: [
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/internship-tracker',
        text: 'AppTrack.tech',
        live: 'https://apptrack.tech',
        year: 2022,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/jackbisceglia.com',
        text: 'jackbisceglia.com',
        live: '/',
        year: 2022,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/best-pastry',
        text: 'Best Pastry',
        live: 'https://best-pastry.vercel.app',
        year: 2022,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/joepetrillo/cs326-final-bullymaguire',
        text: 'LoneMusic',
        live: 'https://lonemusic.herokuapp.com/login/',
        year: 2022,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/chess.comProfiler',
        text: 'Chess.com Dashboard',
        live: 'https://chessdashboard.netlify.app/',
        year: 2021,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/battls',
        text: 'Battls',
        year: 2020,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/trello-clone',
        text: 'Trello Clone',
        year: 2020,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/Sort-ify',
        live: 'https://jackbisceglia.github.io/Sort-ify/',
        text: 'Sort-ify',
        year: 2020,
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/sneaker-swipe',
        text: 'Sneaker Swipe',
        year: 2021,
      },
    },
  ],
};

export const SideBar: TextBlockType = {
  body: [
    {
      type: 'p',
      text: "I'll try and list all important projects and repositories I've worked on here!",
    },
  ],
};
