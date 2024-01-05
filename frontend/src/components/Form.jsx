import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [isName, setIsName] = useState(true);
  const [isOptions, setIsOptions] = useState(true);
  const [isContact, setIsContact] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isMessage, setIsMessage] = useState(true);
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
    selectedOptions.length === 0 ? setIsOptions(false) : setIsOptions(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message && contact && selectedOptions.length > 0) {
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
      if (selectedOptions.length == 0) {
        setIsOptions(false);
      }
      if (!contact) {
        setIsContact(false);
      }
    }
  };
  return (
    <div className="flex-col py-3">
      <div className="flex-col gap-6 py-4">
        <div>
            {/* Checkbox section */}
        <div className="flex gap-[15px]">
        <label
          className={
            selectedOptions.includes("Media Buying")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Media Buying"
            checked={selectedOptions.includes("Media Buying")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Media Buying
        </label>

        <label
          className={
            selectedOptions.includes("Content Marketing")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Content Marketing"
            checked={selectedOptions.includes("Content Marketing")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Content Marketing
        </label>

        <label
          className={
            selectedOptions.includes("Affiliate Marketing")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Affiliate Marketing"
            checked={selectedOptions.includes("Affiliate Marketing")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Affiliate Marketing
        </label>
        </div>
       <div className="flex gap-[15px] mt-[15px]">
       <label
          className={
            selectedOptions.includes("Media Queries")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Media Queries"
            checked={selectedOptions.includes("Media Queries")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Media Queries
        </label>
        <label
          className={
            selectedOptions.includes("Lead Generation")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Lead Generation"
            checked={selectedOptions.includes("Lead Generation")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Lead Generation
        </label>
        <label
          className={
            selectedOptions.includes("Careers")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Careers"
            checked={selectedOptions.includes("Careers")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Careers
        </label>
        <label
          className={
            selectedOptions.includes("Others")
              ? "Options-label-clicked"
              : "Options-label"
          }
        >
          <input
            className="absolute opacity-0 cursor-pointer"
            type="checkbox"
            value="Others"
            checked={selectedOptions.includes("Others")}
            onChange={(e) => handleCheckboxChange(e.target.value)}
          />
          Others
        </label>
       
       </div>
       <span>This field is Required</span>
        </div>
          <div >
            {/* Input form */}
            <form onSubmit={handleSubmit} className="flex-col py-6">
              <span>
              <input className="block bg-slate-100 w-full my-6 px-4 py-2 text-slate-400 text-lg rounded-md" type="text" name="name" id="" placeholder="Your Name" />
              <span>This field is Required</span>
              </span>
              <span>
              <input className="block bg-slate-100 w-full my-6 px-4 py-2 text-slate-400 text-lg rounded-md"  type="email" name="name" id="" placeholder="Email" />
              <span>This field is Required</span>
              </span>
                <span>
                <input className="block bg-slate-100 w-full my-6 px-4 py-2 text-slate-400 text-lg rounded-md" type="text" name="name" id="" placeholder="Contact Number" />
                <span>This field is Required</span>
                </span>
                <span className="block">
                <textarea className="block bg-slate-100 w-full my-6 px-4 pt-3 text-slate-400 text-lg rounded-md resize-none" name="" id="" cols="30" rows="10" placeholder="Your Message"/>
                <span>This field is Required</span>
                </span>
                
                <button type="submit" className="bg-primary-500 text-xl border-none p-3 rounded">Send Your Message</button>
            </form>
          </div>
      </div>
    </div>
  );
};

export default Form;
