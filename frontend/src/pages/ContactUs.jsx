import Form from "../components/Form";
import { Heading, Button, Wonder } from "../components";

const ContactUs = () => {
  document.querySelector("title").innerHTML = "Contact - AR Media House";

  return (
    <>
      <div className="px-screen-padding py-10 relative">
        <div className="flex-col">
          <Heading
            heading="Let's Create"
            subHeading="Progress Together"
          />

          <div className="my-4 flex gap-10 justify-between">
            {/* Form */}
            <span className="basis-[40rem]">
              <Form />
            </span>

            <div className="mx-5 my-auto">
              <img src="/assets/ContactUs.svg" alt="" />
            </div>
          </div>
        </div>
        <img className="absolute bottom-[-5rem] -z-10 rotate-45 left-[40rem]" src="/assets/Triangle-Orange.svg" alt="" />
      </div>
      <div className="bg-secondary-500 h-[55vh] rounded-bl-[125px]">
        <span className="px-screen-padding flex justify-around items-center">
          <span className="basis-[20rem] flex-col items-center text-center">
            <h1 className="text-white block font-jost font-extrabold text-[64px] tracking-wide leading-8">
              CONTACT
            </h1>
            <p className="text-[#FF9356]  font-playfair-display font-bold text-[48px] px-2">
              Information
            </p>
          </span>
          <span className="flex px-5 mt-4 gap-10">
            <div className="bg-white py-5 px-20 relative top-14 shadow-md rounded-md">
              <span className="">
                <span className="flex-col text-center">
                  <img
                    src="/assets/location-logo.svg"
                    className="relative top-[-48px] mx-auto"
                    alt=""
                  />
                  <h1 className="font-bold py-2">UNITED STATES</h1>
                  <p className="py-4">
                    2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br />
                    Delaware, United States
                  </p>
                  <a className="mx-auto block text-[#FF9356]" href="mailto:">
                    armediahouse@gmail.com
                  </a>
                </span>
                <Button
                  to=""
                  className="bg-primary-500 relative top-12 mx-auto px-6 py-4 shadow-md rounded-[5px]"
                >
                  Get Directions
                </Button>
              </span>
            </div>
            <div className="bg-white py-5 px-20 relative top-14 shadow-md rounded-md z-10">
              <span className="">
                <span className="flex-col text-center">
                  <img
                    src="/assets/location-logo.svg"
                    className="relative top-[-48px] mx-auto"
                    alt=""
                  />
                  <h1 className="font-bold py-2">UNITED STATES</h1>
                  <p className="py-4">
                    2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br />
                    Delaware, United States
                  </p>
                  <a className="mx-auto block text-secondary-500" href="mailto:">
                    armediahouse@gmail.com
                  </a>
                </span>
                <Button
                  to=""
                  className="bg-primary-500 relative top-12 mx-auto px-6 py-4 shadow-md rounded-[5px]"
                >
                  Get Directions
                </Button>
              </span>
            </div>
          </span>
        </span>
      </div>
      <div className="h-[30vh] bg-slate-50">
      </div>
      <Wonder />
    </>
  );
};

export default ContactUs;