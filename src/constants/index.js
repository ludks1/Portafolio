import {
  //tecnologias
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  threejs,

  //portafiolio
  exchange,

  //imports nuevos
  ittol,
  python,
  java,
  developer,
  fitness,
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
    title: "Data Scientist",
    icon: python,
  },
  {
    title: "Spring Boot Developer",
    icon: java,
  },
  {
    title: "Software Engenieer",
    icon: developer,
  },
  {
    title: "Fitness Enthusiast",
    icon: fitness,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Social Service as Developer",
    company_name: "ITTOL",
    icon: ittol,
    iconBg: "#383E56",
    date: "August 2023 - January 2024",
    points: [
      "Developing and maintaining web applications using JSP.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create systems.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Managed the deployment of the ITTOL mobile system to the app store.",
      "Document generation for various systems, including the database, requirements, and other related tasks.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "In today's times, it is difficult to find someone who, in addition to doing a good job, manages to optimize time and therefore the results obtained, but Lud has shown me that it is possible to do this. Undoubtedly, if you approach the right person, you can make the project you want a reality.",
    name: "Anayansi Daniela Garduño Villa",
    designation: "Co-Worker",
    company: "UNIDAD ACADEMICA PROFESIONAL TIANGUISTENCO",
    image:
      "https://scontent.fmex10-3.fna.fbcdn.net/v/t39.30808-6/436414222_2971159579692672_8856490995403145846_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHY0Pen8eYHbL7G9CVD_UujnJa4DGlRglqclrgMaVGCWqkPYf4d2_rRuedZgKcj098PeDv7nHJKewe0-bE12zZ6&_nc_ohc=lknD1s_lYNYQ7kNvgHGfRnf&_nc_ht=scontent.fmex10-3.fna&oh=00_AYAdXHhdtw33eZplkENWbv_FQgjNQkrdvIOpjyUBngTMdg&oe=66A26F0B",
  },
];

const projects = [
  {
    name: "Exchange rate",
    description:
      "This is a basic project in Java that allows you to convert different currencies using an external exchange rate API. The project interacts with the user through a menu to select the source currency, the quantity to convert and the destination currency.",
    tags: [
      {
        name: "Java 21",
        color: "blue-text-gradient",
      },
      {
        name: "ExcgangeRate-API",
        color: "green-text-gradient",
      },
      {
        name: "Maven",
        color: "pink-text-gradient",
      },
    ],
    image: exchange,
    source_code_link: "https://github.com/ludks1/Conversor-Monedas-API-Java",
  },
];

export { services, technologies, experiences, testimonials, projects };
