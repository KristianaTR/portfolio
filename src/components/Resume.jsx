import React from "react";
import { useEffect, useState } from "react";

const Resume = ({ classicHeader, darkTheme }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 520);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const educationDetails = [
    {
      yearRange: "2008",
      title: "Master Degree",
      place:
        "Riga International School of Economics and Business Administration",
      desc: "Business Management",
    },
    {
      yearRange: "2005",
      title: "Bachelor Degree",
      place: "University of Latvia",
      desc: "Social Sciences in Management and Administration",
    },
  ];

  const relevantCourses = [
    {
      yearRange: "2023",
      title: "JavaScript Bootcamp",
      place: "Accenture Training",
      desc: "A comprehensive course covering foundational and advanced JavaScript, DOM manipulation, HTML/CSS/JS website creation, backend development with Node.js and Express.js, API and database fundamentals, RESTful API construction, MongoDB integration, React.js and its advanced features, React Router, Material UI components, and culminates in building a full-stack React application.",
    },
    {
      yearRange: "2023",
      title: "She Goes Tech Bootcamp",
      place: "Accenture Training",
      desc: "A training in web development, covering HTML, CSS, JavaScript, jQuery, the Vue.js framework, Node.js, SQL, and testing, culminating in practical tasks and final projects.",
    },
    {
      yearRange: "2022",
      title: "WEB Development Bootcamp",
      place: "Riga Coding School",
      desc: "A full-stack WEB development course covering HTML, CSS, JavaScript, PHP, MySQL, and WordPress.",
    },
  ];
  const experienceDetails = [
    {
      yearRange: "2024 - Present",
      title: "Web Developer",
      place: "Freelance",
      desc: ["Build websites integrating SEO optimization practices"],
    },
    {
      yearRange: "2023",
      title: "Jr. Front-end Developer || Internship",
      place: "Accenture Baltics",
      desc: [
        "Advancing my front-end development skills through hands-on experiences.",
      ],
    },
    {
      yearRange: "2018 – 2023",
      title: "Career transition",
      place: "",
      desc: [
        "Participating in various technical training programs and courses to upskill",
        "Build upon my previous analytical expertise by acquiring technical skills in web development and modern technologies",
      ],
    },
    {
      yearRange: "2013 - 2017",
      title: "Analyst",
      place: "SEB Latvia (SIA Latectus -SEB Group Real Estate Holding Company)",
      desc: [
        "Market Research and real estate valuation",
        "Data Analysis and Data visualization",
      ],
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className={
              (isSmallScreen ? "text-21" : "text-24") +
              " text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-8")
            }
          >
            Summary
          </h2>
          <p
            className={
              (isSmallScreen ? "text-6 " : "text-9 ") +
              " text-dark fw-600 w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <ul className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc.map((info, index) => (
                      <li key={index}>{info}</li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              Relevant Courses
            </h2>
            {relevantCourses.length > 0 &&
              relevantCourses.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="row gx-5 ">
          <h2
            className={"text-6 fw-600 mb-4  " + (darkTheme ? "text-white" : "")}
          >
            My Education
          </h2>
          {educationDetails.length > 0 &&
            educationDetails.map((value, index) => (
              <div className="col-md-6">
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href="/resume.pdf"
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
