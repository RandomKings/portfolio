import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  reactjs,
  tailwind,
  git,
  mysql,
  postgres,
  vercel,
  fastapi,
  java,
  figma,
  docker,
  python,
  leafty,
  leafty_page,
  pokemon,
  survive_io,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React+Vite Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Programmer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "HTML",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "MYSQL",
    icon: mysql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "FastAPi",
    icon: fastapi,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "FastApi Back End Developer",
    company_name: "Leafty - Marketplace",
    icon: leafty,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Developing endpoints and crud to handle the marketplace",
      "Collaborating with cross-functional teams including designers and frontend.",
    ],
  },
];

const projects = [
  {
    name: "Leafty - Backend Developer",
    description:
      "a revolutionary supply chain system for 𝐌𝐨𝐫𝐢𝐧𝐠𝐚, connecting centra, harbor, and company through an intuitive online platform.",
    tags: [
      {
        name: "react+vite",
        color: "blue-text-gradient",
      },
      {
        name: "Fastapi",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "white-text-gradient",
      },
      {
        name: "vercel",
        color: "pink-text-gradient",
      },
    ],
    image: leafty_page,
    source_code_link: "https://github.com/WADSFinalProject/Leafty-BE.git",
  },
  {
    name: "Sudoku Solver",
    description:
      "",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: python,
    source_code_link: "https://github.com/RandomKings/Sudoku_Solver-_Data-Structure.git",
  },
  {
    name: "Pokemon Collector",
    description:
      "A Java based game where players can collect pokemon and fight",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Jawa swing",
        color: "green-text-gradient",
      },
    ],
    image: pokemon,
    source_code_link: "https://github.com/RandomKings/Pokemon_Collector.git",
  },
  {
    name: "Survive-IO",
    description:
      "A 2D Python based game where zombies track player using A* Algorithm and Player has to gather points by collecting their drops",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
      {
        name: "A*",
        color: "pink-text-gradient",
      },
    ],
    image: survive_io,
    source_code_link: "https://github.com/RandomKings/SurvivorIO.git",
  },
  {
    name: "Particle Simulator",
    description:
      "A python based program where we can visualize how particles will react with each other in different conditions",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
