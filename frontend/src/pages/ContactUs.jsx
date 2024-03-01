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

          <div className="mt-12 flex gap-10 lg:gap-16 justify-between items-center lg:items-start">
            {/* Form */}
            <Form />

            {/* Illustartion */}
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
        heading="Contact Information"
        headingClassName="text-center lg:text-start text-primary-500"
        subHeading="Let's Collaborate !"
        allHeadingClassName="items-center lg:items-start"
            
        illustration={
          <div className="w-full lg:w-auto flex flex-col md:flex-row items-center justify-evenly lg:justify-between lg:items-start md:gap-16">
            <ServicesCards 
              className="min-w-[85%] sm:min-w-[50vw] md:!min-w-[35vw] lg:!min-w-0 flex !justify-center relative md:!justify-end mt-12 md:mt-0"
              heading="India" 
              headingClassName="mt-20 mb-4 !text-2xl"
              text={
                <>
                  402,Kuber House <br /> 162,Kanchan Bagh,Indore <br /> Madhya Pradesh - 452001
                  <br/><br/>
                  <span className="text-secondary-500">business@armediahouse.in</span>
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
                <Button to="https://maps.app.goo.gl/44zPJFBY2Po67QRr5" className="bg-primary-500 absolute bottom-[-5%]">Get Direction</Button>
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