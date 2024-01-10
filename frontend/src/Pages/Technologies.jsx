import React from "react";
import {
  Heading,
  Button,
  HeroSectionWrapper,
  Section,
  ExploreBlog,
  Wonder,
} from "../components";

export default function Technologies() {
  document.querySelector("title").innerHTML = "Technologies - AR Media House";
  const gradientStyle = {
    "background-image":
      "linear-gradient(0deg, rgb(255, 255, 255) 50%, #f7f7f7 50%)",
  };
  return (
    <div className="overflow-hidden">
      <HeroSectionWrapper className="flex gap-[4vw] h-[70vh] py-10 justify-between" >
        {/* text content right side */}
        <div className="flex-col w-[60vw] my-[0vh]">
          <Heading
            heading="BINDING TECHNOLOGY"
            headingClassName="text-[64px] text-primary-500"
            subHeading="with marketing"
            subHeadingClassName="text-tertiary-500 text-[48xl]"
          />
          {/* Buttons */}
          <div className="mt-32">
            <Button arrow className="bg-white text-secondary-500">
              Let's Work Together
            </Button>
          </div>
        </div>
        {/* illustraion */}
        <div  className="w-auto h-auto rounded">
              <img src="/assets/Technology_banner.svg" alt="" />
          </div>
      </HeroSectionWrapper>
      {/* Tech-stack section */}
      <div className="flex-col justify-evenly px-screen-padding py-20 bg-[url('/assets/wave1.svg')] bg-no-repeat bg-contain bg-bottom">
        <div className="flex justify-between items-start my-5">
          <div className="text-start py-4">
            <h1 className="text-primary-500 text-[64px] font-extrabold leading-10">
              TECHNOLOGIES <br />
              <span className="text-secondary-500 text-[52px] font-playfair-display font-bold">
                we use
              </span>
            </h1>
          </div>
          <div>
            <img src="/assets/lookfinity.png" alt="" />
          </div>
        </div>
        <div className="flex justify-between my-6">
          <img src="/assets/AWS.png" alt="" />
          <img src="/assets/graphql.png" alt="" />
          <img src="/assets/react.png" alt="" />
          <img src="/assets/kafka.png" alt="" />
          <img src="/assets/kubernetes.png" alt="" />
          <img src="/assets/clickHouse.png" alt="" />
        </div>
      </div>
      {/* PROCESS SECTION */}
      <Section
        backgroundClassName="bg-tertiary-500 px-32 py-1"
        heading="AUTOMATION MARKETING"
        subHeading="platform"
        headingClassName="text-secondary-500 font-jost text-[64px] font-extrabold"
        subHeadingClassName="text-primary-500 font-playfair-display font-bold text-[48px]"
        text="Our in-house marketing platform is backed with Artificial Intelligence
        and uses data-driven benchmarks to assist our teams and clients while
        optimizing and scaling campaigns on multiple digital platforms
        including Facebook and Google."
        textClassName="py-10 w-[35rem]"
        Button1={
          <Button
            arrow
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <div className="rounded-full text-center w-[40vw] h-auto my-4">
            <img src="/assets/Automation_pic.svg" alt="" />
          </div>
        }
        direction={1}
      />
      <Section
        backgroundClassName="bg-tertiary-500 px-0  !justify-evenly"
        heading="DATA"
        subHeading="collection"
        headingClassName="text-secondary-500 font-jost text-[64px] font-extrabold"
        subHeadingClassName="text-primary-500 font-playfair-display font-bold text-[48px]"
        text="This technology is loaded with creative intelligence and owns the power
        of programmatic advertising to reach the right audience through correct
        placements, engaging adcopies, and focused targeting."
        textClassName="py-10 w-[35rem]"
        Button1={
          <Button
            arrow
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <div className="rounded-full text-center w-[40vw] h-auto my-4">
            <img src="/assets/Automation_pic.svg" alt="" />
          </div>
        }
        direction={-1}
      />
      <Section
        backgroundClassName="bg-tertiary-500 px-32 py-20"
        heading="BIG DATA"
        subHeading="optimization"
        headingClassName="text-secondary-500 font-jost text-[64px] font-extrabold"
        subHeadingClassName="text-primary-500 font-playfair-display font-bold text-[48px]"
        text="The in-house algorithm analyzes the CPA of the ads running within the
        campaign and progresses accordingly. It possesses the capabilities to
        pause the campaigns that have been consistently witnessing a low
        performance and can even assign appropriate budgets to the
        best-performing ads within the campaign."
        textClassName="py-10 w-[35rem]"
        Button1={
          <Button
            arrow
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <div className="rounded-full text-center w-[40vw] h-auto my-4">
            <img src="/assets/Automation_pic.svg" alt="" />
          </div>
        }
        direction={1}
      />
      {/* HELP CARD */}
      <div className="px-screen-padding py-16 h-full">
        
      <div className="rounded-[4rem] p-20 pb-16 bg-secondary-500 ">
          <Heading
            heading="WE'LL HELP YOU EXCEL"
            subHeading="with our technologies"
            subHeadingClassName="text-tertiary-500"
          />
          <Button className="bg-primary-500 mt-14" arrow>
            Learn More
          </Button>
        </div>
      </div>
      {/* ROCKET SECTION */}
      <div className="py-10">
        <Section
          backgroundClassName="bg-white px-32 py-20"
          heading="POUR ROCKET FUEL"
          middleLine="ON"
          middleLineClassName="text-[96px] text-primary-500"
          subHeading="your revenue"
          headingClassName="text-secondary-500 font-jost text-[64px] w-[100vw] font-extrabold"
          subHeadingClassName="text-secondary-500 font-playfair-display font-bold text-[56px]"
          text="Generate an impactful revenue with our company’s specific revenue objectives."
          textClassName="py-10 w-[35rem]"
          Button1={
            <Button
              arrow
              primary
              className="mt-4 text-secondary-500 bg-primary-500"
            >
              Get Started
            </Button>
          }
          illustration={
            <div className="rounded-full bg-white text-center w-96 h-72 my-4"></div>
          }
          direction={1}
        />
      </div>
      {/* EXPLORE BLOGS SECTION */}
      <div>
        <img
          src="/assets/wave2.svg"
          className="bg-tertiary-500 w-full"
          alt=""
        />
      </div>
      <div className="bg-tertiary-500">
        <ExploreBlog list={blogsList} />
      </div>
      <Wonder />
    </div>
  );
}

const blogsList = [
  {
    heading: "Some Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  },
  {
    heading: "Our Success Story",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  },
  {
    heading: "Say Hello to Our Team",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  },
  {
    heading: "Some Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  },
  {
    heading: "AR Media House's Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  },
];
