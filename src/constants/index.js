    import {
    mobile,
    backend,
    creator,
    problem,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    bootstrap,
    express,
    figma,
    docker,
    cplus,
    // python,
    mysql,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    solitaire,
    Azure,
    github,
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
        title: "React Developer",
        icon: mobile,
    },
    {
        title: "Coder in C++",
        icon: cplus,
    },
    {
        title: "DSA",
        icon: problem,
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
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Express",
        icon: express,
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
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "C++",
        icon: cplus,
    },
    ];

    const experiences = [
    {
        title: "C++",
        company_name: "Solitaire Infosys",
        icon: solitaire,
        iconBg: "#fff",  // #383E56
        date: "Sep 2021 - Oct 2021",
        points: [
        "Learn C and C++ .",
        "Build Projects Using C++ and C Graphics",
        ],
    },
    {
        title: "Pyhton",
        company_name: "Solitaire Infosys",
        icon: solitaire,
        iconBg: "#fff",   // #E6DEDD
        date: "Sep 2021 - Oct 2021",
        points: [
        "Learn Pyhton and MySQL",
        "Build Projects Using python",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Azure Skynet",
        icon: Azure,
        iconBg: "black",   //#383E56
        date: "July 2022 - August 2023",
        points: [
        "Learn Html, Css, JavaScript and Tailwind framwork",
        "Build new Responsive Webpages using these technology",
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    ];

const testimonials = [
    {
        testimonial:
        // "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, hic. Lorem ipsum dolor sit amet.",
        name: "Priyanshi Gupta",
        designation: "Software Engineer",
        company: "Affixious",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
        // "I've never met a web developer who truly cares about their clients' success like Rick does.",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, hic. Lorem ipsum dolor sit amet.",
        name: "Anshul",
        designation: "Student",
        company: "NIT",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
        // "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, hic. Lorem ipsum dolor sit amet.",
        name: "Rohit gupta",
        designation: "student",
        company: "CGC",
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