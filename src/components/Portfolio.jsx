import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    VUE: "Vue",
    REACT: "React",
    WORDPRESS: "WordPress",
  };

  const projectsData = [
    {
      title: "Website for Animal Shelter Mežavairogi",
      projectInfo: [
        "The goal was to create a modern and user-friendly website to contribute to the shelter's mission.",
        "In a team of two front-end developers, I utilized WordPress with the Elementor plugin to develop the website.",
        "Throughout the project, we customized the premade theme to align with the new design. ",
        "I collaborated closely with designers and the Product Manager to establish a systematic approach to design and functionality. ",
        "I also implemented secure payment systems, including credit card and Internet banking platforms, for donation purposes. *Unfortunately, this option was later canceled due to client preferences.",
      ],
      reflections: [
        "Since implementing the donation option took a considerable amount of time and effort I invested, I will add some description of the process:",
        "I used the WooCommerce platform for WordPress and the EveryPay gateway plugin for that.",
        "Following the EveryPay Merchant Integration Manual, I configured the EveryPay gateway using the WordPress Dashboard.",
        "The gateway was activated using API keys to support Card, Open Banking, and PayPal payments.",
        "Access to the EveryPay payment demo account allowed testing before launching the live system.",
      ],
      origin: "Riga TechGirls Mentorship Programm",
      technologies: "HTML, CSS, WordPress, PHP, Trello, Figma",
      mainTechologies: "WordPress, PHP",
      date: "December, 2023",
      url: {
        name: "www.mezavairogi.lv",
        link: "https://mezavairogi.lv",
      },
      thumbImage: "images/projects/project-1-Mezavairogi_00.png",
      sliderImages: [
        "images/projects/project-1-Mezavairogi_01.png",
        "images/projects/project-1-Mezavairogi_02.png",
        "images/projects/project-1-Mezavairogi_03.png",
      ],
      categories: [filters.WORDPRESS],
    },
    {
      title: "Climate Calculator 2050",
      projectInfo: [
        "Goal: a web-based customized version of the 2050 Energy and Emissions Calculator for Latvia based on an adjusted Excel model of the UK Climate Calculator",
        "During my self-learning process, I utilized the Vue.js framework to build the front-end of website using reusable components",
        "Develop a responsive website designed by the UX/UI team",
        "Debug and troubleshoot front-end issues",
      ],
      reflections: [
        "This was my first experience working with frameworks, and Vue.js served as my starting point.",
        "I had no experience working on IT projects at the time. The Agile work environment fit perfectly, and I enjoyed it a lot.",
        "I devoted countless hours to reading tutorials and watching YouTube videos. Through this process, I discovered that nearly everything I needed to learn could be found online.",
      ],
      origin: "Riga TechGirls Projects",
      technologies: "Vue.js, SASS, Git/GitHub, VS Code, Trello, Figma",
      mainTechologies: "Vue.js",
      date: "April, 2023",
      url: {
        name: "www.kalkulators.klimatam.lv",
        link: "https://kalkulators.klimatam.lv/pathways/11111111111111111111111111111111111111111111111111111/primary_energy_chart/comparator/10111111111111110111111001111110111101101101110110111",
      },
      socialLinks: {
        github: "https://github.com/KristianaTR/Climate_Calculator_LV",
      },
      thumbImage: "images/projects/project-2-Calculator_00.png",
      sliderImages: [
        "images/projects/project-2-Calculator_01.png",
        "images/projects/project-2-Calculator_02.png",
        "images/projects/project-2-Calculator_03.png",
      ],
      categories: [filters.VUE],
    },
    {
      title: "Accenture Internship Project",
      projectInfo: [
        "This project is a movie rental platform which was built following the guidelines and instructions provided by the creators of the internship roadmap.",
        "The platform was built using React.js framework, with a focus on incorporating atomic design principles and using Redux for state management. For data storage, the project utilizes the browser's localStorage feature.",
      ],
      reflections: [
        "My main focus was using new React libraries like styled-components and react-toasty. I also discovered a library called React Hook Form, which I will use in my next project for building forms.",      
        "But the most challenging part was to structure the project and build the components aligning with atomic design methodology introduced by Brad Frost.",
        "The key takeaway from this project is the importance of utilizing various libraries and frameworks, as they significantly reduce the amount of code you need to write.",      
      ],
      origin: "Internship at Accenture",
      technologies: "React.js, styled-components, Redux, LocalStorage",
      mainTechologies: "React.js",
      date: "December, 2023",
      url: {
        name: "www.kristianatr.github.io/internship-project_02",
        link: "https://kristianatr.github.io/internship-project_02",
      },
      socialLinks: {
        github: "https://github.com/KristianaTR/internship-project_02",
      },
      thumbImage: "images/projects/project-3-Int_00.png",
      sliderImages: [
        "images/projects/project-3-Int_01.png",
        "images/projects/project-3-Int_02.png",
        "images/projects/project-3-Int_03.png",
        "images/projects/project-3-Int_04.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "SheGoesTech final task",
      projectInfo: [
        "A dynamic landing page featuring an interactive form and data management capabilities.",
        "The front-end includes a button to display a form with conditional fields, validation for form inputs, error messages, and a popup confirmation message upon successful submission.",
        "A table displays the submitted data with options to delete entries.",
        "For the back-end, created a Node.js server with API endpoints to handle Create-Read-Update-Delete (CRUD) operations.",
      ],
      reflections: [
        "This project was relatively straightforward, thanks to the excellent foundation provided by my Bootcamp instructor.",      
        "Although it was my second time building an app with Vue.js, I had a solid understanding of both the app's interface and the server-side JavaScript needed to connect user interactions with the database and retrieve data.",      
      ],
      origin: "SheGoesTech Bootcamp",
      technologies: "HTML5, CSS3, JavaScript, Vue.js, SQL, Node.js, Git/GitHub",
      mainTechologies: "Vue.js, SQL, Node.js",
      date: "May, 2023",
      url: {
        name: "the project is not deployed",
        link: "",
      },
      socialLinks: {
        github: "https://github.com/KristianaTR/SheGoesTech-final-task",
      },
      thumbImage: "images/projects/project-4-SGT_Vue_00.png",
      sliderImages: [
        "images/projects/project-4-SGT_Vue_01.png",
        "images/projects/project-4-SGT_Vue_02.png",
        "images/projects/project-4-SGT_Vue_03.png",
        "images/projects/project-4-SGT_Vue_04.png",
      ],
      categories: [filters.VUE],
    },
    {
      title: "E-commerce website",
      projectInfo: [
        "This is a full-stack e-commerce furniture store application I built jointly with two other aspiring developers as the final project of the JavaScript Bootcamp. ",
        "The front-end utilizes React.js functional components, while the backend is powered by a RESTful API built with Node.js and Express.",
        "My responsibility was to create a user-friendly interface that displays a fetched furniture stock list, detailed product descriptions, and options to add or remove items from a shopping list and proceed to checkout. ",
        "Additionally, the app features user login and admin pages for managing users and inventory. ",
        "All furniture stock and user data are stored in MongoDB and managed using Mongoose.",
      ],
      reflections: [
        "Working in a team of developers provided a valuable opportunity to collaborate, where effective communication and consensus on a unified action plan were crucial to completing the project successfully.",
        " It also offered significant experience in using version control with GitHub, including merging code with others, making pull requests, and resolving conflicts.",
      ],
      origin: "JavaScript Bootcamp",
      technologies: "React.js, TypeScript, Node.js, MongoDB",
      mainTechologies: "React.js, TypeScript, MongoDB",
      date: "August, 2023",
      url: {
        name: "the project is not deployed",
        link: "",
      },
      socialLinks: {
        github: "https://github.com/IevaZR/E-commerce-store",
      },
      thumbImage: "images/projects/project-5-ecommerce_00.png",
      sliderImages: [
        "images/projects/project-5-ecommerce_01.png",
        "images/projects/project-5-ecommerce_02.png",
        "images/projects/project-5-ecommerce_03.png",
        "images/projects/project-5-ecommerce_04.png",
        "images/projects/project-5-ecommerce_05.png",
        "images/projects/project-5-ecommerce_06.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "Pet Adoption App",
      projectInfo: [
        "This project is developed after interning at Accenture.",
        "With this project, I am covering topics I need more profound understanding and hands-on experience.",
        "The project encompasses both the client/frontend and server/backend components.",
        "The application leverages the Petfinder.com API to retrieve data about pets, and user interactions on the client side are stored in a MongoDB database.",
        "Please note that the project is still a work in progress, and additional features and improvements are planned for future development.",
      ],
      reflections: [
        "In developing this project, I navigated a range of complex topics:",
        "Improved my ability to structure and organize the app (Redux structure, public folder, styles folder)",
        "A significant challenge was implementing robust error handling with techniques like Error Boundaries and managing API errors.",
        "Ensuring smooth animations and handling SVG icons efficiently using SVG sprites", 
        "Will be more...",     
      ],
      origin: "Self Learning Process",
      technologies:
        "React.js, TypeScript, styled-components, Redux, Node.js, MongoDB",
      mainTechologies: "React.js, TypeScript, MongoDB",
      date: "February, 2024",
      url: {
        name: "the project is not deployed",
        link: "",
      },
      socialLinks: {
        github: "https://github.com/KristianaTR/pet-adoption-app",
      },
      thumbImage: "images/projects/project-6-PetAdoptionApp_00.png",
      sliderImages: [
        "images/projects/project-6-PetAdoptionApp_01.png",
        "images/projects/project-6-PetAdoptionApp_02.png",
        "images/projects/project-6-PetAdoptionApp_03.png",
        "images/projects/project-6-PetAdoptionApp_04.png",
        "images/projects/project-6-PetAdoptionApp_05.png",
        "images/projects/project-6-PetAdoptionApp_06.png",
        "images/projects/project-6-PetAdoptionApp_07.png",
      ],
      categories: [filters.REACT],
    },
    {
      title: "Uzņēmēji Mieram Donation website",
      projectInfo: [
        "This project was made by a Super Team with a spirited drive to create meaningful solutions.",
        "The web application was designed with a focus on simplicity and functionality.",
        "The front-end of the application is developed using Vue.js, allowing for a structured and modular project file system.",
        "On the back-end, Node.js serves as the server framework, managing connections to the Stripe payment gateway.",
      ],
      reflections: [
        "As for a front-end developer, this project provided a straightforward user interface that offered a valuable opportunity to learn how to connect the front-end to the Stripe Checkout page.",      
      ],
      origin: "Learning Project",
      technologies: "Vue.js, Node.js, Stripe",
      mainTechologies: "Vue.js, Node.js",
      date: "December, 2023",
      url: {
        name: "the project is not deployed",
        link: "",
      },
      socialLinks: {
        github: "https://github.com/uznemeji-mieram/frontend",
      },
      thumbImage: "images/projects/project-7-UznemejiMieram_00.png",
      sliderImages: [
        "images/projects/project-7-UznemejiMieram_01.png",
        "images/projects/project-7-UznemejiMieram_02.png",
        "images/projects/project-7-UznemejiMieram_03.png",
        "images/projects/project-7-UznemejiMieram_04.png",
      ],
      categories: [filters.VUE],
    },
    {
      title: "Weather app",
      projectInfo: [
        "This project was developed as part of a JavaScript Bootcamp, collaborating closely with my teammates.",
        "The app shows average monthly weather for popular countries or based on user search queries.",
        "The app uses an internal database.",
        "Real-time temperature data is fetched from the Weather API provided by openweathermap.org.",
      ],
      reflections: [
        "This was one of my initial experiences using React for web development, with a primary focus on leveraging component reusability, passing props, and utilizing hooks for state management.",      
      ],
      origin: "JavaScript Bootcamp",
      technologies: "React.js, CSS",
      mainTechologies: "React.js",
      date: "July, 2023",
      url: {
        name: "kristianatr.github.io/WeatherApp",
        link: "https://kristianatr.github.io/WeatherApp/",
      },
      socialLinks: {
        github: "https://github.com/KristianaTR/WeatherApp",
      },
      thumbImage: "images/projects/project-8-WeatherApp_00.png",
      sliderImages: [
        "images/projects/project-8-WeatherApp_01.png",
        "images/projects/project-8-WeatherApp_02.png",
      ],
      categories: [filters.REACT],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="#exampleModal"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">
                              {project.mainTechologies}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
