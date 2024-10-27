import {
  Button,
  Circle,
  CompaniesAnimate,
  ClientCards,
  ExploreBlog,
  Heading,
  HeroSectionWrapper,
  RoundedCornersSection,
  Section,
  ServicesCards,
  Triangle,
  Wonder,
  BlackSection,
  FadeInUp,
  HomePage3StepPath,
} from "../components";

const SECTION5_HEADING_CLASS =
  "!text-3xl sm:!text-4xl lg:!text-5xl text-secondary-500";
const SECTION5_SUB_HEADING_CLASS =
  "!text-3xl sm:!text-4xl lg:!text-5xl pl-1 mt-[-8px] text-primary-500";
const SECTION5_ALL_HEADING_CLASS = "mt-16 mb-4 sm:mb-6 md:mb-12";
const SECTION5_TEXT_CLASS = "mb-8 md:mb-12 lg:mb-16";

export default function Home() {
  document.querySelector("title").innerHTML = "AR Media House";
  return (
    <>
      <HeroSectionWrapper className="flex py-2 md:py-6 flex-col gap-4 items-center justify-between relative">
        <div className="w-full flex justify-between items-center">
          {/* text content right side */}
          <div className="w-auto my-8">
            <Heading
              heading="Digital Marketing"
              subHeading="that drives result"
              subHeadingClassName="text-tertiary-500"
            />
            <FadeInUp downLength={10}>
              <p className="min-w-[172px] md:w-[35vw] md:min-w-0 text-sm my-12">
                AR Media House works with reputable global brands to deliver
                data-driven lead generation, customer acquisition, and brand
                awareness campaigns through various digital spaces.
              </p>
            </FadeInUp>
            {/* Buttons */}
            <div className="flex gap-6 py-10">
              <Button
                arrow
                className="bg-primary-500 text-secondary-500"
                to="/contact"
              >
                Let's Connect
              </Button>
              <Button
                to="/about"
                className="bg-transparent border-2 border-primary-500 text-primary-500"
              >
                About Us
              </Button>
            </div>
          </div>
          {/* illustraion */}
          <div className="hidden w-[38vw] min-w-80 md:block h-auto rounded">
            <img src="/assets/Banner1.svg" alt="" />
          </div>
        </div>

        {/* Companies */}
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-md sm:text-xl lg:text-2xl text-center font-bold font-jost text-slate-200 tracking-wider my-8">
            Trusted by <span className="text-primary-500">thousands</span> of
            client worldwide
          </h1>
          <CompaniesAnimate
            widthComapreToScreen={2}
            className="h-32 flex justify-center items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24"
          >
            {companiesLogos.map((c, index) => {
              return (
                <li
                  key={index}
                  className={
                    c.className || "w-20 h-20 sm:h-24 sm:w-24 md:w-28 md:h-28"
                  }
                >
                  <img
                    src={c.src}
                    alt="company-image"
                    className="companies-image"
                  />
                </li>
              );
            })}
          </CompaniesAnimate>
        </div>

        {/* Shapes */}
        <Circle
          className="top-[30%] sm:top-[35%] md:top-[4%] right-[2%]"
          secondary
        />
        <Circle className="top-[50%] left-[25%]" secondary />
        <Triangle className="top-[-4%] left-[20%]" secondary />
        <Triangle
          className="bottom-[-8%] right-[10%]"
          secondary
          duration={10}
        />
      </HeroSectionWrapper>

      <Section
        backgroundClassName="bg-tertiary-500 py-10"
        heading="What Make Us"
        subHeading="different"
        text="We make digital stuff easy for you by finding the perfect solutions. Our goal is to go above and beyond what you expect and what's considered normal. At AR Media, we use online marketing to help Indian and international brands grow a lot. We want to bring that same success to you, showing you how it’s done."
        textClassName="my-10"
        Button1={
          <Button
            arrow
            to="/services"
            primary
            className="mt-4 text-secondary-500 bg-primary-500"
          >
            Learn More
          </Button>
        }
        illustration={
          <img
            src="/assets/What_makes_us.png"
            alt=""
            className="ImgResponsive h-auto w-[35vw]"
          />
        }
        direction={-1}
        Shapes={
          <>
            <Circle className="top-[4%] right-8 md:left-[-2%]" />
            <Circle className="top-[56%] right-[8%]" />
          </>
        }
      />

      <Section
        backgroundClassName="bg-tertiary-500 py-10"
        heading="We SkyRocket"
        subHeading="brand's growth"
        text="We have contributed to the growth of startups of nearly every size,
        vertical, and horizontal business models. We know what it takes to 
        help brands grow from one stage to the next."
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
            src="/assets/Growth_curve.svg"
            alt=""
            className="ImgResponsive w-[30vw]"
          />
        }
        Shapes={
          <Triangle className="top-[26%] left-[69%] md:top-[70%] md:left-[25%]" />
        }
      />

      <BlackSection className="flex flex-col gap-4 py-4 items-center relative">
        <Heading
          heading="We have Got"
          headingClassName="text-primary-500 text-center"
          subHeading="a lot to offer"
          subHeadingClassName="text-tertiary-500"
          className="items-center"
        />

        <Services />
      </BlackSection>

      <Section
        backgroundClassName="py-8 !items-start"
        heading="We Make Your Sales"
        headingClassName="text-black !w-[60vw]"
        middleLine="GO"
        middleLineClassName="text-primary-500 my-[-4px]"
        subHeading="through the roof"
        allHeadingClassName="mb-6 sm:mb-12 !w-[40vw] !overflow-visible"
        Button1={
          <Button
            to="/contact"
            className="bg-primary-500 text-secondary-500 mt-3 md:mt-6 mb-6 sm:mb-8 md:mb-12"
            arrow
          >
            Let's Connect
          </Button>
        }
        illustration={
          <img
            src="/assets/GO_image.svg"
            alt=""
            className="!w-[80vw] md:!w-[45vw]"
          />
        }
        Shapes={
          <Circle className="top-[20%] left-[69%] md:top-[56%] md:left-[30%]" />
        }
      />

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="wave-image"
      />

      <section className="bg-tertiary-500 py-8 relative">
        <Heading
          className="w-full items-center pb-2"
          heading="3-easy step"
          headingClassName="text-center text-primary-500"
          subHeading="our growth"
          subHeadingClassName="text-center"
        />

        <div className="relative">
          {" "}
          {/*  1-2-3-path wrapper */}
          <HomePage3StepPath className="hidden lg:block absolute z-10 top-24 xl:top-36 left-[49%] translate-x-[-60%]" />
          <Section
            backgroundClassName="bg-tertiary-500 py-4"
            heading="Diagnosis & Strategy"
            headingClassName={SECTION5_HEADING_CLASS}
            subHeadingClassName={SECTION5_SUB_HEADING_CLASS}
            subHeading="planning"
            allHeadingClassName={SECTION5_ALL_HEADING_CLASS}
            text="Analyzing audience online behavior and tendencies to convert and
          strategize actions for maximum revenue."
            textClassName={SECTION5_TEXT_CLASS}
            illustration={
              <div className="rounded-full text-center w-auto h-auto">
                <img src="/assets/Diagnosis.svg" alt="" className="" />
              </div>
            }
            direction={-1}
          />
          <Section
            backgroundClassName="bg-tertiary-500"
            heading="Digital Foundations"
            headingClassName={SECTION5_HEADING_CLASS}
            subHeadingClassName={SECTION5_SUB_HEADING_CLASS}
            subHeading="test phase"
            allHeadingClassName={SECTION5_ALL_HEADING_CLASS}
            text="Testing multiple creatives with varied target audience settings
          and narrowing down best-performing creatives based on data
          driven strategy."
            textClassName={SECTION5_TEXT_CLASS}
            illustration={
              <div className="rounded-full text-center w-auto h-auto">
                <img src="/assets/digitalFoundations.svg" alt="" className="" />
              </div>
            }
          />
          <Section
            backgroundClassName="bg-tertiary-500 py-4 pb-20"
            heading="Verify Benchmarks"
            headingClassName={SECTION5_HEADING_CLASS}
            subHeadingClassName={SECTION5_SUB_HEADING_CLASS}
            subHeading="scale phase"
            allHeadingClassName={SECTION5_ALL_HEADING_CLASS}
            text="Using in-house technology to create AI-driven strategies and increase the frequency,
          targeting, and budget for the best performing ads in order to improve revenue
          and profit."
            textClassName={SECTION5_TEXT_CLASS}
            illustration={
              <img
                src="/assets/Benchmark.svg"
                alt="benchmark-image"
                className=""
              />
            }
            direction={-1}
          />
        </div>
      </section>

      <RoundedCornersSection
        className="bg-secondary-500 relative px-screen-padding pb-28"
        behindBackground="bg-tertiary-500"
        bothRounded={true}
      >
        <Heading
          heading="Our Client"
          subHeading="loves us"
          headingClassName="text-primary-500"
          subHeadingClassName="text-tertiary-500 mt-[-4px]"
          className="w-full items-center py-8 pt-12"
        />

        <ul className="relative flex flex-col md:flex-row items-center gap-4 justify-between py-4 mb-6">
          {clients.map((c, index) => {
            return <ClientCards key={index} index={index} {...c} />;
          })}
        </ul>
      </RoundedCornersSection>

      <ExploreBlog />

      <Wonder />
    </>
  );
}

