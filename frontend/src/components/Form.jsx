import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./";

import axios from "axios";
import {GoogleSpreadsheet} from "google-spreadsheet"



export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [validator, setValidator] = useState({
    name: false,
    contact_number: false,
    email: false,
    field_of_interest: false,
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showError, setShowError] = useState(false);
  const [message, setMessage] = useState("");

  const handleCheckboxChange = (value) => {
    if (!selectedOptions.includes(value)) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }
    setValidator({
      ...validator,
      field_of_interest: selectedOptions.length > 0 ? true : false,
    });
  };

  const handleSubmit = (e) => {
    if (disabled) return;
    e.preventDefault();
    const regexPhNo = /\d{2,3}?\+?[0-9,-]{10,14}|\+?\d{2,3}?[0-9,-]{10,14}|[0-9,-]{10,16}/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formData = {
      name: data.name,
      email: data.email,
      contact: data.contactNumber,
      message: data.message,
      options: selectedOptions.join(", "),
    };
    console.log(formData);
    fetch(
      "https://script.google.com/macros/s/AKfycbyVrImVYYKqWmPh7AcTKF23AmpZHMWGL26VZzgif7EUO2r1HgqNdILD-c7E6bMnRtNr/exec", 
      {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      })
      .then((data) => {
        console.log("data sent successfully!!!")
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    if (
      data.name &&
      data.email &&
      data.message &&
      data.contactNumber &&
      selectedOptions.length > 0
    ) {
      if (regexPhNo.test(data.contactNumber) && regexEmail.test(data.email)) {
        // send message
        emailjs
          .send(
            "service_l7j9tuk",
            "template_3no9vj8",
            {
              name: data.name,
              email: data.email,
              from_name: "Website",
              contact: data.contactNumber,
              message: data.message,
              Options: selectedOptions.join(", "),
            },
            "3kGkPXcGhEj9lPsa0"
          )
          .then((response) => {
            setMessage("Email is sent successfully!");
            setSubmitted(true);
            setDisabled(true);
            setTimeout(() => {
              setDisabled(false);
              setSubmitted(false);
            }, 5000);
            setTimeout(()=>setMessage(""), 5000);
            setData({ name: "", email: "", contactNumber: "", message: "" });
            setValidator({
              name: true,
              contact_number: true,
              email: true,
              field_of_interest: true,
            });
            setSelectedOptions([]);
          })
          .catch((error) => {
            console.log(error)
            setShowError(true);
            setMessage("Something went Wrong!");
            setTimeout(()=>{
              setShowError(false);
              setMessage("");
            }, 5000);
          });

    //     return;
    //   }
    // }

    // // show form validation-issues
    // setValidator({
    //   ...validator,
    //   name: data.name !== "",
    //   contact_number: data.contactNumber && regexPhNo.test(data.contactNumber),
    //   email: data.email !== "" && regexEmail.test(data.email),
    //   field_of_interest: selectedOptions.length > 0,
    // });

    // setShowError(true);
    // setTimeout(() => setShowError(false), 5000);
  }}}

  return (
    <div className="flex-col lg:w-[50%]">
      {/* Checkbox section */}
      <div className="flex flex-wrap gap-[8px] md:gap-[10px] lg:gap-[14px]">
        {dataTypes.map((data, index) => (
          <Button
            className={
              selectedOptions.includes(data)
                ? "bg-primary-500 text-tertiary-500 md:!px-3 md:!py-2 lg:!px-4 lg:!py-3"
                : "border-2 border-primary-500 text-primary-500 md:!px-3 md:!py-2 lg:!px-4 lg:!py-3"
            }
            onClick={() => handleCheckboxChange(data)}
            key={index}
          >
            {data}
          </Button>
        ))}
      </div>

      {/* Input form */}
      <form id="contactForm" onSubmit={handleSubmit} className="pt-10 flex flex-col gap-3">
        <input 
          type="text"
          name="name"
          value={data.name}
          onChange={(e)=>setData({...data, "name": e.target.value})}
          className="px-3 py-2 bg-tertiary-500 rounded-md outline-none"
          placeholder="Enter your name"
        />

        <input 
          type="email"
          name="email"
          value={data.email}
          onChange={(e)=>setData({...data, "email": e.target.value})}
          className="px-3 py-2 bg-tertiary-500 rounded-md outline-none"
          placeholder="Enter your email"
        />

        <input 
          type="number"
          name="contactNumber"
          value={data.contactNumber}
          onChange={(e)=>setData({...data, "contactNumber": e.target.value})}
          className="px-3 py-2 bg-tertiary-500 rounded-md outline-none"
          placeholder="Enter your contact number"
        />

        <textarea 
          type="text"
          name="message"
          value={data.message}
          onChange={(e)=>setData({...data, "message": e.target.value})}
          rows={5}
          className="px-3 py-2 bg-tertiary-500 rounded-md outline-none"
          placeholder="Enter your message"
        />

        <span
          name="error"
          className={`${
            showError || message!=="" ? "block" : "hidden"
          } ${showError ? "text-red-400" : "text-green-400"} mb-2 text-xl font-semibold`}
        >
          {
            message !== "" ? 
              message
            : 
              Object.keys(validator).map((key, indx)=>{
                if(validator[key]) return;
                return (
                  <span key={indx}>
                    {key === "field_of_interest" ? "interest" : key}
                    {", "}
                  </span>
                );
              })
          }
          {message === "" && `${Object.keys(validator)?.filter(key=>!validator[key])?.length === 1 ? "is" : "are"} missing or not in correct format.`}
        </span>

        <Button
          className={submitted?"submitted bg-primary-200 text-white":"bg-primary-500 text-white"}
          type="submit"
          onClick={handleSubmit}
        >
          {submitted ? "Message sent !" : "Send Message"}
        </Button>
      </form>
    </div>
  );
}

const dataTypes = [
  "Media Buying",
  "Content Marketing",
  "Affiliate Marketing",
  "Media Queries",
  "Lead Generation",
  "Careers",
  "Others",
];
