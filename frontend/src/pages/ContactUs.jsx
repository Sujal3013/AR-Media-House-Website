import React, { useState } from "react";
import "../styles/ContactUs.css";
import Wonder from "../components/Wonder";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(true);
  const [isOptions, setIsOptions] = useState(true);
  const [isContact, setIsContact] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isMessage, setIsMessage] = useState(true);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  document.querySelector("title").innerHTML = "Contact - AR Media House";
  const handleCheckboxChange = (value) => {
    if (selectedCheckboxes.includes(value)) {
      // If the value is already in the array, remove it
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== value)
      );
    } else {
      // If the value is not in the array, add it
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
    selectedCheckboxes.length === 0 ? setIsOptions(false) : setIsOptions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message && contact && selectedCheckboxes.length > 0) {
      // send message
    } else {
      // show form validation-issues
      if (!name) {
        setIsName(false);
      }
      if (!email) {
        setIsEmail(false);
      }
      if (!message) {
        setIsMessage(false);
      }
      if (selectedCheckboxes.length == 0) {
        setIsOptions(false);
      }
      if (!contact) {
        setIsContact(false);
      }
    }
  };
  return (
    <div className="main">
      <div className="heading">
        <h1>LET'S CREATE</h1>
        <p>Progress Together</p>
      </div>
      <div className="Contact-flex">
        <div>
          <form onSubmit={handleSubmit} className="message-form">
            <span>
              <span className="Options-flex">
                <label
                  className={
                    selectedCheckboxes.includes("Media Buying")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Media Buying"
                    checked={selectedCheckboxes.includes("Media Buying")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Media Buying
                </label>

                <label
                  className={
                    selectedCheckboxes.includes("Content Marketing")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Content Marketing"
                    checked={selectedCheckboxes.includes("Content Marketing")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Content Marketing
                </label>

                <label
                  className={
                    selectedCheckboxes.includes("Affiliate Marketing")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Affiliate Marketing"
                    checked={selectedCheckboxes.includes("Affiliate Marketing")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Affiliate Marketing
                </label>
                <label
                  className={
                    selectedCheckboxes.includes("Media Queries")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Media Queries"
                    checked={selectedCheckboxes.includes("Media Queries")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Media Queries
                </label>
                <label
                  className={
                    selectedCheckboxes.includes("Lead Generation")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Lead Generation"
                    checked={selectedCheckboxes.includes("Lead Generation")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Lead Generation
                </label>
                <label
                  className={
                    selectedCheckboxes.includes("Careers")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Careers"
                    checked={selectedCheckboxes.includes("Careers")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Careers
                </label>
                <label
                  className={
                    selectedCheckboxes.includes("Others")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="hidden-checkbox"
                    type="checkbox"
                    value="Others"
                    checked={selectedCheckboxes.includes("Others")}
                    onChange={(e) => handleCheckboxChange(e.target.value)}
                  />
                  Others
                </label>
              </span>
              <span className={isOptions ? "hidden" : "show"}>
                This field is required
              </span>
            </span>
            <input
              className="input-text"
              type="text"
              name="name"
              id=""
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
                if (name) {
                  setIsName(true);
                }
              }}
            />
            <span className={isName ? "hidden" : "show"}>
              This field is required
            </span>
            <input
              className="input-text"
              type="text"
              name="contact"
              id=""
              placeholder="Phone Number"
              onChange={(e) => {
                setContact(e.target.value);
                if (contact) {
                  setIsContact(true);
                }
              }}
            />
            <span className={isContact ? "hidden" : "show"}>
              This field is required
            </span>
            <input
              className="input-text"
              type="email"
              name="email"
              id=""
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
                if (email) {
                  setIsEmail(true);
                }
              }}
            />
            <span className={isEmail ? "hidden" : "show"}>
              This field is required
            </span>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              onChange={(e) => {
                setMessage(e.target.value);
                if (message) {
                  setIsMessage(true);
                }
              }}
            ></textarea>
            <span className={isMessage ? "hidden" : "show"}>
              This field is required
            </span>
            <button type="submit">Submit Your Message</button>
          </form>
        </div>
        <div className="illustration-area">
          {/* Apply : SVG ILLUSTRATION */}
        </div>
      </div>
      <div className="Location-section">
        <span className="Contact-heading">
          <h1>Contact</h1>
          <p>Information</p>
        </span>
        <div className="Location-card-box">
        <span className="Card-flex">
          <div>
            <img src="" alt="location" />
            <h1>United States</h1>
            <p>
              2035 Sunset Lake <br/>RD,STE B2, Newark – 19702 <br /> Delaware, United States
            </p>
            <a href="mailto:">contact@armediahouse.com</a>
            <button>Get Directions</button>
          </div>
          <div>
            <img src="" alt="location" />
            <h1>United States</h1>
            <p>
            2035 Sunset Lake <br/>RD,STE B2, Newark – 19702 <br /> Delaware, United States
            </p>
            <a href="mailto:">contact@armediahouse.com</a>
            <button>Get Directions</button>
          </div>
        </span>
      </div>
      </div>
      <div>
        <span>
          <Wonder />
        </span>
      </div>
    </div>
  );
};

export default ContactUs;
