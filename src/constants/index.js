import { meta, shopify, starbucks, tesla, ci } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  react,
  redux,
  tailwindcss,
  typescript,
  thal,
  nestjs,
  java,
  spring,
  mysql,
  oauth,
  linux,
  three
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: nextjs,
  //   name: "Next.js",
  //   type: "Frontend",
  // },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Language",
  },
  {
    imageUrl: spring,
    name: "Spring Framework",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySQL",
    type: "Database",
  },
  {
    imageUrl: oauth,
    name: "OAuth 2.0",
    type: "Security",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "Operating System",
  },
];

export const experiences = [
  {
    title: "SDE Intern",
    company_name: "Code Inbound",
    icon: ci,
    iconBg: "#DFF0D8",
    date: "February 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/abhishek1141781",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abhishek1141781",
  },
];

export const projects = [
  {
    iconUrl: thal,
    theme: "btn-back-red",
    name: "Thal Estate: Real Estate Listing",
    description:
      "Developed a real estate listing application that is used to list properties for sale as well as for rent.",
    githubLink: "https://github.com/abhishek1141781/mern-real-estate",
    hostedLink: "https://mern-thal-estate-added.onrender.com",
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "Aether: Blog Application",
    description:
      "Blogging Application with good number of functionalities, uses Spring Core, Spring data JPA(Hibernate), Spring Security(JWT), Pagination, ReactJs, ContextApi to name a few. Register New users, Login with new user, add posts, add comments on blogs, add images to post, sort the posts by most recent, search blogs by id, title of blog",
    githubLink: "https://github.com/abhishek1141781/Blogging-Application-JWT",
    hostedLink: "",
  },
  {
    iconUrl: contact,
    theme: "btn-back-red",
    name: "Event Managed: Event Management website",
    description:
      "Developed a basic event management app with pagination and searching and sorting with backend as php8 raw scripts",
    githubLink: "https://github.com/abhishek1141781/ae-php-final",
    hostedLink: "",
  },
  {
    iconUrl: nestjs,
    theme: "btn-back-red",
    name: "Nest Js CRUD with JWT",
    description: "Developed a basic NestJs CRUD with JWT",
    githubLink: "https://github.com/abhishek1141781/ae-php-final",
    hostedLink: "",
  },
  {
    iconUrl: three,
    theme: "btn-back-red",
    name: "3D Portfolio with ThreeJs",
    description: "Developed a 3d interactive portfolio using ThreeJS",
    githubLink: "https://github.com/abhishek1141781/3dportfolio",
    hostedLink: "https://threedportfolio-qmm9.onrender.com/",
  },
];
