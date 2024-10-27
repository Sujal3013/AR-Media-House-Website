import {
  Button,
  Circle,
  CompaniesAnimate,
  ExploreBlog,
  FadeIn,
  FadeInUp,
  Heading,
  HeroSectionWrapper,
  Section,
  Wonder,
  Triangle,
  BlackSection,
  AnimateTextBackground,
} from "../components";
import AnimateIllustrationSection from "../components/AnimateIllustrationSection";

export default function Technologies() {
  document.querySelector("title").innerHTML = "Technologies - AR Media House";

  return (
    <>
      <HeroSectionWrapper className="flex flex-col gap-12 py-10 pb-2 md:pb-8 justify-between">
        <div className="flex">
          {/* text content right side */}
          <div className="flex-col w-[60vw] my-[0vh]">
            <Heading
              heading="BINDING TECHNOLOGY"
              subHeading="with marketing"
              subHeadingClassName="text-tertiary-500 text-[48xl]"
            />
            <FadeInUp downLength={10}>
              <p className="min-w-[172px] md:w-[38vw] md:min-w-0 text-sm my-16 mb-24">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum porro qui fugit officia aliquam illo temporibus quasi
                quaerat suscipit mollitia dicta perspiciatis voluptatum incidunt
                alias similique minus, accusantium minima! Id.
              </p>
            </FadeInUp>
            {/* Buttons */}
            <Button
              to="/contact"
              arrow
              className="bg-tertiary-500 text-secondary-500"
            >
              Let's Work Together
            </Button>
          </div>
          {/* illustraion */}
          <div className="hidden w-[38vw] min-w-80 md:block h-auto rounded">
            <img src="/assets/Technology_banner.svg" alt="" />
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-md sm:text-xl lg:text-2xl text-center font-bold font-jost text-slate-200 tracking-wider my-8">
            Technologies we Use
          </h1>
          {/* <div className="flex justify-center items-center relative overflow-hidden"> */}
          <CompaniesAnimate className="h-28 mb-2 md:mb-8 flex justify-center items-center gap-8 sm:gap-16 md:gap-20 lg:gap-24">
            {
              <>
                <li className="w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28">
                  <img
                    className="companies-image"
                    src="/assets/AWS.png"
                    alt="aws"
                  />
                </li>
                {/* 
                  <li className="h-12 sm:h-24 md:h-32">
                    <img className="w-full h-full" src="/assets/graphql.svg" alt="graph ql" />
                  </li> 
                */}
                <li className="w-20 h-20 sm:h-24 sm:w-24 md:h-28 md:w-32">
                  <img
                    className="companies-image"
                    src="/assets/react.png"
                    alt="react"
                  />
                </li>
                <li className="w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-32">
                  <img
                    className="companies-image"
                    src="/assets/Shopifylogo.png"
                    alt="Shopify"
                  />
                </li>
                <li className="w-20 h-20 sm:h-24 sm:w-24 md:w-32 md:h-28">
                  <img
                    className="companies-image"
                    src="/assets/Laravel_logo.png"
                    alt="Laravel"
                  />
                </li>
                <li className="w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28">
                  <img
                    className="companies-image"
                    src="/assets/wordpress.png"
                    alt="wordpress"
                  />
                </li>
                <li className="w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28">
                  <img
                    className="companies-image"
                    src="/assets/Pythonlogo.png"
                    alt="Python"
                  />
                </li>
              </>
            }
          </CompaniesAnimate>
          {/* </div> */}
        </div>

        {/* Shapes */}
        <Circle
          className="top-[3%] right-[15%] md:top-[0%] md:right-[48%]"
          secondary
        />
        <Circle
          className="top-[43%] left-[18%] md:top-[50%] md:right-[35%]"
          secondary
        />
        <Triangle
          className="top-[28%] right-[20%] md:top-[55%] md:left-[80%]"
          secondary
        />
      </HeroSectionWrapper>

      {/* PROCESS SECTION */}
      <Section
        backgroundClassName="bg-tertiary-500 py-10"
        heading="Empowering Brands"
        subHeading="with Next-Gen Tech Solutions"
        text="Custom websites tailored for modern brands—crafted with precision, creativity, and performance."
        textClassName="my-10"
        Button1={
          <Button
            to="/services"
            arrow
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <img
            src="/assets/AutomateMarketing.png"
            alt=""
            className="ImgResponsive h-auto w-[35vw]"
          />
        }
        direction={1}
        Shapes={
          <>
            <Circle className="top-[12%] right-[12%] md:top-[-10%] md:right-[6%]" />
            <Triangle className="bottom-4 left-[20%] md:bottom-0 md:left-[35%]" />
          </>
        }
      />
      <Section
        backgroundClassName="bg-tertiary-500 py-10"
        heading="Complete "
        subHeading="E-commerce solutions"
        text="Empower your online store with secure, scalable, and user-centric eCommerce platforms that drive growth."
        textClassName="py-10"
        Button1={
          <Button
            to="/services"
            arrow
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <img
            src="/assets/Data.png"
            alt="image"
            className="ImgResponsive h-auto"
          />
        }
        direction={-1}
        Shapes={
          <Triangle className="top-[32%] left-[18%] md:bottom-0 md:right-[10%]" />
        }
      />
      <Section
        backgroundClassName="bg-tertiary-500 py-10"
        heading="End-to-End"
        subHeading="software development"
        text="Transform ideas into powerful software solutions with our full-cycle development services for businesses of any scale."
        textClassName="my-10"
        Button1={
          <Button
            to="/services"
            arrow
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <img
            src="/assets/BigData.png"
            alt=""
            className="ImgResponsive h-auto"
          />
        }
        direction={1}
        Shapes={<Triangle className="bottom-[5%] left-[20%]" />}
      />

      {/* HELP CARD */}
      <BlackSection className="!pt-6">
        <Section
          backgroundClassName="!px-0"
          heading="We'll Help you"
          middleLine="Excel"
          middleLineClassName="text-primary-500"
          subHeading="with our technologies"
          subHeadingClassName="text-tertiary-500"
          allHeadingClassName="w-[80vw] mb-16"
          Button1={
            <Button
              to="/services"
              className="bg-tertiary-500 text-secondary-500"
              arrow
            >
              Learn More
            </Button>
          }
          illustration={
            <div className="hidden md:block rounded-full text-center w-[36vw] h-auto ">
              <img src="/assets/Excel.png" alt="" />
            </div>
          }
        />
        {/* Shapes */}
        <Circle
          className="top-0 left-[2%] md:bottom-[10%] md:left-[20%]"
          secondary
        />
        <Triangle className="hidden md:block top-[10%] left-[48%]" secondary />
      </BlackSection>

      {/* ROCKET SECTION */}
      {/* <section className="flex py-10 px-screen-padding relative">
        <div className="flex flex-col basis-[120%] gap-4">
          <Heading
            heading="Pour Rocket fuel"
            subHeading="on your revenue"
            headingClassName="mb-[-10px] text-primary-500"
          />
          <p className="text-sm sm:text-base">Generate an impactful revenue with our company’s specific revenue objectives.</p>
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
        </div> */}
      {/* 
        <div className="hidden md:block w-full relative">
            {
              pourRocketFuelPoints.map((item, index)=> 
              <FadeIn key={index} duration={1.5} when={index===currImage} className="absolute bottom-[-5%] right-0"> {item.illustration} </FadeIn>
              )
            }
        </div>
        <Circle className="top-[15%] right-[28%] md:top-[-15%] md:right-[30%]" />
      </section> */}

      <AnimateIllustrationSection
        heading="Pour Rocket fuel"
        subHeading="on your revenue"
        headingClassName="mb-[-10px] text-primary-500"
        text={
          "Generate an impactful revenue with our company’s specific revenue objectives."
        }
        list={pourRocketFuelPoints}
      />

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="wave-image"
      />

      {/* EXPLORE BLOGS SECTION */}
      <ExploreBlog list={blogsList} />

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
    illustration: <img src="./assets/3.png" alt="img" />,
  },
  {
    heading: "Robust",
    text: "A robust marketing strategy to help grow your business is what we aim at.",
    illustration: <img src="./assets/1.png" alt="img" />,
  },
  {
    heading: "Future Proof",
    text: "Connect with your audience in the best way possibleirrespective of the changes that occur in the marketplace.",
    illustration: <img src="./assets/FutureProof.png" alt="img" />,
  },
];
