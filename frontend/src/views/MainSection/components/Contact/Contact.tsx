import React from "react";
import "./Contact.scss";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Contact Me</h2>
        </div>
        <h3 className="contact-title">Have you any questions ?</h3>
        <h4 className="contact-sub-title">I'M AT YOUR SERVICE</h4>
      </div>
      <div className="row">
        <div className="contact-info-item padd-15">
          <div className="icon">
            <BsFillPhoneFill></BsFillPhoneFill>
          </div>
          <h4>Call Me On</h4>
          <p>+84 79 686 3758</p>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <FaMapMarkerAlt></FaMapMarkerAlt>
          </div>
          <h4>Address</h4>
          <p>Can Tho City</p>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <AiFillMail></AiFillMail>
          </div>
          <h4>Email</h4>
          <p>phuocloi2511@gmail.com</p>
        </div>
        <div className="contact-info-item padd-15">
          <div className="icon">
            <AiFillGithub></AiFillGithub>
          </div>
          <h4>Website</h4>
          <p>google.com</p>
        </div>
      </div>
      <h3 className="contact-title">Have you any questions ?</h3>
      <h4 className="contact-sub-title">I'M AT YOUR SERVICE</h4>

      <div className="row">
        <div className="contact-form padd-15">
          <div className="row">
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="form-item col-6 padd-15">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="form-item col-12 padd-15">
              <div className="form-group">
             <textarea name="" id="" className="form-control" placeholder="Message"></textarea>
              </div>
            </div>
            <div className="form-item col-12 padd-15">
              <div className="form-group">
                <button type="submit" className="btn">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
