import React from "react";
import { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validator, setValidator] = useState({
    isName: true,
    isContact: true,
    isEmail: true,
    isOptions: true,
  });
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleCheckboxChange = (value) => {
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }
    setValidator({...validator,isOptions:selectedOptions.length>0?true:false})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message && contact && selectedOptions.length > 0) {
      // send message
    } else {
      // show form validation-issues
      setValidator({
        ...validator,
        isName: name !== "",
        isContact: contact !== "",
        isEmail: email !== "",
        isOptions: selectedOptions.length > 0,
      });
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
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold text-primary-500 bg-white"
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
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold tracking-wide text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold tracking-wide text-primary-500 bg-white"
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
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold tracking-wide text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold tracking-wide text-primary-500 bg-white"
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
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold tracking-wide text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold tracking-wide text-primary-500 bg-white"
              }
            >
              <input
                className="absolute opacity-0 cursor-pointer"
                type="checkbox"
                value="Media Queries"
                checked={selectedOptions.includes("Media Queries")}
                onChange={(e) => handleCheckboxChange("Media Queries")}
              />
              Media Queries
            </label>
            <label
              className={
                selectedOptions.includes("Lead Generation")
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold tracking-wide text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold tracking-wide text-primary-500 bg-white"
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
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold tracking-wide text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold tracking-wide text-primary-500 bg-white"
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
                  ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold tracking-wide text-white px-3 py-2"
                  : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold tracking-wide text-primary-500 bg-white"
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
          <span
            className={`mt-1 text-primary-500 p-1 text-[14px] font-semibold shadow-md ${
              validator.isOptions === true ? "hidden" : "block"
            }`}
          >
            This field is Required
          </span>
        </div>
        <div>
          {/* Input form */}
          <form onSubmit={handleSubmit} className="flex-col py-6">
            <span>
              <input
                className="block bg-slate-200 w-full my-5 px-4 py-2 text-slate-600 text-lg rounded-md"
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
                onChange={(e) => {
                  setName(e.target.value);
                  setValidator({...validator,isName:true});
                }}
              />
              <span
                className={`${
                  validator.isName ? "hidden" : "block"
                } text-primary-500 p-1 text-[14px] font-semibold shadow-md`}
              >
                This field is Required
              </span>
            </span>
            <span>
              <input
                className="block bg-slate-200 w-full my-5 px-4 py-2 text-slate-600 text-lg rounded-md"
                type="email"
                name="name"
                id=""
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setValidator({...validator,isEmail:true});
                }}
              />
              <span
                className={`${
                  validator.isEmail ? "hidden" : "block"
                } text-primary-500 p-1 text-[14px] font-semibold shadow-md`}
              >
                This field is Required
              </span>
            </span>
            <span>
              <input
                className="block bg-slate-200 w-full my-5 px-4 py-2 text-slate-600 text-lg rounded-md"
                type="text"
                name="name"
                id=""
                placeholder="Contact Number"
                onChange={(e) => {
                  setContact(e.target.value);
                  setValidator({...validator,isContact:true});
                }}
              />
              <span
                className={`${
                  validator.isContact ? "hidden" : "block"
                } text-primary-500 p-1 text-[14px] font-semibold shadow-md`}
              >
                This field is Required
              </span>
            </span>
            <span className="block mb-6">
              <textarea
                className="block bg-slate-200 w-full my-5 px-4 pt-3 text-slate-600 text-lg rounded-md resize-none"
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </span>

            <button
              type="submit"
              className="bg-[#FF9356] text-lg border-none py-3 px-4 rounded"
            >
              Send Your Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
