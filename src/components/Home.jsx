import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { Tooltip } from "./Tooltip";

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
                <Tooltip
                  text={loop ? "Pause the Typewriter" : "Start the Typewriter"}
                  placement="right"
                >
                  <button
                    className="btn btn-sm btn-outline-primary rounded-pill shadow-none smooth-scroll mt-2"
                    onClick={loop ? stopLoop : startLoop}
                  >
                    <i
                      className={`fa-solid ${loop ? "fa-pause" : "fa-play"}`}
                    />
                    <span className="ms-2">{loop ? "Pause" : "Play"}</span>
                  </button>
                </Tooltip>
                <h2 className="text-16 fw-600 text-white mb-2 mb-md-3">
                  {showFirstString ? (
                    <p className="text-16 fw-600 text-white mb-2 mb-md-3">
                      My name is Kristiāna <br/>
                      and this is my <br/> web development portfolio
                    </p>
                  ) : (
                    <Typewriter
                      options={{
                        strings: [
                          "My name is Kristiāna",
                          "and this is my web development portfolio",
                        ],
                        autoStart: loop,
                        loop: loop,
                        cursor: isStopped ? "" : "|",
                      }}
                    />
                  )}
                </h2>
              </div>
            </div>
          </div>
          <a
            href="#about"
            className="scroll-down-arrow text-white smooth-scroll"
            aria-label="Scroll down to About section"
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
