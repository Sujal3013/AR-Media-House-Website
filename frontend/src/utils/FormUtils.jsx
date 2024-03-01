
export const sendDataToGoogleSheet = async (data, selectedOptions)=>{
    const url = "https://script.google.com/macros/s/AKfycbzkDOSXYa_Gz6OykfXuB1Ej8Sib4mk4_k-zKcwwzR_gcrN08dbo5tVXrDhzIc7CxkBd/exec";

    const formData = {
      name: data.name,
      email: data.email,
      contact: data.contactNumber,
      message: data.message,
      options: selectedOptions.join(", "),
    };
    try {
      await fetch(url,  {
        redirect: "follow",
        mode: 'no-cors', 
        method: "POST",
        body: JSON.stringify(formData), 
        headers: {
          "Content-Type": "application/json",
        },
      });
      return "Successfull";
    } 
    catch(err) {
      return new Error(err.message || "Something Went Wrong!")
    }
}


export const testData = (data, selectedOptions, validator, setValidator) => {
  const regexPhNo = /\d{2,3}?\+?[0-9,-]{10,14}|\+?\d{2,3}?[0-9,-]{10,14}|[0-9,-]{10,16}/;
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  setValidator({
    ...validator,
    name: data.name !== "",
    contact_number: data.contactNumber && regexPhNo.test(data.contactNumber),
    email: data.email !== "" && regexEmail.test(data.email),
    field_of_interest: selectedOptions.length > 0,
  });

  return (
    data.name &&
    data.email &&
    data.message &&
    data.contactNumber &&
    selectedOptions.length > 0 &&
    regexPhNo.test(data.contactNumber) && 
    regexEmail.test(data.email)
  );
}

export const displayErrorMessage = (setShowError, setMessage)=>{
  setShowError(true);
  setMessage("Something went Wrong!");
  setTimeout(()=>{
    setShowError(false);
    setMessage("");
  }, 5000);
}