import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
// import ME from "../../assets/me.jpg";
import "./intro.css";

const ME = "https://assets.dyzulk.com/me-square.jpeg";

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Muhammad Herdy Iskandar" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>
            A <span id="umur"></span> year old Indonesian student living in
            Cirebon, Indonesian. You might have seen me on Facebook or
            Instagram. Now here you are. Yes, I write, too. Because there are so
            many things I cannot say out loud, yet I always find a way to put it
            into words.
          </p>
          <a href="#contact" className="btn btn-primary smooth-scroll">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
