import React from "react";
const CV_URL = "https://dyzulk.com/cv";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_URL} download="CV - MUHAMMAD HERDY ISKANDAR.pdf" className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary smooth-scroll">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
