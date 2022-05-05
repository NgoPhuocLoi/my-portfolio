import React, { useState } from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPhoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { client } from "../../../../sanityClient";
import "./Contact.scss";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isSubmitted, setSubmitted] = useState<boolean>(false);

  const handleChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitMessage = async () => {
    setLoading(true)
    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: formData.subject,
    };

    await client.create(contact);
    setLoading(false)
    setSubmitted(true)
  };
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
      <h3 className="contact-title">Take a coffee and chat with me</h3>
      <h4 className="contact-sub-title">I'm very happy with your message</h4>

      {isSubmitted ? (
        <div className="row">
          <h3 className="contact-title">Thank you for getting in touch!!😊😊</h3>
        </div>
      ) : (
        <div className="row">
          <div className="contact-form padd-15">
            <div className="row">
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={handleChangeInput}
                    name="name"
                    value={formData.name}
                  />
                </div>
              </div>
              <div className="form-item col-6 padd-15">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleChangeInput}
                    name="email"
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                    onChange={handleChangeInput}
                    name="subject"
                    value={formData.subject}
                  />
                </div>
              </div>
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <textarea
                    name="message"
                    id=""
                    className="form-control"
                    placeholder="Message"
                    onChange={handleChangeInput}
                    value={formData.message}
                  ></textarea>
                </div>
              </div>
              <div className="form-item col-12 padd-15">
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn"
                    onClick={handleSubmitMessage}
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
