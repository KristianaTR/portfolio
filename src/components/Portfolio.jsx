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
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Website for Animal Shelter Mežavairogi",
      projectInfo: [
        "The goal was to create a modern and user-friendly website to contribute to the shelter's mission.",
        "In a team of two developers, I utilized WordPress with the Elementor plugin to develop the website.",
        "Throughout the project, we customized the premade theme to align with the new design. ",
        "I collaborated closely with designers and the Product Manager to establish a systematic approach to design and functionality. ",
        "I also implemented secure payment systems, including credit card and Internet banking platforms, for donation purposes. *Unfortunately, this option was later canceled due to client preferences.",
      ],
      courses: "Riga TechGirls Mentorship Programm",
      technologies: "HTML, CSS, WordPress, PHP, Trello, Figma",
      mainTechologies: "WordPress, PHP",
      date: "December, 2023",
      url: {
        name: "www.mezavairogi.lv",
        link: "https://mezavairogi.lv",
      },
      thumbImage: "images/projects/project-1-Mezavairogi_00.jpg",
      sliderImages: [
        "images/projects/project-1-Mezavairogi_01.jpg",
        "images/projects/project-1-Mezavairogi_02.jpg",
        "images/projects/project-1-Mezavairogi_03.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Climate Calculator 2050",
      projectInfo: [
        "Goal: a web-based customized version of the 2050 Energy and Emissions Calculator for Latvia based on an adjusted Excel model of the UK Climate Calculator",
        "During my self-learning process, I utilized the Vue.js framework to build the website using reusable components",
        "Develop a responsive website designed by the UX/UI team",
        "Debug and troubleshoot front-end issues",
      ],
      courses: "Riga TechGirls Projects",
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
      thumbImage: "images/projects/project-2-Calculator_00.jpg",
      sliderImages: [
        "images/projects/project-2-Calculator_01.jpg",
        "images/projects/project-2-Calculator_02.jpg",
        "images/projects/project-2-Calculator_03.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Accenture Internship Project",
      projectInfo: [
        "This project is a movie rental platform which was built following the guidelines and instructions provided by the creators of the internship roadmap.",
        "The platform was built using React.js framework, with a focus on incorporating atomic design principles and using Redux for state management. For data storage, the project utilizes the browser's localStorage feature.",
      ],
      courses: "Internship at Accenture",
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
      thumbImage: "images/projects/project-3-Int_05.jpg",
      sliderImages: [
        "images/projects/project-3-Int_01.jpg",
        "images/projects/project-3-Int_02.jpg",
        "images/projects/project-3-Int_03.jpg",
        "images/projects/project-3-Int_04.jpg",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "SheGoesTech final task",
      projectInfo: [
        "A dynamic landing page featuring an interactive form and data management capabilities.",
        "The front-end includes a button to display a form with conditional fields, validation for form inputs, error messages, and a popup confirmation message upon successful submission.", 
        "A table displays the submitted data with options to delete entries.", 
        "For the back-end, created a Node.js server with API endpoints to handle Create-Read-Update-Delete (CRUD) operations.",
      ], 
      courses: "SheGoesTech Bootcamp",
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
      thumbImage: "images/projects/project-4-SGT_Vue_00.jpg",
      sliderImages: [
        "images/projects/project-4-SGT_Vue_01.jpg",
        "images/projects/project-4-SGT_Vue_02.jpg",
        "images/projects/project-4-SGT_Vue_03.jpg",
        "images/projects/project-4-SGT_Vue_04.jpg",
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Project Title 5",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      courses: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-5.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Project Title 6",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      courses: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        github: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-6.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Project Title 7",
      projectInfo:
        "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
      courses: "Ruby Clinton",
      technologies: "iOS, HTML5, CSS3, PHP, Java",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "www.example.com",
        link: "https://www.example.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/project-7.jpg",
      sliderImages: [
        "images/projects/project-1.jpg",
        "images/projects/project-5.jpg",
      ],
      categories: [filters.DESIGN, filters.PHOTOS],
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
                            href=""
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
