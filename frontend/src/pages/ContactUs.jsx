import Form from "../components/Form";
import { Heading, Button, Wonder, BlackSection, ServicesCards, Section, Circle, Triangle } from "../components";

const ContactUs = () => {
  document.querySelector("title").innerHTML = "Contact - AR Media House";

  return (
    <>
      <div className="flex flex-col px-screen-padding py-10 relative">
          <Heading
            heading="Let's Create"
            subHeading="Progress Together"
          />

          <div className="my-4 flex gap-10 lg:gap-16 justify-between items-end">
            {/* Form */}
            <Form />

            {/* illustartion */}
            <img src="/assets/ContactUs.svg" alt="" className="mb-8 hidden md:w-[40vw] md:block"/>
          </div>

        {/* Shapes */}
        <Circle className="top-[-2%] right-[40%]" />
      </div>

      <img  className="w-full"
        src="./assets/triple-wave-white-1.svg"
      />

      <Section 
        backgroundClassName="px-screen-padding !bg-tertiary-500 py-14 pb-20 md:py-28 md:pb-36 md:!flex-col md:gap-32 lg:!flex-row lg:gap-0"
        heading="Your Problem Our Solution"
        headingClassName="text-center lg:text-start text-primary-500"
        subHeading="contact information"
        allHeadingClassName="items-center lg:items-start"
            
        illustration={
          <div className="w-full lg:w-auto flex flex-col md:flex-row items-center justify-evenly lg:justify-between md:gap-16">
            <ServicesCards 
              className="min-w-[85%] sm:min-w-[50vw] md:!min-w-[35vw] lg:!min-w-0 flex !justify-center relative md:!justify-end mt-12 md:mt-0"
              heading="United States" 
              headingClassName="mt-20 mb-4 !text-2xl"
              text={
                <>
                  2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br /> Delaware, United States
                  <br/><br/>
                  <p className="text-secondary-500">contact@armediahouse.com</p>
                </>
              }
              textClassName="mb-8 sm:mb-12 sm:!text-lg md:!text-sm"
              icon={
                <img
                  src="/assets/location-logo.svg"
                  className="absolute top-[-8%] md:top-[-24%] mx-auto"
                  alt=""
                />
              }
              button={
                <Button className="bg-primary-500 absolute bottom-[-5%]">Get Direction</Button>
              }
            />
            
            <ServicesCards 
              className="min-w-[85%] sm:min-w-[50vw] md:!min-w-[35vw] lg:!min-w-0 flex !justify-center relative !justify-end  mt-20 md:mt-0"
              heading="India" 
              headingClassName="mt-20 mb-4 !text-2xl"
              text={
                <>
                  2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br /> Delaware, United States
                  <br/><br/>
                  <p className="text-secondary-500">contact@armediahouse.com</p>
                </>
              }
              textClassName="mb-8 sm:mb-12 sm:!text-lg md:!text-sm"
              icon={
                <img
                  src="/assets/location-logo.svg"
                  className="absolute top-0 md:top-[-24%] mx-auto"
                  alt=""
                />
              }
              button={
                <Button className="bg-primary-500 absolute bottom-[-5%]">Get Direction</Button>
              }
            />
          </div>
        }
        Shapes={
          <Triangle className="top-[-10%] left-[25%]" />
        }
      />
              
      <Wonder shapeClassName="!top-[-14%] !right-[86%]" />
    </>
  );
};

export default ContactUs;