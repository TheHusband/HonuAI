import {
  mobile,
  backend,
  creator,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  propertym,
  tripguide,
  threejs,
} from "../assets";
import logo from "../assets/logo.png"

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
    id: "projects",
    title: "Beta",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Customer Support Automation",
    icon: web,
  },
  {
    title: "Marketing Automation",
    icon: mobile,
  },
  {
    title: "Contract Automation",
    icon: backend,
  },
  {
    title: "Financial Management and Expense Tracking",
    icon: creator,
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
    name: "Chroma",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Strategy and Planning",
    //company_name: "Let the tech work",
    icon: logo,
    iconBg: "#383E56",
    //date: "March 2020 - April 2021",
    points: [
      "Objective Identification: Understanding the client's goals, challenges, and areas where AI can add value.",
      "Feasibility Study: Assessing whether AI is the right solution, considering technological, operational, and financial aspects.",
      "Roadmap Development: Crafting a detailed plan that outlines timelines, resources, and key milestones for AI implementation.",
    ],
  },
  {
    title: "Data Management and Preparation",
    //company_name: "Tesla",
    icon: logo,
    iconBg: "#E6DEDD",
    //date: "Jan 2021 - Feb 2022",
    points: [
      "Data Assessment: Reviewing the quality, quantity, and relevance of the client's existing data.",
      "Data Collection and Integration: Gathering additional data if needed and integrating various data sources into a unified framework.",
      "Data Cleaning and Annotation: Ensuring the data is accurate, consistent, and formatted correctly for AI models.",
      "Data Governance: Establishing policies for data privacy, security, and compliance.",
    ],
  },
  {
    title: "AI Model Development and Deployment",
    //company_name: "Shopify",
    icon: logo,
    iconBg: "#383E56",
    //date: "Jan 2022 - Jan 2023",
    points: [
      "Model Selection: Identifying the appropriate AI technologies (e.g., machine learning, natural language processing, computer vision) to address the problem.",
      "Algorithm Training: Building and training AI models using the client's data.",
      "Prototyping and Testing: Developing a prototype and validating its performance in real-world scenarios.",
      "Deployment: Integrating the AI solution into the client's existing systems and workflows.",
    ],
  },
  {
    title: "Monitoring and Optimization",
    //company_name: "Meta",
    icon: logo,
    iconBg: "#E6DEDD",
    //date: "Jan 2023 - Present",
    points: [
      "Performance Monitoring: Continuously tracking the AI system’s performance to ensure it meets objectives.",
      "Optimization: Fine-tuning models and processes for better efficiency and accuracy over time.",
      "Support and Maintenance: Providing ongoing technical support and updates to address changes in business needs or technology.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
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
    name: "AI Broker System",
    description:
      "Transform your real estate office with our cutting-edge AI Broker System, powered by AnythingLLM. Seamlessly manage client communications, streamline property data analysis, and generate market insights—all tailored to your brokerage’s unique needs. Empower your team with smarter automation, saving time and closing deals faster than ever before!",
    tags: [
      {
        name: "Data Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Transaction Tracking",
        color: "green-text-gradient",
      },
      {
        name: "AI Agent",
        color: "yellow-text-gradient",
      },
      {
        name: "Customer Support",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    //source_code_link: "https://github.com/",
  },
  {
    name: "AI Agent Assistant",
    description:
      "Elevate your real estate business with our AI Real Estate Assistant, designed to streamline customer service and daily operations using advanced AI Agents. From managing client inquiries to automating lead follow-ups and scheduling, this intelligent assistant works 24/7 to keep your business running smoothly. Focus on closing deals while your AI Assistant handles the rest!",
    tags: [
      {
        name: "Onboarding",
        color: "blue-text-gradient",
      },
      {
        name: "Nurturing",
        color: "green-text-gradient",
      },
      {
        name: "Customer Support",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    //source_code_link: "https://github.com/",
  },
  {
    name: "AI Investor Assistant",
    description:
      "Maximize your investment potential with our AI Real Estate Investor Assistant, powered by advanced AI Agents. Effortlessly analyze market trends, evaluate properties, and manage your portfolio with intelligent tools designed to save you time and enhance decision-making. Stay ahead of the competition while your AI Assistant handles the research and business essentials!",
    tags: [
      {
        name: "Data Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Project Tracking",
        color: "green-text-gradient",
      },
      {
        name: "Investor Relations",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
   // source_code_link: "https://github.com/",
  },  
  {
    name: "AI Property Management System",
    description:
      "Revolutionize your property management with our cutting-edge AI systems, designed to streamline operations, enhance tenant satisfaction, automate maintenance requests and maximize profitability effortlessly.",
    tags: [
      {
        name: "Data Analytics",
        color: "blue-text-gradient",
      },
      {
        name: "Customer Support",
        color: "green-text-gradient",
      },      
      {
        name: "Customer Management",
        color: "yellow-text-gradient",
      },
      {
        name: "Investor Relations",
        color: "pink-text-gradient",
      },
    ],
    image: propertym,
    //source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
