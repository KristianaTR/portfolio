import React from "react";

const Skills = ({ classicHeader, darkTheme }) => {
  // skills details
  const skills = [
    {
      name: "Basic",
      desc: "HTML, CSS, JavaScript, TypeScript",
      icon: "fas fa-code",
    },
    {
      name: "JavaScript Frameworks and Libraries",
      desc: "React.js, Vue.js, Node.js",
      icon: "fa-brands fa-js",
    },
    {
      name: "CSS Frameworks and Libraries",
      desc: "Bootstrap, Sass, styled-components",
      icon: "fa-brands fa-css3",
    },
    {
      name: "Design Tools",
      desc: "Figma, Canva",
      icon: "fas fa-paint-brush",
    },
    {
      name: "Back-end technologies",
      desc: "PHP, MySQL, MongoDB, Express",
      icon: "fas fa-database",
    },
    {
      name: "Version Control",
      desc: "Git, GitHub",
      icon: "fa-brands fa-square-git",
    },
  ];

  return (
    <section
      id="skills"
      className={"section bg-light"}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Skills
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            How Can I Contribute?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <h4 className="text-center mb-5">
            During all my coding experiences, I have used the following
            technologies:
          </h4>
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {skills.length > 0 &&
                skills.map((skill, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={skill.icon} />
                      </div>
                      <h3>{skill.name}</h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Skills;
