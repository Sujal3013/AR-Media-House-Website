import React, { useEffect, useState } from "react";
import {
  Circle,
  CompaniesAnimate, 
  Heading,
  Button,
  HeroSectionWrapper,
  Section,
  ExploreBlog,
  Wonder,
  Triangle, 
  BlackSection,
  AnimateTextBackground,
  FadeIn,
} from "../components";

export default function Technologies() {
  document.querySelector("title").innerHTML = "Technologies - AR Media House";
  
  const [currImage, setCurrImage] = useState(0);
  useEffect(()=>{
    const id = setTimeout(()=>{
      setCurrImage((currImage + 1) % pourRocketFuelPoints.length)
    }, 5000)

    return ()=>{
      clearTimeout(id)
    }
  }, [currImage]);

  return (
    <>
      <HeroSectionWrapper className="flex flex-col gap-12 py-10 justify-between">
        <div className="flex">
          {/* text content right side */}
          <div className="flex-col w-[60vw] my-[0vh]">
            <Heading
              heading="BINDING TECHNOLOGY"
              headingClassName="text-[64px] text-primary-500"
              subHeading="with marketing"
              subHeadingClassName="text-tertiary-500 text-[48xl]"
            />
            <p className="my-16 mb-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum porro qui fugit officia aliquam illo temporibus quasi quaerat suscipit mollitia dicta perspiciatis voluptatum incidunt alias similique minus, accusantium minima! Id.</p>
            {/* Buttons */}
            <Button arrow className="bg-white text-secondary-500">
              Let's Work Together
            </Button>
          </div>
          {/* illustraion */}
          <div  className="w-auto h-auto rounded pb-12">
            <img src="/assets/Technology_banner.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="font-semibold text-2xl text-tertiary-500 tracking-wider my-8">Technologies we Use</h1>
          <div className="w-[98vw] h-28 mb-8 flex justify-center items-center relative overflow-hidden">
          <CompaniesAnimate className="flex justify-start items-center gap-24" length={7}>
            {
              <>
                <li><img className="w-40 h-auto" src="/assets/AWS.png" alt="aws" /></li>
                <li><img className="w-auto h-32" src="/assets/graphql.svg" alt="graph ql" /></li>
                <li><img className="w-auto h-32" src="/assets/react.svg" alt="react" /></li>
                <li><img className="w-48 h-12" src="/assets/kafka.png" alt="kafta" /></li>
                <li><img className="w-44 h-auto" src="/assets/kubernetes.png" alt="kubernetes" /></li>
                <li><img src="/assets/lookfinity.png" alt="lookfinity" /></li>
                <li><img className="w-64 h-auto" src="/assets/clickHouse.png" alt="click house" /></li>
              </>
            }
          </CompaniesAnimate>
          </div>
        </div>

        {/* Shapes */}
        <Circle className="top-[10%] right-[48%]" secondary />
        <Circle className="top-[50%] right-[35%]" secondary />
        <Triangle className="top-[35%] left-[20%]" secondary />
      </HeroSectionWrapper>
      {/* Tech-stack section */}
      {/* <div className="flex-col justify-evenly px-screen-padding py-20 bg-[url('/assets/wave1.svg')] bg-no-repeat bg-contain bg-bottom">
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
        <motion.div 

          className="flex justify-between my-6"
        >
          <img src="/assets/AWS.png" alt="" />
          <img src="/assets/graphql.png" alt="" />
          <img src="/assets/react.png" alt="" />
          <img src="/assets/kafka.png" alt="" />
          <img src="/assets/kubernetes.png" alt="" />
          <img src="/assets/clickHouse.png" alt="" />
        </motion.div>
      </div> */}

      {/* PROCESS SECTION */}
      <Section
        backgroundClassName="bg-tertiary-500 px-32 py-1 pt-8"
        heading="AUTOMATION MARKETING"
        subHeading="platform"
        headingClassName="text-primary-500"
        subHeadingClassName="text-secondary-500"
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
          <div className="text-center w-[40vw] h-auto my-4">
            <img src="/assets/What_makes_us.png" alt="" />
          </div>
        }
        direction={1}
        Shapes={
          <>
            <Circle className="top-[-10%] right-[6%]" />
            <Triangle className="bottom-0 left-[35%]" />
          </>
        }
      />
      <Section
        backgroundClassName="bg-tertiary-500 px-0 !justify-evenly"
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
            <img src="/assets/What_makes_us.png" alt="image" />
          </div>
        }
        direction={-1}
        Shapes={
          <Triangle className="bottom-0 right-[10%]" />
        }
      />
      <Section
        backgroundClassName="bg-tertiary-500"
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
            <img src="/assets/What_makes_us.png" alt="" />
          </div>
        }
        direction={1}
        Shapes={
          <Triangle className="bottom-[5%] left-[20%]" />
        }
      />

      {/* HELP CARD */}
      <BlackSection>
        <Section
          backgroundClassName="!px-0"
          heading="We'll Help you"
          middleLine="Excel"
          middleLineClassName="text-primary-500"
          subHeading="with our technologies"
          subHeadingClassName="text-tertiary-500"
          allHeadingClassName="w-[80vw] mb-16"
          Button1={<Button className="bg-tertiary-500 text-secondary-500" arrow>Learn More</Button>}
          illustration={          
            <div className="rounded-full text-center w-[36vw] h-auto ">
              <img src="/assets/What_makes_us.png" alt="" />
            </div>
          }
        />
        {/* Shapes */}
        <Circle className="bottom-[10%] left-[20%]" secondary/>
        <Triangle className="top-[10%] left-[48%]" secondary/>
      </BlackSection>

      {/* ROCKET SECTION */}
      <section className="flex py-10 px-screen-padding relative">
        <div className="flex flex-col basis-[120%] gap-4">
          <Heading
            heading="Pour Rocket fuel"
            subHeading="on your revenue"
            headingClassName="mb-[-10px] text-primary-500"
          />
          <p>Generate an impactful revenue with our company’s specific revenue objectives.</p>
          <div className="flex flex-col">
            {
              pourRocketFuelPoints.map((item, index)=>{
                return (
                  <AnimateTextBackground
                    className="!w-[80%]"
                    heading={item.heading}
                    text={item.text}
                    key={index}
                    focus={index===currImage}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="w-full relative">
            {
              pourRocketFuelPoints.map((item, index)=> 
                <FadeIn duration={1.5} when={index===currImage} className="absolute bottom-[-5%] right-0"> {item.illustration} </FadeIn>
              )
            }
        </div>
        {/* Shapes */}
        <Circle className="top-[-15%] right-[30%]" />
      </section>

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="w-full"
      />

      {/* EXPLORE BLOGS SECTION */}
      <ExploreBlog list={blogsList}/>

      <Wonder />
    </>
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

const pourRocketFuelPoints = [
  {
    heading: "Open Source",
    text: "Provides better stability, security, and a proper functionality to have control over your brand with ease.",
    illustration: <img src="./assets/3.png" alt="img" />
  },
  {
    heading: "Robust",
    text: "A robust marketing strategy to help grow your business is what we aim at.", 
    illustration: <img src="./assets/1.png" alt="img" />,
  },
  {
    heading: "Future Proof",
    text: "Connect with your audience in the best way possibleirrespective of the changes that occur in the marketplace.",
    illustration: <img src="./assets/Growth_curve.svg" alt="img" />, 
  },
]