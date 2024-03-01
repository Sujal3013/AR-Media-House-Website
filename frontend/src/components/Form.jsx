import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./";
import { testData, sendDataToGoogleSheet, displayErrorMessage } from "../utils/FormUtils";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (disabled) return;
    setDisabled(true);
    
    if (testData(data, selectedOptions, validator, setValidator)) {
      // send message
      try {
        await sendDataToGoogleSheet(data, selectedOptions);
      } catch(err) {
        displayErrorMessage(setShowError, setMessage);
        setDisabled(false);
        return;
      }

      await emailjs.send(
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
        setMessage("Message is sent successfully!");
        setTimeout(()=>setMessage(""), 5000);
        setData({ name: "", email: "", contactNumber: "", message: "" });
        setValidator({
          name: false,
          contact_number: false,
          email: false,
          field_of_interest: false,
        });
        setSelectedOptions([]);
      })
      .catch((error) => {
        displayErrorMessage(setShowError, setMessage);
      });

    } else {
      // show form validation-issues
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
    
    setDisabled(false);
  };

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
      <form onSubmit={handleSubmit} className="pt-10 flex flex-col gap-3">
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
          className="bg-primary-500 text-white"
          disabled={disabled}
          type="submit"
          onClick={handleSubmit}
        >
          {
            disabled ? "Sending..." : "Send Message"
          }
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
