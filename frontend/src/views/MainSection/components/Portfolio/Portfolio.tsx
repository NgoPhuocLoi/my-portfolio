import React from "react";
import "./Portfolio.scss";
import projectThumb from "../../../../assets/images/project1.png";
import { AiFillEye } from "react-icons/ai";
import skillsImg from "../../../../assets/images";

const Portfolio = () => {
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
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={projectThumb} alt="" />
            </div>

            <div className="portfolio-info">
              <h3 className="portfolio-title">My Furniture</h3>
              <p className="portfolio-desc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit accusamus cupiditate quo assumenda modi est fugiat
                obcaecati quas nulla corrupti, laboriosam maxime blanditiis
                itaque quam quasi quod tempore autem animi!
              </p>
              
            </div>

            <ul className="portfolio-tech">
                <li>
                    <img src={skillsImg.css} alt="" />
                </li>
                <li>
                    <img src={skillsImg.html} alt="" />
                </li>
                <li>
                    <img src={skillsImg.javascript} alt="" />
                </li>
                
            </ul>

            <div className="portfolio-actions">
              <a
                href="https://ngophuocloi.github.io/MyFurniture"
                target="_blank"
                rel="noreferrer"
              ><AiFillEye></AiFillEye>View </a>
            </div>

            
          </div>
        </div>
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={projectThumb} alt="" />
            </div>
          </div>
        </div>
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={projectThumb} alt="" />
            </div>
          </div>
        </div>
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={projectThumb} alt="" />
            </div>
          </div>
        </div>
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={projectThumb} alt="" />
            </div>
          </div>
        </div>
        <div className="portfolio-item padd-15">
          <div className="portfolio-item-inner shadow-dark">
            <div className="portfolio-img">
              <img src={projectThumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
