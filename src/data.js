import { nanoid } from 'nanoid';

const projects = [
  {
    id: nanoid(),
    title: 'Due book',
    img: '/imgs/projects/tstore.png',
    desc: 'Financial maintainence app(key features - customer loan, purchase bill entry and billing)easy to maintain shop and digitalize the data.',
    technologies: ['React native', 'TypeScript', 'Expo'],
   Buy: 'https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=cssvasanth@gmail.com',

   },
  {
    id: nanoid(),
    title: 'Chatbot',
    img: '/imgs/projects/chatbot.PNG',
    desc: 'The GYM Chatbot web appilication using NLP ',
    technologies: ['Python', 'Flask', 'Mysql', 'Tensorflow'],
    live: null,
    github: 'https://github.com/vasanthselva/projects/tree/main/gym%20chatbot',
    
  },
  {
    id: nanoid(),
    title: 'Sign language Recognition',
    img: '/imgs/projects/sign language.jpeg',
    desc: 'Sign language Recognition using python',
    technologies: ['Python', 'Cv2', 'LSTM Model', 'Tensorflow'],
    github: 'https://github.com/vasanthselva/projects/tree/main/BATCH-5%20SIGN%20LANGUAGE%20DETECTION',
    live: null,
  },
  {
    id: nanoid(),
    title: 'Notes',
    img: '/imgs/projects/notes.PNG',
    desc: 'write Notes like a important messages available both app and web.',
    technologies: ['React.js', 'TypeScript', 'React Native', 'Expo'],
    Downlord: 'https://drive.google.com/drive/folders/1JKxJ7KZlGBwIqufDQKi0ECDjg0UhUPoo',
    live: 'https://notes-friendly.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Student Portfolio',
    img: '/imgs/projects/old portfolio.PNG',
    desc: "Using Html, Css, javascript for a static web designing",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/vasanthselva/portfolio',
    live: 'https://vasanthselvaportfolio.netlify.app/',
  },
  {
    id: nanoid(),
    title: 'Proquiz',
    img: '/imgs/projects/proquiz.PNG',
    desc: 'An interactive quiz application to test your knowledge of programming languages.',
    technologies: ['React.js', 'TypeScript', 'MantineUI'],
    github: 'https://github.com/vasanthselva/Proquiz',
    live: 'https://proquiz.vercel.app/',
  },
  {
    id: nanoid(),
    title: 'Portfolio',
    img: '/imgs/projects/new portfolio.PNG',
    desc: 'Using a React library for workview and Freelanching works Portfolio.',
    technologies: ['React.js', 'JavaScript', 'TailwindCSS'],
    live: 'https://vasanthselva-portfolio.vercel.app/',
  },

];

const skills = [
  {
    icon: 'html',
    title: 'HTML',
  },
  {
    icon: 'css',
    title: 'CSS',
  },
  {
    icon: 'javascript',
    title: 'JavaScript',
  },
  {
    icon: 'typescript',
    title: 'TypeScript',
  },
  {
    icon: 'react',
    title: 'React.js',
  },
  {
    icon: 'tailwindcss',
    title: 'TailwindCSS',
  },
  {
    icon: 'bootstrap',
    title: 'Bootstrap',
  },
  {
    icon: 'react',
    title: 'React-native',
  },
    {
    icon: 'expo',
    title: 'Expo',
  },
  {
    icon: 'mongodb',
    title: 'MongoDB',
  },
  {
    icon: 'mysql',
    title: 'MySql',
  },
  {
    icon: 'python',
    title: 'Python',
  },
  {
    icon: 'flask',
    title: 'Flask',
  },
{
    icon: 'github',
    title: 'Github',
  },
];

export const data = { projects, skills };
