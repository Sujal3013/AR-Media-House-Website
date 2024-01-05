import React, { useState } from "react";
import "../styles/ContactUs.css";
import Wonder from "../components/Wonder";

const ContactUs = () => {
  document.querySelector("title").innerHTML = "Contact - AR Media House";
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

  const handleCheckboxChange = (value) => {
    if (selectedCheckboxes.includes(value)) {
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== value)
      );
    } else {
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
    <div className="w-full">
      <div className="flex-col justify-center align-baseline break-words">
        <h1 className="text-primary-500 text-4xl uppercase font-jost">
          LET'S CREATE
        </h1>
        <p className="text-secondary-500 text-4xl font-playfair-display">
          progress together
        </p>
      </div>
      <div className="flex mb-12">
        <div>
          <form
            onSubmit={handleSubmit}
            className="mt-12 flex-col gap-y-4 message-form"
          >
            <span>
              <span className="grid grid-rows-2 grid-cols-3 gap-3 mb-3">
                <label
                  className={
                    selectedCheckboxes.includes("Media Buying")
                      ? "Options-label-clicked"
                      : "Options-label"
                  }
                >
                  <input
                    className="absolute opacity-0 cursor-pointer"
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
                    className="absolute opacity-0 cursor-pointer"
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
                    className="absolute opacity-0 cursor-pointer"
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
                    className="absolute opacity-0 cursor-pointer"
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
                    className="absolute opacity-0 cursor-pointer"
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
                    className="absolute opacity-0 cursor-pointer"
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
                    className="absolute opacity-0 cursor-pointer"
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
            <span className="flex-col basis-[600px] gap-2">
              <span>
                <input
                  className=" bg-slate-300 rounded text-slate-500 text-2xl font-jost border-none pl-4 py-2 font-normal h-10"
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
              </span>
              <span>
                <input
                  className=" bg-slate-300 rounded w-[120] text-slate-500 text-2xl font-jost border-none pl-4 py-2 font-normal h-10"
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
              </span>
              <span>
                <input
                  className=" bg-slate-300 rounded w-[120] text-slate-500 text-2xl font-jost border-none pl-4 py-2 font-normal h-10"
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
              </span>

              <span>
                <textarea
                  className="font-jost bg-slate-300 text-2xl py-1 pl-4 w-[120] border-none resize-none text-slate-500 font-normal"
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
              </span>

              <button type="submit">Submit Your Message</button>
            </span>
          </form>
        </div>
        <div className="illustration-area">
          {/* Apply : SVG ILLUSTRATION */}
        </div>
      </div>
      <div className="w-full px-12 py-32 flex bg-secondary-500 rounded-bl-3xl">
        <span className="grow-[3] basis-10">
          <h1 className="text-white text-6xl font-bold font-jost break-words uppercase leading-10">
            Contact
          </h1>
          <p className="text-primary-500 text-5xl font-playfair-display font-bold break-words">
            Information
          </p>
        </span>
        <div className="grow-4 basis-14">
          <span className="flex justify-evenly">
            <div className="ml-4 rounded-xl text-center bg-white">
              <img src="" alt="location" />
              <h1 className="mx-2 my-3">United States</h1>
              <p className="break-words m-3">
                2035 Sunset Lake <br />
                RD,STE B2, Newark – 19702 <br /> Delaware, United States
              </p>
              <a className="block" href="mailto:">
                contact@armediahouse.com
              </a>
              <button>Get Directions</button>
            </div>
            <div className="ml-4 rounded-xl text-center bg-white">
              <img src="" alt="location" />
              <h1 className="mx-2 my-3">United States</h1>
              <p className="break-words m-3">
                2035 Sunset Lake <br />
                RD,STE B2, Newark – 19702 <br /> Delaware, United States
              </p>
              <a className="block" href="mailto:">
                contact@armediahouse.com
              </a>
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
