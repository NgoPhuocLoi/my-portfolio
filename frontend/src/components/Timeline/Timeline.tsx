import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import "./Timeline.scss";

const Timeline = () => {
  return (
    <div className="row">
      <div className="timeline-box padd-15">
        <div className="timeline shadow-dark">
          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
              <AiFillCalendar></AiFillCalendar>2025-2026
            </h3>
            <h4 className="timeline-title">Master in Software Engineering</h4>
            <p className="timeline-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sed
              quia molestiae doloremque, maxime inventore et optio sapiente
              dicta voluptatem eligendi illum, consequatur provident eius illo
              sequi molestias tenetur placeat?
            </p>
          </div>
          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
              <AiFillCalendar></AiFillCalendar>2025-2026
            </h3>
            <h4 className="timeline-title">Master in Software Engineering</h4>
            <p className="timeline-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sed
              quia molestiae doloremque, maxime inventore et optio sapiente
              dicta voluptatem eligendi illum, consequatur provident eius illo
              sequi molestias tenetur placeat?
            </p>
          </div>
          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
              <AiFillCalendar></AiFillCalendar>2025-2026
            </h3>
            <h4 className="timeline-title">Master in Software Engineering</h4>
            <p className="timeline-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sed
              quia molestiae doloremque, maxime inventore et optio sapiente
              dicta voluptatem eligendi illum, consequatur provident eius illo
              sequi molestias tenetur placeat?
            </p>
          </div>
          <div className="timeline-item">
            <div className="circle-dot"></div>
            <h3 className="timeline-date">
              <AiFillCalendar></AiFillCalendar>2025-2026
            </h3>
            <h4 className="timeline-title">Master in Software Engineering</h4>
            <p className="timeline-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex sed
              quia molestiae doloremque, maxime inventore et optio sapiente
              dicta voluptatem eligendi illum, consequatur provident eius illo
              sequi molestias tenetur placeat?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
