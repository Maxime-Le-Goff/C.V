import { 
    web,
    mobile,
    backend,
    html,
    css,
    javascript,
    tailwind,
    git,
    mongodb,
    reactjs,
    redux,
    php,
    symfony,
    metaverse,
    sophrology,
    mySQL,
    nextJS,
    typecript
    
} from '../assets/index'


const navLinks = [
    {
        name:'About',
        id: 'about',
    },

    {
        name:'Work',
        id: 'work',
    },

    {
        name:'Contact',
        id: 'contact',
    },
];


const services = [
    {
        title: "FullStack Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Symfony Developer",
        icon: backend,
    },
];

const experiences = [
    {
        title:'Web Developer Training ',
        company_name: 'O\u2019Clock',
        icon: mobile,
        iconBg: "#383E56",
        date: "September 2021 - March 2022",
        points: [
        "798 intensive hours",
        "3 months of Foundation: HTML5/ CSS3/ Javascript/ PHP/ MySQL",
        "1 month of Specialization: Symfony",
        "1 month of group project",
        ],
    },
    {
        title:'Professional Title: Web and Mobile Web Developer',
        company_name: 'O\u2019Clock',
        icon: mobile,
        iconBg: "#E6DEDD",
        date: "May 2022",
        points: [
        "Obtaining a diploma upon completion of the 6-month training",
        "Diploma issued by the Ministry of Labor"
        ],
    },
    {
        title:'Freelance Web Developer',
        company_name: 'MLG',
        icon: mobile,
        iconBg: "#383E56",
        date: "August 2023 - Present",
        points: [
        "Starting as a freelance full-stack developer.",
        ],
    }
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
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "MySQL",
      icon: mySQL,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Symfony",
      icon: symfony,
    },
    {
      name: "NextJS",
      icon: nextJS,
    },
    {
      name: "Typescript",
      icon: typecript,
    },
  ];

  const projects = [
    {
      name: "Sophrology Service",
      description:
        "Web-based platform that allows users to discover the practitioner aswell as allowing users to contribute to testimonials and reviews.",
      tags: [
        {
          name: "symfony",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: sophrology,
      source_code_link: "https://github.com/Maxime-Le-Goff/Hypnose",
      website_link:"https://xn--franoisevalette-hmb.fr/"
    },
    {
      name: "Metaverse Madness",
      description:
        "Web application that showcase a modern-type website about the Metaverse.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/",
      website_link:"#"
    },
  ];
export { navLinks, services, experiences, technologies, projects } ;