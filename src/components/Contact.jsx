import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ classicHeader, darkTheme }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Obfuscated email - replace with your actual email parts
  // This makes it harder for bots to scrape
  const getEmail = () => {
    const user = "kristiana.tatarcuka"; // part before @
    const domain = "gmail.com"; // part after @
    return `${user}@${domain}`;
  };

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

  const copyToClipboard = async () => {
    try {
      const email = getEmail();
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkTheme ? "dark" : "light",
      });

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: darkTheme ? "dark" : "light",
      });
    }
  };

  const openEmailClient = () => {
    const email = getEmail();
    window.location.href = `mailto:${email}`;
  };

  return (
    <section
      id="contact"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2
            className={
              (isSmallScreen ? "text-21" : "text-24") +
              " text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-darker")
            }
          >
            Contact
          </h2>
          <p
            className={
              (isSmallScreen ? "text-6 " : "text-9 ") +
              "text-dark fw-600 w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Get in Touch
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        {/* Contact Content */}
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p
              className={
                "text-4 mb-4 " + (darkTheme ? "text-light" : "text-muted")
              }
            >
              I'm always interested in hearing about new projects and
              opportunities.
            </p>

            {/* Email Display */}
            <div className="d-flex flex-column align-items-center">
              <div
                className={"mb-4 " + (darkTheme ? "text-white" : "text-dark")}
              >
                <h3 className="text-5 mb-2">Let's connect!</h3>
                <p className="text-3 mb-4">Feel free to reach out via email</p>
              </div>

              {/* Email Button Group */}
              <div className="d-flex flex-column flex-sm-row gap-3 align-items-center">
                {/* Click to Copy Button */}
                <button
                  onClick={copyToClipboard}
                  className={
                    "btn btn-lg rounded-pill px-5 py-3 position-relative " +
                    (copied ? "btn-success" : "btn-primary")
                  }
                  style={{
                    minWidth: "250px",
                    transition: "all 0.3s ease",
                    fontSize: "1.1rem",
                  }}
                >
                  <span className="d-flex align-items-center justify-content-center">
                    {copied ? (
                      <>
                        <i className="fas fa-check me-2"></i>
                        Copied to clipboard!
                      </>
                    ) : (
                      <>
                        <i className="far fa-copy me-2"></i>
                        Copy my email
                      </>
                    )}
                  </span>
                </button>

                {/* Or Divider for mobile */}
                <span
                  className={
                    "d-block d-sm-none " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  or
                </span>

                {/* Open Email Client Button */}
                <button
                  onClick={openEmailClient}
                  className="btn btn-outline-primary btn-lg rounded-pill px-4 py-3"
                  style={{
                    minWidth: "180px",
                    fontSize: "1.1rem",
                  }}
                >
                  <i className="far fa-envelope me-2"></i>
                  Send Email
                </button>
              </div>

              {/* Helper Text */}
              <p
                className={
                  "text-2 mt-3 " + (darkTheme ? "text-white-50" : "text-muted")
                }
              >
                Click to copy email address or open your email client
              </p>
            </div>

            {/* Social Links (Optional - if you want to add them) */}
            <div className="mt-5 pt-3">
              <h4
                className={
                  "text-4 mb-3 " + (darkTheme ? "text-white" : "text-dark")
                }
              >
                Also find me on
              </h4>
              <div className="d-flex justify-content-center gap-3">
                <a
                  href="https://github.com/kristianatr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={
                    "btn btn-outline-secondary rounded-circle " +
                    (darkTheme ? "btn-outline-light" : "")
                  }
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i className="fab fa-github" style={{ fontSize: "30px" }}></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/kristiana-tatarcuka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <i
                    className="fab fa-linkedin-in"
                    style={{ fontSize: "30px" }}
                  ></i>
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
