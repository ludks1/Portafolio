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
  carrent,
  jobit,
  tripguide,

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
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
