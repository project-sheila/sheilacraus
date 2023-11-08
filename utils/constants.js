export const experiences = [
    {
        id: 1,
        position: "Junior Software Developer",
        company: "MYT SoftDev Solutions, Inc.",
        date: "November 2021 - Present",
        description: [
           "Developed hybrid mobile applications using React Native to streamline attendance logging, order management, stock requests, transfer handling, expense and wastage recording, and daily sales report submissions, leading to improved food franchising business operation.",
           "Contributed to the development of diverse web application projects using React JS, including robust Enterprise Resource Planning (ERP) systems, Warehouse Management Systems (WMS), diagnostic systems, and e-commerce systems, significantly benefiting multiple businesses with improved operations and efficiency.",
           "Designed user-friendly UI interfaces using Figma, provided mentorship to company interns, conducted thorough code reviews, performed research and development to emerging technologies and best practices, and established frontend development guidelines for the company.",
           "Facilitated client interactions, addressing concerns, and conducting project demonstrations to ensure client satisfaction and successful product implementation."
        ],
    },
]

export const projects = [
    {
        name: "Repo: Collaborative Checklist Web App",
        short_description: "Mobile-responsive, full-stack, real-time, and collaborative checklist web app",
        long_description: `Repo is more than just a checklist; it's a collaborative workspace for you and your team, family, roomies, or friends. With real-time updates, multiple users can simultaneously edit and check off tasks, ensuring everyone stays on the same page and gets things done faster. Whether you're planning a family vacation, organizing a team project, or just sharing a grocery list, it's never been easier.`,
        link: "https://repo-collab.vercel.app/",
        thumbnail: require("../assets/projects/repo/repo.png"),
        screenshots: [],
        tech_stack: [
            { label: "Next JS", file_name: require("../assets/images/nextjs.png") },
            { label: "Supabase", file_name: require("../assets/images/supabase.png") },
            { label: "Vercel", file_name: require("../assets/images/vercel.png") },
        ],
    },
    {
        name: "Mask ON: Real-time mask usage detector",
        short_description: "Face mask usage detector using the YOLOv8 object detection algorithm.",
        long_description: `This system aims to minimize virus transmission by categorizing individuals into three categories: "Uncovered," "Fully Covered," and "Not Covered." Leveraging computer vision and machine learning techniques, this system ensures adherence to face mask guidelines to mitigate the spread of infectious diseases. This innovative technology represents a significant step toward safeguarding public health and promoting safety in our communities.`,
        link: "https://scraus.github.io/special-problem/",
        thumbnail: require("../assets/projects/mask_on/mask_on.png"),
        screenshots: [require("../assets/projects/mask_on/mask_on.png")],
        tech_stack: [
            { label: "YOLOv8", file_name: require("../assets/images/yolo.png") },
            { label: "React JS", file_name: require("../assets/images/react.png") },
        ],
    },
    // {
    //     name: "Raketship: Job Search Mobile App",
    //     short_description: "Job Search Mobile App Powered by JSearch Rapid API Using React Native and Expo",
    //     long_description: "A simple job finder mobile application, fetched from JSearch Rapid API, using React Native and Expo.",
    //     link: "https://scraus.github.io/special-problem/",
    //     thumbnail: require("../assets/projects/raketship/raketship.png"),
    //     screenshots: [],
    //     tech_stack: [
    //         { label: "YOLOv8", file_name: require("../assets/images/yolo.png") },
    //         { label: "React JS", file_name: require("../assets/images/react.png") },
    //     ],
    // },
]

export const skills = [
    {
        name: "Web development",
        tech_stack: [
            "React JS",
            "Next JS",
            "Chakra UI",
            "Tailwind CSS",
            "Bootstrap",
            "Ant Design",
            "Javascript",
            "HTML",
            "CSS"
        ],
        main: true,
        icon: require("../assets/images/web_dev.png")
    },
    {
        name: "Mobile development",
        tech_stack: [
            "React Native", 
            "Expo"
        ],
        main: true,
        icon: require("../assets/images/mobile_dev.png")
    },
    {
        name: "Tools",
        tech_stack: [
            "Git", 
            "Postman", 
            "cPanel", 
            "Sentry", 
            "Figma", 
            "Canva"
        ],
        main: false
    },
    {
        name: "Soft",
        tech_stack: [
            "Self-learning", 
            "Adaptability", 
            "Attention to detail", 
            "Organized", 
            "Time management", 
            "Team work"
        ],
        main: false
    },
    {
        name: "Others",
        tech_stack: [
            "YOLOv8 Object Detection Algorithm"
        ],
        main: false
    },
]

export const education = [
    {
        id: 1,
        title: "University of the Philippines Cebu",
        place: "BS Computer Science, Magna Cum Laude, GWA: 1.32",
        date: "July 2023",
        description: [
            "Bachelor of Science in Computer Science, Magna Cum Laude, GWA: 1.32",
            "Undergraduate thesis: Face mask compliance detection using the YOLOv8"
        ],
        certificate_link: "https://www.upcebu.edu.ph/"
    },
    {
        id: 2,
        title: "Advanced React",
        place: "Coursera",
        date: "July 2023",
        description: [],
        certificate_link: "https://coursera.org/verify/ZH4QT888ZNL7"
    },
    {
        id: 3,
        title: "Front-end Web UI Frameworks and Tools: Bootstrap 4",
        place: "Coursera",
        date: "November 2021",
        description: [],
        certificate_link: "https://coursera.org/verify/WYDP42MNBB3P"
    },
]