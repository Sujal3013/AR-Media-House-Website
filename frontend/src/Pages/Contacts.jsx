import React, { useState } from "react";
import "../styles/Contact.css";
const Contacts = () => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(false);
  const [isOptions, setIsOptions] = useState(false);
  const [isContact, setIsContact] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isMessage, setIsMessage] = useState(false);
  const [options, setOptions] = useState([]);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [optionContent, setOptionContent] = useState("");

  const handleButtonClick = (e) => {
    const content = e.target.textContent;
    setOptions(...options, content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main">
      <div className="heading">
        <h1>LET'S CREATE</h1>
        <p>Progress Together</p>
      </div>
      <div className="button-group-1">
        <button className="domain-button" onClick={handleButtonClick}>
          Media Buying
        </button>
        <button className="domain-button" onClick={handleButtonClick}>
          Content Marketing
        </button>
        <button className="domain-button" onClick={handleButtonClick}>
          Affiliate Marketing
        </button>
      </div>
      <div className="button-group-2">
        <button className="domain-button" onClick={handleButtonClick}>
          Careers
        </button>
        <button className="domain-button" onClick={handleButtonClick}>
          Media Queries
        </button>
        <button className="domain-button" onClick={handleButtonClick}>
          Lead Generation
        </button>
        <button className="domain-button" onClick={handleButtonClick}>
          Others
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="message-form">
          <input type="text" name="name" id="" placeholder="Name" />
          <div className=""></div>
          <input type="text" name="contact" id="" placeholder="Phone Number" />
          <input type="email" name="email" id="" placeholder="Email" />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="submit-button">
            Submit Your Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
