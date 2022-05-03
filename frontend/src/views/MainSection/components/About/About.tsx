import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import skillsImg from "../../../../assets/images";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Timeline from "../../../../components/Timeline/Timeline";
import "./About.scss";

interface Information {
  title: string;
  value: string;
}

interface Skill {
  img: string;
}

const information: Information[] = [
  {
    title: "Birthday",
    value: "25 November 2003",
  },
  {
    title: "Age",
    value: "18",
  },
  {
    title: "Github",
    value: "github.com",
  },
  {
    title: "Email",
    value: "phuocloi2511@gmail.com",
  },
  {
    title: "Degree",
    value: "CS",
  },
  {
    title: "Phone",
    value: "+84796863758",
  },
  {
    title: "City",
    value: "Can Tho",
  },
  {
    title: "Freelance",
    value: "Available",
  },
];
const skills: Skill[] = [
  {
    img: skillsImg.css,
  },
  {
    img: skillsImg.cpp,
  },
  {
    img: skillsImg.figma,
  },
  {
    img: skillsImg.graphql,
  },
  {
    img: skillsImg.html,
  },
  {
    img: skillsImg.javascript,
  },
  {
    img: skillsImg.mu5,
  },
  {
    img: skillsImg.node,
  },
  {
    img: skillsImg.react,
  },
  {
    img: skillsImg.redux,
  },
  {
    img: skillsImg.sass,
  },
  {
    img: skillsImg.typescript,
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
              <h3>
                I'm Phuoc Loi and <span>Web Developer</span>
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ratione pariatur aspernatur officiis ipsa fugiat cupiditate
                voluptas. Nobis repellat eos quo, quos excepturi beatae veniam
                dolores reiciendis sed voluptates quae similique.
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
                      {info.title}: <span>{info.value}</span>
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
                  <div className="skill-item" key={idx}>
                    <img src={skill.img} alt="img" />
                  </div>
                ))}
              </div>
            </div>
            <div className="row padd-15">
              <div className="buttons">
                <a href="#" className="btn">
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
