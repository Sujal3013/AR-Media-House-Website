import React from "react";
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';

const Form = () => {
  const form=useRef();
  const focusForm=()=>{
    form.current.focus();
    setShowError(false);
  }

  const Options=["Media Buying","Content Marketing","Affiliate Marketing","Media Queries","Lead Generation","Careers","Others"]

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && contact && selectedOptions.length > 0) {
      // send message
      emailjs.send('service_24z4gbt', 'template_wg3jr8c', {
        name: name,
        email: email,
        from_name:"Website",
        contact:contact,
        message:message,
        Options: selectedOptions.join(', '),
      }, "WJ8SiZlnj8QyzKCCU")
        .then((response) => {
          console.log('Email sent successfully:', response);
          setName('');
          setEmail('');
          setContact('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    } else {
      // show form validation-issues
      setValidator({
        ...validator,
        isName: name !== "",
        isContact: contact !== "",
        isEmail: email !== "",
        isOptions: selectedOptions.length > 0,
      });
      if(Object.values(validator).some((value)=>value===false)){
        setShowError(true);
      }
    }
  };
  return (
    <div className="flex-col py-3">
      <div className="flex-col gap-6 py-4">
      <form onSubmit={handleSubmit} className="flex-col py-6" ref={form} onClick={focusForm}>
        <div>
          <div className="flex gap-[15px]">
          {Options.slice(0,3).map((option) => (
            <>
        <label
        className={
          selectedOptions.includes(option)
            ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold text-white px-3 py-2"
            : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold text-primary-500 bg-white"
        }
      >
        <input
          className="absolute opacity-0 cursor-pointer"
          type="checkbox"
          value={option}
          checked={selectedOptions.includes(option)}
          onChange={(e) => handleCheckboxChange(e.target.value)}
        />
        {option}
      </label>
      </>
      ))}</div>
          <div className="flex gap-[15px] mt-[15px]">
          {Options.slice(3).map((option) => (
            <>
        <label
        className={
          selectedOptions.includes(option)
            ? "border-2 border-primary-500 bg-primary-500 font-jost font-semibold text-white px-3 py-2"
            : "border-2 border-primary-500 px-3 py-2 font-jost font-semibold text-primary-500 bg-white"
        }
      >
        <input
          className="absolute opacity-0 cursor-pointer"
          type="checkbox"
          value={option}
          checked={selectedOptions.includes(option)}
          onChange={(e) => handleCheckboxChange(e.target.value)}
        />
        {option}
      </label>
      </>
      ))}
          </div>
          <span
            className={`mt-1 text-primary-500 p-1 text-[14px] font-semibold shadow-md ${
              validator.isOptions ? "hidden" : "block"
            }`}
          >
            This field is Required
          </span>
        </div>
        <div>
          {/* Input form */}
          
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
                name="Email"
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
                name="Contact"
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
                name="Message"
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
            
        </div>
        <span
                className={`${
                  showError ? "block" : "hidden"
                } text-primary-500 my-2 py-1 px-2 text-[18px] font-playfair-display border-2 border-dashed border-secondary-400 shadow-md`}
              >
               PLease Fill all the required fields
            </span>
        </form>
      </div>
    </div>
  );
};

export default Form;
