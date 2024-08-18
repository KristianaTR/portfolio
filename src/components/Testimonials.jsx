import React from "react";
import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Katrina Merca",
      position: "Web Developer",
      connection: "Internship Mentor",
      src: "images/testimonial/katrina.jfif",
      desc: "During her internship at Accenture Baltics, Kristiana demonstrated a commendable enthusiasm for delving deeper into Web development and honing her skills with technologies such as React and Typescript. Notably, her commitment extended beyond practical implementation to a good grasp of the theoretical foundations, making a better base for future growth in this field. Kristiana possesses sufficient proficiency in React to embark on a career as a Junior Web Developer. However, I recommend providing her with guidance and mentorship from more experienced developers to further enhance her skills and understanding. With the right support, Kristiana has the potential to excel in her role and contribute meaningfully to any development team. I wish Kristiana the best of luck in her programming endeavors and hope she finds new opportunities for continued growth and learning.",
      linkedin: "https://www.linkedin.com/in/katrina-merca/",
    },
    {
      name: "Denis Khitarishvili",
      position: "Software Engineer",
      connection: "Instructor of JavaScript Bootcamp",
      src: "images/testimonial/denis.jfif",
      desc: "Kristiana exhibits a strong set of skills and attributes that make them a promising candidate in the field of software development. Their strengths include proficient coding abilities, analytical thinking, and a potential for full-stack development. They also display good soft skills, essential for effective teamwork. They lean toward frontend development, while also showing potential in backend roles. Their familiarity with technologies like React and their logical thinking capabilities contribute to their adaptability and problem-solving skills. Furthermore, their enthusiasm for learning and desire to explore advanced concepts make them a valuable asset in the world of software development.",
      linkedin: "https://www.linkedin.com/in/mustafadennisozdemir/",
    },
    // {
    //   name: "Uldis Siliņš",
    //   position: "Lead Frontend Developer",
    //   connection: "Mentor at 'Climate Calculator 2050' project",
    //   src: "images/testimonial/uldis.jfif",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero laboriosam nisi delectus veniam consequuntur perferendis, eaque nihil sapiente eos magnam illo dicta perspiciatis possimus veritatis voluptatem odio, illum accusantium quisquam!",
    //   linkedin: "https://www.linkedin.com/in/uldis-silins/",
    // },
    {
      name: "Oksana Tatarina",
      position: "Project Manager",
      connection: "Project Manager at 'Climate Calculator 2050' project",
      src: "images/testimonial/oksana.jfif",
      desc: "I've been working with Kristiana on the Climate Calculator project, where she served as the junior Front End developer responsible for the web solution's front end. She consistently demonstrated strong attention to detail, quickly absorbed new information, and found solutions independently. Kristiana is committed to continuously improving her skills, and it showed in her work. She's also a great team player—easy to communicate with and collaborative in every aspect. I highly recommend Kristiana for FE development roles. She has a bright future ahead and would be a valuable asset to any team.",
      linkedin: "https://www.linkedin.com/in/oksanatatarina/",
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Hear From Others
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    <img
                      className="img-fluid rounded-circle border d-inline-block w-25"
                      src={value.src}
                      alt=""
                    />
                    <div className="d-flex align-items-end flex-column">
                      <p className="ms-3 mb-0">
                        <strong
                          className={
                            "d-block fw-600 " +
                            (darkTheme ? "text-white" : "text-dark")
                          }
                        >
                          {value.name}
                        </strong>
                      </p>
                      <a
                        href={value.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ms-2 d-flex align-items-center"
                      >
                        <p className="text-muted fw-500 mb-0"> {value.position} </p>
                        <i className="fab fa-linkedin ms-2"></i>
                      </a>
                    </div>
                  </div>
                  <p className="text-muted fw-500">
                    {" * "}
                    {value.connection}
                    {" * "}
                  </p>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