function Services() {
  return (
    <div>
      {/*for large screen*/}
      <div className="hidden md:block flex flex-col items-center gap-8 md:pb-24">
        <ul className="w-full flex justify-between gap-[3vw] lg:gap-[6vw] py-8 relative">
          {services.slice(0, 4).map((s, index) => (
            <ServicesCards key={index} {...s} />
          ))}
        </ul>
        <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-center relative mb-4">
          {services.slice(4).map((s, index) => {
            return <ServicesCards key={index} {...s} />;
          })}
        </ul>
      </div>

      {/*For middium screens*/}
      <div className="hidden sm:block md:hidden flex flex-col items-center gap-8">
        <ul className="w-full flex justify-evenly gap-[3vw] lg:gap-[6vw] py-8 relative">
          {services.slice(0, 2).map((s, index) => (
            <ServicesCards key={index} {...s} />
          ))}
        </ul>
        <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-evenly relative mb-4">
          {services.slice(2, 4).map((s, index) => {
            return <ServicesCards key={index} {...s} />;
          })}
        </ul>
        <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-evenly relative mb-4">
          {services.slice(4, 6).map((s, index) => {
            return <ServicesCards key={index} {...s} />;
          })}
        </ul>
        <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-evenly relative mb-4">
          {services.slice(6).map((s, index) => {
            return <ServicesCards key={index} {...s} />;
          })}
        </ul>
      </div>

      {/*For small screens*/}
      <div className="sm:hidden flex flex-col items-center gap-8">
        <ul className="w-full flex flex-col gap-[3vw] py-8 items-center">
          {services.map((s, index) => (
            <ServicesCards key={index} {...s} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const logoicon1 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/Ecommercelogo.png" alt="" />
  </div>
);
const logoicon2 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/Performancelogo.png" alt="" />
  </div>
);
const logoicon3 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/Leadgenerationlogo.png" alt="" />
  </div>
);
const logoicon4 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/MediaBuying.png" alt="" />
  </div>
);
const logoicon5 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/Martechlogo.png" alt="" />
  </div>
);
const logoicon6 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/ContentMarketinglogo.png" alt="" />
  </div>
);
const logoicon7 = (
  <div className="h-32 w-32 rounded-3xl">
    <img src="./assets/webdevlogo.svg" alt="" />
  </div>
);

