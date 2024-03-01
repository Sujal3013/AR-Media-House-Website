import {} from "react";
import {
  Button,
  CompaniesAnimate, 
  Heading,
  HeroSectionWrapper,
  Wonder,
  ExploreBlog,
  Circle,
  Triangle,
  AnimateNumber,
  ServicesSec2,
  FadeInUp
} from "../components";
import classNames from "classnames";

function Card({
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
    "max-w-64 lg:max-w-80",
    `bg-no-repeat bg-center bg-55% bg-top`
  );

  const titleClass = classNames(
    "text-xl sm:text-2xl text-primary-500 font-black mb-3",
    titleClassNames
  );
  const textClass = classNames(
    "max-w-96 mt-2 md:mt-6 text-xs sm:text-sm",
    textClassNames
  );

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
      <HeroSectionWrapper
        className="flex py-6 gap-4 items-center justify-between !overflow-visible"
        whiteWaveBackground
      >
          {/* text content right side */}
          <div className="w-auto my-8">
            <Heading
              heading="Multi-Channel"
              subHeading="digital advertising experts"
              subHeadingClassName="text-tertiary-500"
            />
            <FadeInUp downLength={10} className="min-w-[172px] md:w-[35vw] md:min-w-0 text-sm my-12">
              Identification of ideal prospects through a potent advertising
              approach. Gathering highly qualified prospects to boost brand
              engagement. Turning prospects into high-quality leads and sales.
            </FadeInUp>
            {/* Buttons */}
            <div className="flex gap-6 py-10">
              <Button to="/contact" arrow className="bg-primary-500 text-secondary-500">
                Let's Connect
              </Button>
            </div>
          </div>
          {/* illustraion */}
          <div className="hidden w-[38vw] min-w-80 md:block h-auto rounded">
            <img src="/assets/Services.svg" alt="" />
          </div>

        {/* Shapes */}
        <Circle secondary className="top-[20%] sm:top-[10%] right-[5%]" />
        <Triangle secondary className="top-[4%] sm:top-[-4%] left-[5%]" />
        <Triangle secondary className="bottom-[8%] sm:bottom-[0%] left-[45%]" />
      </HeroSectionWrapper>

      <ServicesSec2 Card={Card} list={section2CardList} />

      <img src="./assets/triple-wave-white-1.svg" alt="wave" className="w-full"/>

      <section className="bg-tertiary-500 py-4 px-screen-padding relative">
        <Heading
          heading="YOUR BRAND"
          subHeading="our focus"
          className="text-center my-6 w-full items-center"
        />
        <div className="flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-y-12 py-6">
          {section3CardList.map((el, ind) => (
            <Card
              {...el}
              key={ind}
              textClassNames="max-w-80"
              titleClassNames="max-w-52 pt-4 md:pt-16"
            />
          ))}
        </div>
        {/* Shapes */}
        <Circle className="top-[-5%] right-[5%]" />
      </section>

      <section className="bg-tertiary-500 py-4 sm:px-screen-padding relative">
        
          <div className="sm:rounded-[3rem] md:rounded-[4rem] my-8 sm:my-12 md:my-16 py-12 md:py-16 px-screen-padding bg-secondary-500">
            <Heading
              heading="WE MAKE YOUR SALES GO"
              subHeading="through the roof"
              subHeadingClassName="text-tertiary-500"
            />
            <Button tp="/about" className="bg-primary-500 mt-14" arrow>
              Learn More
            </Button>
          </div>
      </section>

      <section className="bg-tertiary-500 py-4 px-screen-padding flex flex-col flex-wrap md:flex-nowrap md:flex-col justify-center md:justify-between items-center pt-4 pb-8">
        <Heading heading="Platform" subHeading="to help you" className="w-full items-center" />
        
        <div className="mt-12 w-full h-[120px] relative">
          <CompaniesAnimate className="flex justify-center items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24" length={platforms.length}>
            {
              platforms.map((p, index)=>{
                let listClassName = "h-full flex flex-col items-center justify-between"
                return (
                  <li key={index} className={listClassName}>
                    <img src={p.imgSrc} alt={p.alt} className={p.className} />
                    { 
                      p.alt && 
                      <p className="whitespace-nowrap font-bold text-xl md:text-3xl">
                        {p.alt}
                      </p>
                    }
                  </li>
                )
              })
            }
          </CompaniesAnimate>
        </div>
      </section>

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="w-full rotate-180"
      />

      <section className="flex flex-col md:flex-row justify-between items-center px-screen-padding py-12 gap-4">
        <Heading
          heading="Numbers"
          subHeading="don't lie"
          className="items-center"
        />
        <div className="text-center w-fit text-secondary-500 font-bold">
          <div className="text-xl sm:text-3xl lg:text-5xl">
            $
            <AnimateNumber
              className="inline"
              from={0}
              to={1500000}
              duration={2.5}
            />
          </div>
          <h1 className="text-center font-bold text-sm sm:text-base lg:text-xl">
            Ad Spend Last 12 months
          </h1>
        </div>
        <div className="text-center w-fit text-secondary-500 font-bold">
          <div className="text-xl sm:text-3xl lg:text-5xl">
            <AnimateNumber from={0} to={189781} duration={2.5} />
          </div>
          <h1 className="text-center font-bold text-sm sm:text-base lg:text-xl">
            Lead Generated Last 12 months
          </h1>
        </div>
      </section>

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="bg-white w-full"
      />

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

const section2CardList = [
  {
    title: "Paid Social",
    text: "Maintain and expand brand awareness through effective online marketing strategies across all platforms",
    blobSrc: "./assets/services-blob-1.svg",
    iconSrc: "./assets/services-icon-2-1.svg",
  },
  {
    title: "Native advertising",
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
    imgSrc: "./assets/youtube-black.svg",
    alt: "Youtube",
    className: "logo-image",
  },
  {
    imgSrc: "./assets/facebook-black.svg",
    alt: "facebook",
    className: "logo-image",
  },
  {
    imgSrc: "./assets/snapchat-black.svg",
    alt: "Snapchat",
    className: "logo-image",
  },
  {
    imgSrc: "./assets/tiktok-black.svg",
    alt: "tiktok",
    className: "logo-image w-16 h-16",
  },
  {
    imgSrc: "./assets/instagram-black.svg",
    alt: "Instagram",
    className: "logo-image",
  },
  {
    imgSrc: "./assets/twitter-black.svg",
    alt: "twitter",
    className: "logo-image w-16 h-16 md:w-20 md:h-20",
  },
  {
    imgSrc: "./assets/google-ads-black.svg",
    alt: "google ads",
    className: "logo-image",
  },
  {
    imgSrc: "./assets/taboola-black.svg",
    alt: "taboola",
    className: "logo-image",
  },
];