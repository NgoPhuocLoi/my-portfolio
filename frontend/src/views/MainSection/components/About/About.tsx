import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import skillsImg from "../../../../assets/images";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Timeline from "../../../../components/Timeline/Timeline";
import "./About.scss";
import file from "../../../../assets/table-of-content.pdf";

interface Information {
  title: string;
  value: string;
  type: string;
}

interface Skill {
  title: string;
  img: string;
}

const information: Information[] = [
  {
    title: "Birthday",
    value: "25 November 2003",
    type: "text",
  },
  {
    title: "Age",
    value: "18",
    type: "text",
  },
  {
    title: "Github",
    value: "github.com/NgoPhuocLoi",
    type: "link",
  },
  {
    title: "Email",
    value: "phuocloi2511@gmail.com",
    type: "text",
  },
  {
    title: "Degree",
    value: "CS",
    type: "text",
  },
  {
    title: "Phone",
    value: "+84796863758",
    type: "text",
  },
  {
    title: "City",
    value: "Can Tho",
    type: "text",
  },
  {
    title: "Freelance",
    value: "Available",
    type: "text",
  },
];
const skills: Skill[] = [
  {
    img: skillsImg.css,
    title: "css",
  },
  {
    img: skillsImg.cpp,
    title: "cpp",
  },
  {
    img: skillsImg.figma,
    title: "figma",
  },
  {
    img: skillsImg.graphql,
    title: "graphql",
  },
  {
    img: skillsImg.html,
    title: "html",
  },
  {
    img: skillsImg.javascript,
    title: "javascript",
  },
  {
    img: skillsImg.mu5,
    title: "mu5",
  },
  {
    img: skillsImg.node,
    title: "node",
  },
  {
    img: skillsImg.react,
    title: "react",
  },
  {
    img: skillsImg.redux,
    title: "redux",
  },
  {
    img: skillsImg.sass,
    title: "sass",
  },
  {
    img: skillsImg.typescript,
    title: "typescript",
  },
];

const About = () => {
  return (
    <div className="container">
      <SectionTitle text="About Me" />

      <div className="row">
        <div className="about-content padd-15">
          <div className="row">
            <div className="about-text padd-15">
              <h3>My name is Ngo Phuoc Loi</h3>
              <p>
                I'm studying Software Engineering at Can Tho University. My
                goals are to become a full-stack developer, build practical web
                and mobile applications.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="personal-info padd-15">
              <div className="row">
                <h3 className="title padd-15">Information</h3>
              </div>
              <div className="row">
                {information.map((info, idx) => (
                  <div className="info-item" key={idx}>
                    <p>
                      {info.title}:{" "}
                      <span>
                        {info.type === "link" ? (
                          <a
                            href={`https://${info.value}`}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          info.value
                        )}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills padd-15">
              <div className="row">
                <h3 className="padd-15 title">Skills</h3>
              </div>
              <div className="skill-container">
                {skills.map((skill, idx) => (
                  <div className="skill-item" key={idx} title={skill.title}>
                    <img src={skill.img} alt="img" />
                  </div>
                ))}
              </div>
            </div>
            <div className="row padd-15">
              <div className="buttons">
                <a href={file} download="myCV" className="btn">
                  Download CV
                </a>
                <a href="#contact" className="btn hire-me">
                  Hire Me
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="education padd-15">
              <h3 className="title">Education</h3>
              <Timeline />
            </div>
            <div className="experience padd-15">
              <h3 className="title">Experience</h3>
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
