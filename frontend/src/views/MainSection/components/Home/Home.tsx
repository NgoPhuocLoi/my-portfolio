import React from "react";
import "./Home.scss";
import meImg from "../../../../assets/images/me.jpg";

const Home = () => {
  const test = () => {
    document.documentElement.style.setProperty("--skin-color", "#ccc");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="home-info padd-15">
          <h3 className="hello">
            Hello, I'm <span className="name">Phuoc Loi</span>
          </h3>
          <h3 className="my-profession">
            I'm a freshman at Can Tho University
          </h3>
          {/* <p>
            My major is Software Engineering and my goals are to become a
            full-stack developer, build practical web and mobile applications.
          </p> */}
          <a href="#about" className="btn hire-me">
            More About Me
          </a>
        </div>

        <div className="home-img padd-15" onClick={test}>
          <img src={meImg} alt="me img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
