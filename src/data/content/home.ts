import { BulletType, ProfilePictureType } from '../../pages';
import { TextBlockType } from '../sharedTypes/data';

// LEFT SIDE
export const IntroGreeting: TextBlockType = {
  title: { purple: 'Hi, ', white: "I'm Jack" },
  body: [
    {
      type: 'p',
      content:
        "Hi, my name is Jack! I'm a senior at UMass Amherst majoring in Computer Science. I'm passionate about Software Engineering; my interest is in web technology and the process of creating a fluent product for the end user.",
    },
    {
      type: 'p',
      content:
        'In my free time, I love watching basketball (go Celtics), making hip hop beats, and reading books (see my blog)!',
    },
  ],
};

export const TechInterests: TextBlockType = {
  title: { purple: 'Tech', white: 'Interests' },
  body: [
    { type: 'p', content: "I'm largely interested in building cool stuff." },
    { type: 'p', content: 'Preferred technologies include:' },
    {
      type: 'ul',
      content: [
        'React* + Typescript for Client-Side Apps',
        'Golang* or Typescript for Server-side Tech',
        "Python whenever I don't know what else to use",
      ],
    },
  ],
};

export const Helpers: string[] = [
  'Still in the process of learning Go',
  'I also like Svelte. But React is good',
];

export const Links = [
  {
    title: 'resume',
    link: '/2022JackBiscegliaResume.pdf',
  },
  {
    title: 'github',
    link: 'https://github.com/jackbisceglia/',
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/jackbisceglia/',
  },
  {
    title: 'apptrack',
    link: 'https://apptrack.tech',
  },
];

const UMass: BulletType[] = [
  {
    color: 'white',
    text: 'CS @ ',
  },
  {
    color: 'purple',
    text: 'UMass Amherst ',
  },
  {
    color: 'white',
    text: "'23",
  },
];

export const Education = [UMass];

const Nuance: BulletType[] = [
  {
    color: 'purple',
    text: 'Nuance ',
  },
  {
    color: 'white',
    text: "SWE Intern '21",
  },
];
const HubSpot: BulletType[] = [
  {
    color: 'purple',
    text: 'HubSpot ',
  },
  {
    color: 'white',
    text: "SWE Co-op '21",
  },
];

const Salesforce: BulletType[] = [
  {
    color: 'purple',
    text: 'Salesforce ',
  },
  {
    color: 'white',
    text: "SWE Intern '22",
  },
];

export const Experience: BulletType[][] = [Salesforce, HubSpot, Nuance];

export const Picture: ProfilePictureType = {
  src: '/images/ggbridge.jpg',
  caption: 'Me at the Golden Gate Bridge',
};
