import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  const [validator, setValidator] = useState({
    Name: true,
    contact_number: true,
    email: true,
    field_of_interest: true,
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [showError, setShowError] = useState(false);

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
    e.preventDefault();
    const regex = /^\d{2}\+\d{10}$/;

    if (
      data.name &&
      data.email &&
      data.message &&
      data.contactNumber &&
      selectedOptions.length > 0
    ) {
      if (regex.test(data.contactNumber)) {
        // send message
        emailjs
          .send(
            "service_24z4gbt",
            "template_wg3jr8c",
            {
              name: data.name,
              email: data.email,
              from_name: "Website",
              contact: data.contactNumber,
              message: data.message,
              Options: selectedOptions.join(", "),
            },
            "WJ8SiZlnj8QyzKCCU"
          )
          .then((response) => {
            console.log("Email sent successfully:", response);
            setData({ name: "", email: "", contactNumber: "", message: "" });
            setValidator({
              Name: true,
              contact_number: true,
              email: true,
              field_of_interest: true,
            });
          })
          .catch((error) => {
            console.error("Error sending email:", error);
          });

        return;
      }
    }

    // show form validation-issues
    setValidator({
      ...validator,
      Name: data.name !== "",
      contact_number: data.contactNumber && regex.test(data.contactNumber),
      email: data.email !== "",
      field_of_interest: selectedOptions.length > 0,
    });

    setShowError(true);
    setTimeout(() => setShowError(false), 3000);
  };

  return (
    <div className="flex-col pt-4 md:pt-8 lg:w-[50%]">
      {/* Checkbox section */}
      <div className="flex flex-wrap gap-[8px] md:gap-[10px] lg:gap-[14px]">
        {dataTypes.map((data, index) => (
          <Button
            className={
              selectedOptions.includes(data)
                ? "bg-primary-500 text-tertiary-500"
                : "border-2 border-primary-500 text-primary-500"
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
        {dataRequired.map((value, index) => {
          const inputClasses =
            "px-3 py-2 bg-tertiary-500 rounded-md outline-none";
          if (!value.textArea)
            return (
              <input
                name={value.title}
                placeholder={
                  value.placeholder ? value.placeholder : value.title
                }
                className={inputClasses}
                onChange={(e) =>
                  setData({ ...data, [value.title]: e.target.value })
                }
                {...value}
                key={index}
              />
            );
          else
            return (
              <textarea
                name={value.title}
                className={inputClasses}
                placeholder={
                  value.placeholder ? value.placeholder : value.title
                }
                rows={5}
                onChange={(e) =>
                  setData({ ...data, [value.title]: e.target.value })
                }
                key={index}
                {...value}
              />
            );
        })}

        <span
          className={`${
            showError ? "block" : "hidden"
          } text-red-400 mb-2 text-xl font-semibold`}
        >
          *PLease Fill all the required fields
        </span>

        <Button
          className="bg-primary-500 text-white"
          type="submit"
          onClick={handleSubmit}
        >
          Send Message
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

const dataRequired = [
  {
    title: "name",
    textArea: false,
    placeholder: "Enter your Name",
    type: "text",
    required: true,
  },
  {
    title: "email",
    textArea: false,
    placeholder: "Enter your Email",
    type: "email",
    required: true,
  },
  {
    title: "contactNumber",
    textArea: false,
    placeholder: "91+xxxxxxxxxx",
    type: "tel",
    pattern: "[0-9]{2}+[0-9]{10}",
    required: true,
  },
  {
    title: "message",
    textArea: true,
    placeholder: "Enter your message",
    type: "text",
  },
];