const services = [
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon1,
    heading: "E-commerce",
    text: "Elevating your online store for greater success by innovative outbound strategies to drive more sales and traffic for your brand.",
  },
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon2,
    heading: "Performance Marketing",
    text: "Experts in driving online results through strategic ads. We boost online outcomes with strategic ad tactics.",
  },
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon3,
    heading: "Lead Generation",
    text: "Convert your prospects into delighted clients solely meant for your business.",
  },
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon4,
    heading: "Media Buying",
    text: "Maximising visibility and impact through online ads.",
  },
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon5,
    heading: "Martech",
    text: "Leveraging cutting-edge tech for marketing success. Using tech to drive marketing triumph.",
  },
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon6,
    heading: "Content Marketing",
    text: "Crafting compelling content for your brand's story. We create engaging brand stories.",
  },
  {
    className:
      "md:first:relative md:first:top-32 md:last:relative md:last:top-32",
    icon: logoicon7,
    heading: "Web Development",
    text: "Building platforms that captivate and convert. Creating captivating converting platforms.",
  },
];

const clients = [
  {
    icon: "/assets/Client1.jpeg",
    heading: "Rohit",
    subHeading: "Insta Transfer",
    text: "Partnering with AR Media House proved to be a game-changer for our brand, propelling us to unprecedented success with their innovative strategies and expert team, resulting in a remarkable 10-12X increase in sales and an impressive 50% ROI. We wholeheartedly recommend them for their exceptional track record of delivering transformative results that exceed expectations.",
    className: "first:relative md:first:top-16 last:relative md:last:top-16",
  },
  {
    icon: "/assets/client3.jpg",
    heading: "Lokendra",
    subHeading: "Lokmain Technologies",
    text: "I’ve experienced working directly with AR Media House Inc, in the marketing space for many years, and they have been very successful as a multiple channel advertiser — driving thousands of leads and sales to our offers over the years. Some of their most successful sources have been Native and social media (Facebook) marketing. It’s been great to see them build infrastructures and teams to successfully tackle multiple verticals using these media sources.",
    className: "first:relative md:first:top-16 last:relative md:last:top-16",
  },
  {
    icon: "/assets/client2.jpeg",
    heading: "Billy",
    subHeading: "EdTech & Ecommerce Brand",
    text: "Discovering AR Media House was a serendipitous breakthrough! Within a mere 5-6 months, their extraordinary efforts have ingeniously constructed our Direct-to-Consumer (D2C) brand from the very foundation. Presently, we flourish expansively, both in the digital realm and offline, with an astonishing 70% of our online operations streamlined and automated. The unparalleled prowess and expertise exhibited by their team are truly unmatched.",
    className: "first:relative md:first:top-16 last:relative md:last:top-16",
  },
];

