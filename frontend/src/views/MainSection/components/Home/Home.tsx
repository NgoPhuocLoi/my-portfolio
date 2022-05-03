import React from "react";
import "./Home.scss";
import meImg from "../../../../assets/images/me.jpg"

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="home-info padd-15">
          <h3 className="hello">
            Hello, my name is <span className="name">Ngo Phuoc Loi</span>
          </h3>
          <h3 className="my-profession">
            I'm a <span className="typing">Web designer</span>
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
            ullam doloribus consequatur iste maxime qui possimus. Molestiae
            quibusdam aut autem officiis! Hic, minus ab tempora dolorum eligendi
            modi amet vero.
          </p>
          <a href="#contact" className="btn hire-me">Hire Me</a>
        </div>

        <div className="home-img padd-15">
          <img src={meImg} alt="me img" />
        </div>
      </div>
    </div>
  );
};

export default Home;
