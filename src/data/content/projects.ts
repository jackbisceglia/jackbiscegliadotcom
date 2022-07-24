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
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/jackbisceglia.com',
        text: 'jackbisceglia.com',
        live: '/',
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/joepetrillo/cs326-final-bullymaguire',
        text: 'LoneMusic',
        live: 'https://lonemusic.herokuapp.com/login/',
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/battls',
        text: 'Battls',
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/trello-clone',
        text: 'Trello Clone',
      },
    },
    {
      type: 'a',
      text: {
        github: 'https://github.com/jackbisceglia/sneaker-swipe',
        text: 'Sneaker Swipe',
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