const companiesLogos = [
  {
    src: "./assets/angelOnewhite.png",
    alt: "Angelone",
  },
  {
    src: "./assets/arunika.png",
    alt: "Arunika",
    className: "w-24 h-20 sm:h-24 sm:w-28 md:w-32 md:h-28",
  },
  {
    src: "./assets/gamezywhite.png",
    alt: "Gamezy",
    className: "w-24 h-20 sm:h-24 sm:w-28 md:w-32 md:h-28",
  },
  {
    src: "./assets/instaTransferwhite.png",
    alt: "Instatransfer",
    className: "w-24 h-20 sm:h-24 sm:w-28 md:w-32 md:h-28",
  },
  {
    src: "./assets/marutisuzukiwhite.png",
    alt: "MarutiSuzuki",
  },
  {
    src: "./assets/nmimswhite.png",
    alt: "NMIMS",
    className: "w-16 h-12 sm:h-16 sm:w-20 md:w-24 md:h-24",
  },
  {
    src: "./assets/silaiwhite.png",
    alt: "Silai",
  },
  {
    src: "./assets/Sparklesislogo.png",
    alt: "Sparklesis",
  },
  {
    src: "./assets/Elkologo.png",
    alt: "Elko",
  },
  {
    src: "./assets/shikshawhite.png",
    alt: "Shiksha",
  },
  {
    src: "./assets/manipalmedacewhite.png",
    alt: "ManipalMedace",
  },
];
