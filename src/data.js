import { nanoid } from 'nanoid';

const projects = [
  {
    id: nanoid(),
    title: 'Chatbot',
    img: '/imgs/projects/chatbot.PNG',
    desc: 'The GYM Chatbot web appilication using NLP ',
    technologies: ['Python', 'Flask', 'Mysql', 'Tensorflow'],
    github: 'https://github.com/vasanthselva/projects/tree/main/gym%20chatbot',
    live: 'https://github.com/vasanthselva/projects/tree/main/gym%20chatbot',
  },
  {
    id: nanoid(),
    title: 'Sign language Recognition',
    img: '/imgs/projects/sign language.jpeg',
    desc: 'Sign language Recognition using python',
    technologies: ['Python', 'Cv2', 'LSTM Model', 'Tensorflow'],
    github: 'https://github.com/vasanthselva/projects/tree/main/BATCH-5%20SIGN%20LANGUAGE%20DETECTION',
    live: 'https://github.com/vasanthselva/projects/tree/main/BATCH-5%20SIGN%20LANGUAGE%20DETECTION',
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
    title: 'Portfolio',
    img: '/imgs/projects/new portfolio.PNG',
    desc: 'Using a React library for workview and Freelanching works Portfolio.',
    technologies: ['React.js', 'JavaScript', 'TailwindCSS'],
    github: 'https://github.com/vasanthselva/react-portfolio',
    live: 'https://vasanthselva-portfolio.vercel.app/',
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
    title: 'Notes',
    img: '/imgs/projects/notes.PNG',
    desc: 'write Notes like a important messages.',
    technologies: ['React.js', 'TypeScript',],
    github: 'https://github.com/vasanthselva/Notes-apk',
    live: 'https://notes-friendly.vercel.app/',
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
    icon: 'nodejs',
    title: 'Node.js',
  },
  {
    icon: 'expressjs',
    title: 'Express.js',
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
    icon: 'django',
    title: 'Django',
  },
  {
    icon: 'flask',
    title: 'Flask',
  },
  {
    icon: 'github',
    title: 'Github',
  },
  {
    icon: 'git',
    title: 'Git',
  },
  {
    icon: 'vs-code',
    title: 'Vs code',
  },
  {
    icon: 'jupyter',
    title: 'Jupyter',
  },
];

export const data = { projects, skills };
