import React from "react";
import { useState, useEffect } from "react";
import {Button} from "./";

const Form = () => {
  const [data, setData] = useState({});
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
      <div className="flex-col gap-6 py-4">
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
          <span
            className={`mt-1 text-primary-500 p-1 text-[14px] font-semibold shadow-md ${
              validator.isOptions === true ? "hidden" : "block"
            }`}
          >
            This field is Required
          </span>
        </div>

          {/* Input form */}
          <form onSubmit={handleSubmit} className="flex-col py-6">
            {
              dataRequired.map((data, index) =>{
                return (
                  <input
                    name={data.title}
                    className="bg-tertiary-500"
                  />
                )
              })
            }
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

            <Button
              className="bg-primary-500 text-white"
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
  {title: "name", textArea: false, }, 
  {title: "email", textArea: false, }, 
  {title: "contactNumber", textArea: false, }, 
  {title: "message", textArea: true, }, 
]
export default Form;
