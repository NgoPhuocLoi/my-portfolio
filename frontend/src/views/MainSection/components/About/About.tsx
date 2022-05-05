import React, { useState } from "react";
import skillsImg from "../../../../assets/images";
import file from "../../../../assets/table-of-content.pdf";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import Timeline from "../../../../components/Timeline/Timeline";
import "./About.scss";
import {client, urlFor} from "../../../../sanityClient"
import { useEffect } from "react";

interface Information {
  title: string;
  value: string;
}

interface Skill {
  title: string;
  thumb: object;
}


const About = () => {
  const [information, setInformation] = useState<Information[]>([])
  const [skills, setSkills] = useState<Skill[]>([])

  useEffect(() => {
    const infoQuery = '*[_type == "information"]'
    const skillQuery = '*[_type == "skills"]'


    const fetchData = async () => {
      const infoData = await client.fetch(infoQuery)
      setInformation(infoData)
      const skillsData = await client.fetch(skillQuery)
      setSkills(skillsData)

    }

    fetchData()
    
  }, [])
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
                        
                        {info.value}
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
                    <img src={urlFor(skill.thumb) as unknown as string} alt="img" />
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
