import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <div className="flex-contact">
        <div className="section-one">
          <img src="/Images/logo 1.png" alt="" />
          <p className="intro">Hi, I am</p>
          <h2 className="name">Vedvyas</h2>
          <p className="about-me">Front-end Developer / UI Designer</p>
        </div>
        <div className="section-two">
          <img className="my-image" src="/Images/ved.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
