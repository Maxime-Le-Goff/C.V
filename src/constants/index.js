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
    typecript,
    esp,
    sneakSpot,
    spotify
    
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
      title:'Self-training',
      company_name: '',
      icon: mobile,
      iconBg: "#E6DEDD",
      date: "October 2022-January 2023",
      points: [
      "Learning new frameworks: React, O'Clock specialization module ",
      "NextJS and Typescript through their documentation"
      ],
  },
    {
        title:'Freelance Web Developer',
        company_name: 'MLG',
        icon: mobile,
        iconBg: "#383E56",
        date: "January 2023 - December 2023",
        points: [
        "Starting as a freelance full-stack developer.",
        "Building different projects using mainly React, Symfony and NextJS"
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
      source_code_link: "https://github.com/Maxime-Le-Goff/Modern-type-website",
      website_link:"https://metaverse.maximelgdev.fr/"
    },
    {
      name: "Easy-Sports-Test",
      description:
        "This application provides the user with some tools to register the results of physical test and display them with charts",
      tags: [
        {
          name: "symfony",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: esp,
      source_code_link: "https://github.com/O-clock-Yuna/projet-20-easy-sports-tests",
      website_link:"https://easysportstest.maximelgdev.fr/"
    },
    {
      name: "SneakSpot",
      description:
        "This e-commerce application allows users to search the right sneaker using different filters like price or brand and then purchase those items using Stripe ",
      tags: [
        {
          name: "symfony",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: sneakSpot,
      source_code_link: "https://github.com/Maxime-Le-Goff/Sneakspot-front",
      website_link:"https://sneakspot.maximelgdev.fr/"
    },
    {
      name: "Spotify-Clone",
      description:
        "This application allow users to add their own music to the website, to listen to this music and music from others aswell as adding songs to their favorites ",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "Supabase",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: spotify,
      source_code_link: "https://github.com/Maxime-Le-Goff/Spotify-clone",
      website_link:"https://spotify-clone-bqur.vercel.app/"
    },
  ];
export { navLinks, services, experiences, technologies, projects } ;