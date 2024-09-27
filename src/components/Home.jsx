import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const Home = ({ classicHeader, darkTheme, handleNavClick }) => {
  const [loop, setLoop] = useState(true);
  const [isStopped, setIsStopped] = useState(false);
  const [showFirstString, setShowFirstString] = useState(false);

  const stopLoop = () => {
    setLoop(false);
    setIsStopped(true);
    setShowFirstString(true);
  };

  const startLoop = () => {
    setLoop(true);
    setIsStopped(false);
    setShowFirstString(false);
  };

  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-8 bg-dark" />

        {/* ---------------image background------------------ */}
        <div
          className="hero-bg parallax"
          style={{ backgroundImage: 'url("images/intro-bg.jpg")' }}
        ></div>
        <div className="hero-content section d-flex min-vh-100">
          <div className="container my-auto">
            <div className="row">
              <div className="col-12 text-center">
                <p className="text-7 fw-500 text-white mb-2 mb-md-3">Welcome</p>
                <button onClick={loop ? stopLoop : startLoop}>
                  {loop ? "||" : "|>"}
                </button>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  {showFirstString ? (
                    <span>I'm Kristiāna Tatarčuka.</span>
                  ) : (
                    <Typewriter
                      options={{
                        strings: [
                          "I'm Kristiāna Tatarčuka.",
                          "I'm a Front-end Developer.",
                          "I'm a Tech Enthusiast.",
                          "I'm a Team player.",
                        ],
                        autoStart: loop,
                        loop: loop,
                        cursor: isStopped ? "" : "|",
                      }}
                    />
                  )}
                </h2>

                <p className="text-5 text-light mb-4">based in Riga, Latvia.</p>
                <a
                  href="#contact"
                  className="btn btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
          >
            <span className="animated">
              <i className="fa fa-chevron-down" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
