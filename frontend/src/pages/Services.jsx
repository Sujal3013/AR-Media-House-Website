import {} from "react";
import {
  Button,
  Heading,
  HeroSectionWrapper,
  Wonder,
  ExploreBlog,
} from "../components";
import classNames from "classnames";

function CardSection2({
  blobSrc,
  iconSrc,
  title,
  text,
  titleClassNames,
  textClassNames,
}) {
  const wraperClass = classNames(
    "flex flex-col items-center",
    "text-center",
    "min-h-60",
    `bg-no-repeat bg-center bg-55% bg-top`
  );

  const titleClass = classNames(
    "text-2xl text-primary-500 font-black mb-3",
    titleClassNames
  );
  const textClass = classNames("max-w-96 mt-6 text-sm", textClassNames);

  return (
    <div className={wraperClass} style={{ backgroundImage: `url(${blobSrc})` }}>
      <img className="size-24 my-4" src={iconSrc} alt="icon" />
      <h1 className={titleClass}>{title}</h1>
      <p className={textClass}>{text}</p>
    </div>
  );
}

export default function Services() {
  document.querySelector("title").innerHTML = "Services - AR Media House";
  return (
    <>
      <HeroSectionWrapper className="flex py-6 flex-col gap-4 items-center justify-between">
        <div className="w-full flex justify-between items-center">
          {/* text content right side */}
          <div className="w-[45vw] my-4">
            <Heading
              heading="Multi-Channel"
              subHeading="digital advertising experts"
              headingClassName="text-[64px] text-primary-500"
              subHeadingClassName="text-tertiary-500"
            />
            <p className="text-sm my-12 w-[30vw]">
              Identification of ideal prospects through a potent advertising
              approach. Gathering highly qualified prospects to boost brand
              engagement. Turning prospects into high-quality leads and sales.
            </p>
            {/* Buttons */}
            <div className="flex gap-6 py-10">
              <Button arrow className="bg-primary-500 text-secondary-500">
                Let's Connect
              </Button>
            </div>
          </div>
          {/* illustraion */}
          <div className="w-auto h-auto rounded">
            <img src="/assets/Services.svg" alt="" />
          </div>
        </div>
      </HeroSectionWrapper>

      <section>
        <div className="flex justify-center text-center my-8">
          <Heading heading="we've got tricks" subHeading="up our sleeves." />
        </div>
        <div className="flex justify-center">
          <CardSection2 {...section2CardList[0]} />
        </div>
        <div className="flex justify-evenly items-center">
          <CardSection2 {...section2CardList[1]} />
          <Button className="bg-primary-500">Get Started</Button>
          <CardSection2 {...section2CardList[2]} />
        </div>
        <div className="flex justify-center mb-4">
          <CardSection2 {...section2CardList[3]} />
        </div>
      </section>

      <img src="./assets/wave1.svg" alt="wave" />

      <section className="bg-tertiary-500 py-4 px-24">
        <Heading
          heading="YOUR BRAND"
          subHeading="our focus"
          className="text-center my-4"
        />
        <div className="flex justify-between">
          <CardSection2
            {...section3CardList[0]}
            textClassNames="max-w-80"
            titleClassNames="max-w-52 pt-16"
          />
          <CardSection2
            {...section3CardList[1]}
            textClassNames="max-w-80"
            titleClassNames="max-w-52 pt-16"
          />
          <CardSection2
            {...section3CardList[2]}
            textClassNames="max-w-80"
            titleClassNames="max-w-52 pt-16"
          />
        </div>

        <div className="rounded-[4rem] my-16 p-20 pb-16 bg-secondary-500">
          <Heading
            heading="WE MAKE YOUR SALES GO"
            subHeading="through the roof"
            subHeadingClassName="text-tertiary-500"
          />
          <Button className="bg-primary-500 mt-14" arrow>
            Learn More
          </Button>
        </div>

        <div className="flex items-center justify-between py-8">
          <Heading
            heading="Platform"
            headingClassName="text-[64px] text-primary-500"
            subHeading="to help you"
            subHeadingClassName="text-[64px]"
          />
          <div className="grid bg-slate-50 p-8 grid-cols-4 gap-16 justify-start">
            {platforms.map((el) => (
              <img src={el.imgSrc} alt={el.alt} className="w-32" />
            ))}
          </div>
        </div>
      </section>

      <img
        src="./assets/wave12.svg"
        alt="wave"
        className="bg-tertiary-500 text-white w-full"
      />

      <section className=" flex items-center justify-between px-screen-padding py-12">
        <Heading
          heading="Numbers"
          headingClassName="text-[64px] text-primary-500"
          subHeading="don't"
          subHeadingClassName="text-[64px]"
        />
        <Heading heading="$33,981,171" headingClassName="py-2 text-[64px] text-secondary-500" subHeading="Ad Spend
Last 12 months" subHeadingClassName="text-[24px] font-jost font-normal w-[15rem] mx-auto text-center" />
        <Heading heading="5,747,646" headingClassName="text-[64px] py-2 text-secondary-500" subHeading="Lead Generated Last 12 months" subHeadingClassName="text-[24px] font-jost font-normal w-[12rem] mx-auto text-center" />
      </section>
      <img
        src="./assets/wave12.svg"
        alt="wave"
        className="bg-tertiary-500 text-white w-full rotate-180"
      />
      <section className="bg-tertiary-500">
        <ExploreBlog list={blogsList} />
      </section>
      <Wonder />
    </>
  );
}

function Section3() {
  return;
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

const section2CardList = [
  {
    title: "Paid Social",
    text: "Maintain and expand brand awareness through effective online marketing strategies across all platforms",
    blobSrc: "./assets/services-blob-1.svg",
    iconSrc: "./assets/services-icon-2-1.svg",
  },
  {
    title: "Native Advertising",
    text: "Meet all the expectations of your audience and add valueto your brand by creating an influential connection with the advertiser.",
    blobSrc: "./assets/services-blob-1.svg",
    iconSrc: "./assets/services-icon-2-4.svg",
  },
  {
    title: "Paid Search & Display",
    text: "Reach your target audience proactively across the web and get the right strategy and campaign set-up for your brand.",
    blobSrc: "./assets/services-blob-1.svg",
    iconSrc: "./assets/services-icon-2-2.svg",
  },
  {
    title: "Conversion Rate Optimization",
    text: "Understand your key audience, make a better user experience and get the most out of your acquisition efforts.",
    blobSrc: "./assets/services-blob-1.svg",
    iconSrc: "./assets/services-icon-2-3.svg",
  },
];
const section3CardList = [
  {
    title: "Reach your desired audience",
    text: "Expect guaranteed results in both growth and performance improvement from our side.",
    blobSrc: "./assets/services-blob-2.svg",
    iconSrc: "./assets/services-3-1.svg",
  },
  {
    title: "Navigate the digital stream",
    text: "We're always there to turn up the volume and drive more sales to render our clients with ideal results.",
    blobSrc: "./assets/services-blob-2.svg",
    iconSrc: "./assets/services-3-2.svg",
  },
  {
    title: "Tailor-made solutions",
    text: "We believe in developing a plan to increase sales while improving the lifetime value of your customers.",
    blobSrc: "./assets/services-blob-2.svg",
    iconSrc: "./assets/services-3-3.svg",
  },
];

const platforms = [
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
  {
    imgSrc: "./assets/YouTube_Logo+text.svg",
    alt: "Youtube",
  },
];
