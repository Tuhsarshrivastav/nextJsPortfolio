import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated In Bcom in Computer Application",
    location: "Jabalpur, MP",
    description:
      "I graduated after three years of studying and immediately secured an internship as a full stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Full Stack Developer Internship",
    location: "Remote, Indore",
    description:
      "I worked as a Full Stack Developer intern for 6 months and also learned Vue.js during my time there. My stack includes React.js, Node.js, Express.js,  Mongodb, Mysql.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Front End Developer",
    location: "Remote, Hyderabad",
    description:
      "I am currently working as a full-time Frontend Developer. My stack includes Vue.js, React.js, and React-Native.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  // mern stack
  {
    name: "Redit-Clone",
    image: "/projects_images/redit.png",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Full-Stack-Reddit-clone",
    category: ["mern-stack"],
    Description: "A full-stack project that replicates the functionality of Reddit. I utilized the MERN (MongoDB, Express.js, React.js, Node.js) stack to develop this platform, allowing users to post and discuss various topics in a dynamic and interactive way"
  },
  {
    name: "Expenses",
    image: "/projects_images/MERN-Expenses-App.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-Stack_income-tracker-app",
    category: ["mern-stack"],
    Description: "This expense tracking application was built using the MERN stack, providing users with a platform to manage their financial transactions. I focused on creating a user-friendly interface and real-time updates to help users better manage their expenses"
  },
  {
    name: "Amazon-Clone",
    image: "/projects_images/mernAmazon.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-Amazon-Clone",
    category: ["mern-stack"],
    Description: "Inspired by the popular e-commerce platform, this project is a comprehensive clone of Amazon. Leveraging the MERN stack, I created a fully functional shopping experience complete with product listings, cart functionality, and secure payments."
  },
  {
    name: "CarsShare",
    image: "/projects_images/shareCars.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-stack_Car-Rent-Project",
    category: ["mern-stack"],
    Description: "CarsShare is a car-sharing platform that enables users to rent and share vehicles. I built this application using the MERN stack, implementing features such as vehicle listings, user profiles, and booking management to facilitate seamless car-sharing experiences."
  },
  {
    name: "PizzaShop2.0",
    image: "/projects_images/Pizza Shop2.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern_Stack_pizzaShop",
    category: ["mern-stack"],
    Description: "CarsShare is a car-sharing platform that enables users to rent and share vehicles. I built this application using the MERN stack, implementing features such as vehicle listings, user profiles, and booking management to facilitate seamless car-sharing experiences."
  },
  {
    name: "Flipkart-Clone",
    image: "/projects_images/flipkart.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-flipkart-clone",
    category: ["mern-stack"],
    Description: "A clone of the renowned e-commerce platform Flipkart, built using the MERN stack. Users can explore a wide range of products, add items to their cart, and proceed to checkout. This project showcases my proficiency in creating feature-rich e-commerce platforms"
  },
  {
    name: "Slack-Clone",
    image: "/projects_images/slack.png",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-slack-clone",
    category: ["mern-stack"],
    Description: "This project replicates the popular team communication platform Slack. Using the MERN stack, I created a real-time messaging application that supports different channels, direct messaging, and file sharing, making it ideal for team collaboration."
  },
  {
    name: "Inshots-Clone",
    image: "/projects_images/InShorts-Clone.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern_inshorts-clone",
    category: ["mern-stack"],
    Description: "An Inshorts-inspired news aggregation and sharing platform developed using the MERN stack. Users can access a curated collection of news articles and share them with others. The project demonstrates my ability to create content-driven applications with real-time updates."
  },
  {
    name: "Shopping-App",
    image: "/projects_images/shopping.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/MERN_Ecommerce",
    category: ["mern-stack"],
    Description: "Shopping-App is a full-stack e-commerce platform where users can browse and purchase a variety of products. I implemented features such as product listings, user authentication, cart functionality, and secure payments using the MERN stack."
  },
  {
    name: "Shop-iT",
    image: "/projects_images/shopit.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-Shop-app",
    category: ["mern-stack"],
    Description: "Shopping-App is a full-stack e-commerce platform where users can browse and purchase a variety of products. I implemented features such as product listings, user authentication, cart functionality, and secure payments using the MERN stack."
  },
  {
    name: "Notes-Zipper",
    image: "/projects_images/noteZipper.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mern-Notes-App",
    category: ["mern-stack"],
    Description: "Notes-Zipper is a note-taking application that allows users to create and manage notes. Utilizing the MERN stack, I implemented features such as note creation, editing, and deletion, showcasing my proficiency in building dynamic and user-friendly applications."
  },
  {
    name: "Blog-App",
    image: "/projects_images/blog.png",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/Mean-stack-Blog-app",
    category: ["mern-stack"],
    Description: "Notes-Zipper is a note-taking application that allows users to create and manage notes. Utilizing the MERN stack, I implemented features such as note creation, editing, and deletion, showcasing my proficiency in building dynamic and user-friendly applications."
  },
  // {
  //   name: "book-App",
  //   image: "/projects_images/book.png",
  //   image2: "/projects_images/mern-logo.webp",
  //   deployed_url: "https://mern-book-app1.herokuapp.com/",
  //   category: ["mern-stack"],
  //   Description: "book-App is a book-sharing platform built using the MERN stack. Users can explore a variety of books, add them to their collection, and manage their reading preferences. The project showcases my ability to create platforms for content discovery and interaction"
  // },
  {
    name: "Instagram",
    image: "/projects_images/insta2.jpg",
    image2: "/projects_images/mern-logo.webp",
    deployed_url: "https://github.com/Tuhsarshrivastav/MERN_Instagram_clone",
    category: ["mern-stack"],
    Description: "An Instagram clone built using the MERN stack. Users can post images, follow other users, like and comment on posts, and engage in a social media experience similar to Instagram. The project demonstrates my skills in building user-centric applications"
  },

  // next js
  // {
  //   name: "Amazon-clone2.0",
  //   image: "/projects_images/Amazon-Clone.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://amazon-clone2-0-eight.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A reimagined version of the Amazon clone developed using Next.js. This project emphasizes server-side rendering (SSR) to enhance performance and SEO, providing users with a seamless shopping experience"
  // },
  // {
  //   name: "Starwars-clone2.0",
  //   image: "/projects_images/star.png",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://starwars-api-build.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A Star Wars-themed application built with Next.js, fetching data from a Star Wars API to provide users with information about characters, movies, and planets. This project demonstrates my proficiency in creating data-driven applications using Next.js."
  // },
  // {
  //   name: "Starbucks-clone",
  //   image: "/projects_images/buks.png",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://starbucks-clone.web.app/",
  //   category: ["nextjs"],
  //   Description: "A clone of the Starbucks website developed using Next.js. The project showcases my ability to replicate complex web layouts and interactive components while utilizing server-side rendering for improved performance"
  // },
  // {
  //   name: "Disney-Clone",
  //   image: "/projects_images/disney.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://disney-clone-weld.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "Inspired by Disney's website, this clone is built with Next.js, providing users with information about popular Disney movies. The project highlights my design and development skills in creating visually appealing and informative web applications."
  // },
  // {
  //   name: "Instagram-clone 2.0",
  //   image: "/projects_images/instagram-clone.2.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://next-js-instagram-clone2-0.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "Inspired by Disney's website, this clone is built with Next.js, providing users with information about popular Disney movies. The project highlights my design and development skills in creating visually appealing and informative web applications."
  // },
  // {
  //   name: "Hulu-Clone",
  //   image: "/projects_images/Hulu.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://hulu-clone-2-ten.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A Hulu-inspired streaming platform built with Next.js. Users can explore a variety of movies and TV shows and watch trailers. The project highlights my skills in creating engaging multimedia applications."
  // },
  // {
  //   name: "Airbnb-Clone",
  //   image: "/projects_images/airbnb.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url:
  //     "https://nextjs-airbnb-clone-7avi7oxpf-tuhsarshrivastav.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A clone of the Airbnb website developed using Next.js. Users can browse and book accommodations, experiencing a user-friendly booking process. The project showcases my ability to create intuitive user interfaces for online booking services."
  // },
  // {
  //   name: "Google-Clone",
  //   image: "/projects_images/google.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://next-js-google-clone-nine.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A clone of the Airbnb website developed using Next.js. Users can browse and book accommodations, experiencing a user-friendly booking process. The project showcases my ability to create intuitive user interfaces for online booking services."
  // },
  // {
  //   name: "Facebook-Clone",
  //   image: "/projects_images/facebook.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url: "https://facebook-clone-teal.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A clone of the Facebook interface developed using Next.js. Users can create posts, interact with friends, and engage in a social media experience similar to Facebook. The project showcases my skills in replicating complex user interfaces"
  // },
  // {
  //   name: "Google-Docs",
  //   image: "/projects_images/google-docs.jpg",
  //   image2: "/projects_images/nextjslogo.png",
  //   deployed_url:
  //     "https://nextjs-google-docs-clone-2kaed7hd8-tuhsarshrivastav.vercel.app/",
  //   category: ["nextjs"],
  //   Description: "A clone of Google Docs built using Next.js. Users can create, edit, and collaborate on documents in real-time. The project demonstrates my ability to develop collaborative and productivity-focused applications"
  // },
  // // node.js
  // {
  //   name: "Blog",
  //   image: "/projects_images/node.jpg",
  //   image2: "/projects_images/nodejslogo.png",
  //   deployed_url: "https://nodejs-blog-app1.herokuapp.com/",
  //   category: ["node.js"],
  //   Description: "A blogging platform developed using Node.js. Users can create and publish articles, and other users can read and comment on them. The project showcases my backend development skills in creating dynamic content management systems."
  // },
  // {
  //   name: "Pizza-Shop",
  //   image: "/projects_images/Pizza-App.jpg",
  //   image2: "/projects_images/nodejslogo.png",
  //   deployed_url: "https://nodejs-realtime-pizza-app.herokuapp.com",
  //   category: ["node.js"],
  //   Description: "A real-time pizza ordering application developed using Node.js. Users can customize and order pizzas, and the system provides real-time updates on order status. The project highlights my ability to create interactive and responsive applications using Node.js"
  // },
  // {
  //   name: "Library",
  //   image: "/projects_images/library.jpg",
  //   image2: "/projects_images/nodejslogo.png",
  //   deployed_url: "https://fullstack-library123.herokuapp.com",
  //   category: ["node.js"],
  //   Description: "A digital library application developed using Node.js, where users can explore and borrow books. The project showcases my ability to create systems for managing digital content and user interactions."
  // },
  // // react js
  // {
  //   name: "Netflix-Clone",
  //   image: "/projects_images/netflix.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://netflix-clone-46455.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Netflix interface developed using React.js. Users can browse and watch a variety of movie and TV show trailers. The project highlights my skills in replicating multimedia streaming platforms."
  // },
  // {
  //   name: "Tesla-Clone",
  //   image: "/projects_images/tesla.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://tesla-clone-57a26.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Tesla website, showcasing Tesla car models and features. The project demonstrates my ability to replicate modern and visually appealing product showcase websites using React.js"
  // },
  // {
  //   name: "Discord-Clone",
  //   image: "/projects_images/discord.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://discord-2-0-reactjs-tailwindcss.vercel.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Discord chat platform interface developed using React.js and Tailwind CSS. Users can create and participate in chat rooms. The project highlights my skills in creating real-time communication applications"
  // },
  // {
  //   name: "Disney-Clone",
  //   image: "/projects_images/disney.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://whatsapp2-393d6.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of Disney's website developed using React.js. Users can explore and learn about popular Disney movies and characters. The project showcases my design and development skills in creating engaging informational websites."
  // },
  // {
  //   name: "Linkedin-Clone",
  //   image: "/projects_images/LinkedInClone.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://linkedin-41c87.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the LinkedIn interface developed using React.js. Users can create profiles, connect with professionals, and engage in networking activities. The project highlights my ability to replicate social networking platforms"
  // },
  // {
  //   name: "Pinterest-Clone",
  //   image: "/projects_images/Pinterest-clone.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://pinterest-clone-dff23.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Pinterest platform developed using React.js. Users can explore and discover a variety of images and topics. The project showcases my skills in creating visually appealing and content-rich applications."
  // },
  // {
  //   name: "Snapchat-Clone",
  //   image: "/projects_images/Snapchat.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://snapchat-clone-43346.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Snapchat multimedia messaging application, allowing users to send and view disappearing images and videos. The project demonstrates my ability to replicate interactive and engaging mobile app experiences using React.js"
  // },
  // {
  //   name: "Gmail-Clone",
  //   image: "/projects_images/GmailClone.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://clone-6125a.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Gmail email client interface developed using React.js. Users can send, receive, and manage emails. The project showcases my ability to replicate complex email management systems"
  // },
  // {
  //   name: "Tinder-Clone",
  //   image: "/projects_images/tinder.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://tinder-clone-35d25.web.app/",
  //   category: ["react.js"],
  //   Description: "A clone of the Tinder dating app interface developed using React.js. Users can swipe through profiles and match with others. The project highlights my ability to replicate interactive and user-driven mobile app interfaces"
  // },

  // {
  //   name: "Instgaram-Clone",
  //   image: "/projects_images/insta3.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://instagram-clone-b7110.web.app/",
  //   category: ["react.js"],
  //   Description: "An Instagram-inspired photo sharing platform developed using React.js. Users can post images, follow others, and engage with posts. The project showcases my skills in creating visually appealing and interactive social media applications."
  // },
  // {
  //   name: "Telegram-Clone",
  //   image: "/projects_images/telegram.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://telegram-clone-4a266.web.app",
  //   category: ["react.js"],
  //   Description: "A clone of the Telegram messaging app interface developed using React.js. Users can send messages and media files in real-time. The project highlights my ability to replicate modern messaging platforms."
  // },
  // {
  //   name: "Slack",
  //   image: "/projects_images/slack3.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://slack-clone-9eabf.web.app",
  //   category: ["react.js"],
  //   Description: "A clone of the Slack team communication platform interface developed using React.js. Users can create channels, send messages, and collaborate in real-time. The project showcases my skills in building interactive team communication tools"
  // },
  // {
  //   name: "Imessage-Clone",
  //   image: "/projects_images/imessage.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://i-message-clone-5bf6a.web.app",
  //   category: ["react.js"],
  //   Description: "A clone of the iMessage app interface developed using React.js. Users can send text messages in a conversation format. The project demonstrates my ability to replicate mobile messaging interfaces."
  // },
  // {
  //   name: "Discode-Clone",
  //   image: "/projects_images/discode.png",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://discord-clone-a2d7b.web.app",
  //   category: ["react.js"],
  //   Description: "A clone of the Discord messaging and voice chat platform interface developed using React.js. Users can join servers and communicate with text and voice messages. The project highlights my skills in replicating complex communication platforms."
  // },
  // {
  //   name: "Ecommerce2.0",
  //   image: "/projects_images/React-Redux.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://react-redux-ecommerce-c7681.web.app/",
  //   category: ["react.js"],
  //   Description: "An enhanced version of an e-commerce platform built using React.js and Redux. Users can explore, search, and purchase products. The project showcases my skills in creating dynamic and feature-rich online shopping experiences"
  // },
  // {
  //   name: "Ecommerce",
  //   image: "/projects_images/mqdefault.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://react-store-5f33b.web.app/",
  //   category: ["react.js"],
  //   Description: "An e-commerce platform developed using React.js. Users can browse, search, and purchase a variety of products. The project demonstrates my ability to create user-friendly and visually appealing online stores."
  // },
  // {
  //   name: "Clothify-Shop",
  //   image: "/projects_images/Clothify.jpg",
  //   image2: "/projects_images/react.jslogo.png",
  //   deployed_url: "https://clothify-c564b.web.app/",
  //   category: ["react.js"],
  //   Description: "A clothing e-commerce platform developed using React.js. Users can explore and shop for a range of clothing items. The project showcases my skills in creating visually appealing and product-focused online stores."
  // },
  // //react native
  // {
  //   name: "Tesla-Clone",
  //   image: "/projects_images/react-native.webp",
  //   image2: "/projects_images/React-Native-Titre.png",
  //   deployed_url:
  //     "https://github.com/Tuhsarshrivastav/React-Native-Tesla-CLone",
  //   category: ["react-native"],
  //   Description: "A clone of the Tesla app interface developed using React Native. Users can explore Tesla car models and features on a mobile platform. The project demonstrates my ability to replicate app interfaces for both iOS and Android"
  // },
  // {
  //   name: "Youtube-Clone",
  //   image: "/projects_images/react-native.webp",
  //   image2: "/projects_images/React-Native-Titre.png",
  //   deployed_url:
  //     "https://github.com/Tuhsarshrivastav/React-native-Youtube-clone",
  //   category: ["react-native"],
  //   Description: "A clone of the YouTube app interface developed using React Native. Users can watch and search for videos on a mobile device. The project showcases my skills in creating multimedia-focused mobile applications"
  // },
  // {
  //   name: "UberEats-Clone",
  //   image: "/projects_images/react-native.webp",
  //   image2: "/projects_images/React-Native-Titre.png",
  //   deployed_url:
  //     "https://github.com/Tuhsarshrivastav/React_native_uber-eats-clone",
  //   category: ["react-native"],
  //   Description:" A clone of the YouTube app interface developed using React Native. Users can watch and search for videos on a mobile device. The project showcases my skills in creating multimedia-focused mobile applications."
  // },
  // {
  //   name: "Uber-Clone",
  //   image: "/projects_images/react-native.webp",
  //   image2: "/projects_images/React-Native-Titre.png",
  //   deployed_url: "https://github.com/Tuhsarshrivastav/React_Native_uber-clone",
  //   category: ["react-native"],
  //   Description: "A clone of the YouTube app interface developed using React Native. Users can watch and search for videos on a mobile device. The project showcases my skills in creating multimedia-focused mobile applications"
  // },
  // {
  //   name: "Signal-Clone",
  //   image: "/projects_images/react-native.webp",
  //   image2: "/projects_images/React-Native-Titre.png",
  //   deployed_url:
  //     "https://github.com/Tuhsarshrivastav/React-native-Signal-Clone",
  //   category: ["react-native"],
  //   Description: "A clone of the Signal messaging app interface developed using React Native. Users can send and receive messages securely on a mobile platform. The project demonstrates my ability to create privacy-focused mobile messaging applications."
  // },
  // {
  //   name: "Zoom-Clone",
  //   image2: "/projects_images/React-Native-Titre.png",
  //   image: "/projects_images/react-native.webp",
  //   deployed_url: "https://github.com/Tuhsarshrivastav/React-Native-Zoom-clone",
  //   category: ["react-native"],
  //   Description: "A clone of the Zoom video conferencing app interface developed using React Native. Users can join and host video meetings on a mobile device. The project highlights my skills in creating real-time communication apps for mobile platforms."
  // },
  // //vue js
  // {
  //   name: "Google2-Clone",
  //   image: "/projects_images/vue2.jpg",
  //   image2: "/projects_images/vue3.jpeg",
  //   deployed_url: "https://clone-fd66d.web.app/",
  //   category: ["vue.js"],
  //   Description: "Description: A clone of the Google search engine interface developed using Vue.js. Users can perform web searches and access search results. The project showcases my ability to create responsive and interactive web applications with Vue.js."
  // },
  // {
  //   name: "Vue-Ecommerce",
  //   image: "/projects_images/vue1.jpg",
  //   image2: "/projects_images/vue3.jpeg",
  //   deployed_url: "https://clone4-da95e.web.app/",
  //   category: ["vue.js"],
  //   Description: "An e-commerce platform developed using Vue.js. Users can explore and shop for a variety of products. The project highlights my skills in creating dynamic and user-friendly online shopping experiences with Vue.js."
  // },
  // // angular
  // {
  //   name: "Angular-Ecommerce",
  //   image: "/projects_images/angular.jpg",
  //   image2: "/projects_images/angularLogo.png",
  //   deployed_url: "https://clone-1b10f.web.app/",
  //   category: ["angular"],
  //   Description: "A comprehensive e-commerce platform developed using Angular. Users can browse, search, and purchase products. The project demonstrates my proficiency in creating complex web applications using the Angular framework."
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Angular",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Git",
  "Docker",
  "kubernetes",
  "GitHub Actions",
  "AWS",
] as const;
