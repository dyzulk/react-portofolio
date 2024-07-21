import React from "react";
import IMG1 from "../../assets/fantastic.png";
import IMG2 from "../../assets/endaybot.png";
import IMG3 from "../../assets/shortify.png";
import IMG4 from "../../assets/Kuliah-IT-DyPedia.png";
// import IMG5 from "../../assets/news.png";
// import IMG6 from "../../assets/math.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "FantasticPay",
      img: IMG1,
      description:
        "FantasticPay is the final project of the end-of-semester exam from PLN Institute of Technology in the Web Programming course. The project aims to implement an efficient and reliable online payment solution.",
      technologies: "Codeigniter | Tailwind CSS",
      link: "https://dyzulk.com/fantastic",
      github: "https://dyzulk.com/github-fantastic",
    },
    {
      id: 2,
      title: "EndayWithAI",
      img: IMG2,
      description:
        "An artificial intelligence bot based on the Google AI API integrated with the Telegram bot @EndayWithOpenAIBot.",
      technologies: "Python | Google API",
      link: "https://dyzulk.com/ai-telegram",
      github: "https://dyzulk.com/github-ai-telegram",
    },
    {
      id: 3,
      title: "Shortify",
      img: IMG3,
      description:
        "Shortify Connections Platform is more than a free URL shortener, with robust link management software solution.",
      technologies: "Laravel | React",
      link: "https://dyzulk.com/shortify",
      github: "https://dyzulk.com/github-shortify",
    },
    {
      id: 4,
      title: "DyPedia",
      img: IMG4,
      description:
        "Information and Communication Technology (ICT) Encyclopedia Blog which contains articles about the world of information and communication technology.",
      technologies: "JavaScript | CSS",
      link: "https://dyzulk.com/dypedia",
      github: "https://dyzulk.com/github",
    },
    // {
    //   id: 5,
    //   title: "World News",
    //   img: IMG5,
    //   description:
    //     "Fully responsive interactive website built based on Adobe XD design",
    //   technologies: "JavaScript | CSS",
    //   link: "https://meri-mg.github.io/Unilab-world-news/",
    //   github: "https://github.com/Meri-MG/Unilab-world-news",
    // },
    // {
    //   id: 6,
    //   title: "Math Resource",
    //   img: IMG6,
    //   description:
    //     "Real-world group project which is still in progress and will provide educational platform for future young developers",
    //   technologies: "JavaScript | Scss | Python",
    //   link: "https://lukinoo.github.io/math-resource/",
    //   github: "https://github.com/lukinoo/math-resource",
    // },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
