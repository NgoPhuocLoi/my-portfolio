import React from "react";
import { Home, About, Service, Portfolio, Contact } from "./components";
import "./MainSection.scss";

const MainSection = () => {
  return (
    <div className="main-section">
      <section className="home section">
        <Home />
      </section>
      <section className="about section" id="about">
        <About />
      </section>
      <section className="service section" id="services">
        <Service />
      </section>
      <section className="portfolio section" id="portfolio">
        <Portfolio />
      </section>
      <section className="contact section" id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default MainSection;
