import {
    javascript,
    typescript,
    html,
    css,
    materialui,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    azure,
    kanban,
    foodies,
    unsplash,
    threejs,
    summarizer
  } from "../assets";
  
  export const navLinks = [

    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title:"Skills",
    },

    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
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
      name: "git",
      icon: git,
    },
    {
      name : "Material UI",
      icon: materialui,
    }
  ];
  
  
  
  const projects = [
    {
      name: "Kanban Board",
      description:
        "An agile project management tool that visualizes tasks using cards and columns. It allows users to create different boards, add various cards representing tasks, and effortlessly drag and drop the cards between columns to track progress and prioritize. ",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: kanban,
      source_code_link: "https://github.com/bhawna-107/kanbanboard",
      demo_link: "https://reactjs-kanbanboard.netlify.app/",
    },

       {
      name: "Article Summarizer",
      description:
        " OpenAI's API summarizes articles from URLs, distilling key points using advanced language processing. It then conveniently stores these summaries locally, making it efficient to grasp important insights from lengthy articles. ",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      source_code_link: "https://github.com/bhawna-107/Article-Summarizer",
      demo_link: "openai-article-summarizer-rust.vercel.app",
    },
    {
      name: "Foodies",
      description:
        "A Food Ordering Website showcasing a diverse menu where users can effortlessly explore and add items to the cart and place an order, creating a smooth and engaging dining experience. Responsive design ensures compatibility across devices.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "",
          color: "pink-text-gradient",
        },
      ],
      image: foodies,
      source_code_link: "https://github.com/bhawna-107/Foodies-Website",
      demo_link: "https://bhawna-107.github.io/Foodies-Website/",
      
    },
    // {
    //   name: "Azure Portfolio",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: azure,
    //   source_code_link: "https://github.com/",
    // },

    {
      name: "Unsplash API",
      description:
        "A React app using Unsplash API to fetch and display images with infinite scroll. Seamlessly loads more images as users scroll down for an engaging visual experience. User can search for any kind of images",
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
      image: unsplash,
      source_code_link: "https://github.com/bhawna-107/Unsplash-API-Images",
      demo_link: "https://github.com/bhawna-107/Unsplash-API-Images",
    },
  ];
  
  export {technologies, projects };
