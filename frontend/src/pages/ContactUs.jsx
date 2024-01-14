import Form from "../components/Form";
import { Heading, Button, Wonder, BlackSection, ServicesCards, Section } from "../components";

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
            <Form />

            {/* illustartion */}
            <img src="/assets/ContactUs.svg" alt="" />
          </div>

        </div>
      </div>

      <img 
        src="./assets/triple-wave-white-1.svg"
      />

      <Section 
        backgroundClassName="px-screen-padding !bg-tertiary-500 py-28 pb-36"
        heading="Your Problem Our Solution"
        subHeading="contact information"
        allHeadingClassName="items-start"
            
        illustration={
          <>
            <ServicesCards 
              className="relative !justify-end"
              heading="United States" 
              headingClassName="mb-4"
              text={
                <>
                  2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br /> Delaware, United States
                  <br/><br/>
                  <p className="text-primary-500">contact@armediahouse.com</p>
                </>
              }
              textClassName="mb-8"
              icon={
                <img
                  src="/assets/location-logo.svg"
                  className="absolute top-[-24%] mx-auto"
                  alt=""
                />
              }
              button={
                <Button className="bg-primary-500 absolute bottom-[-8%]">Get Direction</Button>
              }
            />
            
            <ServicesCards 
              className="relative !justify-end"
              heading="India" 
              headingClassName="mb-4"
              text={
                <>
                  2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br /> Delaware, United States
                  <br/><br/>
                  <p className="text-secondary-500">contact@armediahouse.com</p>
                </>
              }
              textClassName="mb-8"
              icon={
                <img
                  src="/assets/location-logo.svg"
                  className="absolute top-[-24%] mx-auto"
                  alt=""
                />
              }
              button={
                <Button className="bg-primary-500 absolute bottom-[-8%]">Get Direction</Button>
              }
            />
          </>
        }
      />
              
      <Wonder />
    </>
  );
};

export default ContactUs;