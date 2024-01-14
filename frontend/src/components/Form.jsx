import React from "react";
import { useState, useEffect } from "react";
import {Button} from "./";
import { isBrowser, motion } from "framer-motion";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",  
    contactNumber: "",
    message: "",
  });
  
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

    if (data.name && data.email && data.message && data.contactNumber && selectedOptions.length > 0) {
      const regex = /^\d{2}\+\d{10}$/;
      const isValidContactNumber = regex.test(data.contactNumber);
      if(isValidContactNumber) {
        // send message

        return;
      }
    }
    // show form validation-issues
    setValidator({
      ...validator,
      isName: data.name !== "",
      isContact: data.contactNumber !== "",
      isEmail: data.email !== "",
      isOptions: selectedOptions.length > 0,
    });
  
    window.alert("Please Provide all field correctly")
  
  };
  return (
      <div className="flex-col py-4 basis-1/2">
        {/* Checkbox section */}
        <div className="flex flex-wrap gap-[15px]">
          {
            dataTypes.map((data, index)=>
              <Button 
                className={
                  selectedOptions.includes(data) ? 
                  "bg-primary-500 text-tertiary-500"
                  :
                  "border-2 border-primary-500 text-primary-500"
                }
                onClick={()=>handleCheckboxChange(data)}
                key={index}
              >{data}</Button>
            )
          }
        </div>

        {/* Input form */}
        <form onSubmit={handleSubmit} className="pt-10 flex flex-col gap-3">
          {
            dataRequired.map((value, index) =>{
              const inputClasses = "px-3 py-2 bg-tertiary-500 rounded-md outline-none"
              if(!value.textArea) 
                return (
                  <input
                    name={value.title}
                    placeholder={value.placeholder ? value.placeholder : value.title}
                    className={inputClasses}
                    onChange={(e)=>setData({...data, [value.title]: e.target.value})}
                    {...value}
                    key={index}
                  />
                )
              else 
                return (
                  <textarea
                    name={value.title}
                    className={inputClasses}
                    placeholder={value.placeholder ? value.placeholder : value.title}
                    rows={5}
                    onChange={(e)=>setData({...data, [value.title]: e.target.value})}
                    key={index}
                    {...value}
                  />
                )
            })
          }
          <Button
            className="bg-primary-500 text-white"
            type="submit"
            onClick={handleSubmit}
          >Send Message</Button> 
        </form>

      </div>
  );
};

const dataTypes = [
  "Media Buying",
  "Content Marketing",
  "Affiliate Marketing",
  "Media Queries",
  "Lead Generation",
  "Careers",
  "Others",
];
const dataRequired = [
  {title: "name", textArea: false, placeholder: "Enter your Name", type: "text"}, 
  {title: "email", textArea: false, placeholder: "Enter your Email", type: "email"}, 
  {title: "contactNumber", textArea: false, placeholder: "91+xxxxxxxxxx", type: "tel", pattern:"[0-9]{2}+[0-9]{10}"}, 
  {title: "message", textArea: true, placeholder: "Enter your message", type: "text"}, 
]
export default Form;
