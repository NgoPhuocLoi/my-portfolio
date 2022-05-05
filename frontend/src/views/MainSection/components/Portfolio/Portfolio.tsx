import React, { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { client, urlFor } from "../../../../sanityClient";
import "./Portfolio.scss";

interface Project {
  title: string;
  description: string;
  link: string;
  thumb: {};
  languages: {}[];
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const query = '*[_type == "projects"]';
    const fetchData = async () => {
      const data = await client.fetch(query);

      setProjects(data);
    };
    fetchData();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Portfolio</h2>
        </div>
      </div>
      <div className="row">
        <div className="portfolio-heading">
          <h2>My Last Project: </h2>
        </div>
      </div>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item padd-15">
            <div className="portfolio-item-inner shadow-dark">
              <div className="portfolio-img">
                <img src={urlFor(project.thumb) as unknown as string} alt="" />
              </div>

              <div className="portfolio-info">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-desc">{project.description}</p>
              </div>

              <ul className="portfolio-tech">
                {project.languages.map((lang, idx) => (
                  <li key={idx}>
                    <img src={urlFor(lang) as unknown as string} alt="" />
                  </li>
                ))}
              </ul>

              <div className="portfolio-actions">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillEye></AiFillEye>View{" "}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
