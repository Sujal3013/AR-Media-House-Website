import React, { useEffect, useState } from "react";
import classNames from "classnames";
import {
  Button,
  Heading,
  StoryComponent,
  Section,
  Wonder,
  BlackSection,
  HeroSectionWrapper,
  Circle,
  Triangle,
  ExploreBlog,
  RoundedCornersSection,
} from "../components";
import Youtube from "react-youtube";
import { useWinSizeContext } from "../context/winSizeContext";
import Carousel from "../components/Carousel";
import RoundedFullCard from "../components/RoundedFullCard";
import AnimateIllustrationSection from "../components/AnimateIllustrationSection";

const VIDEO_ID = "_qh5PXngdNY";
const OPTS = {
  height: "350",
  width: "575",
  playerVars: {
    autoplay: 0,
  },
};

const ILLUSTRATION_CLASS =
  "max-w-[465px] rounded-full text-center basis-1/2 h-auto";

export default function About() {
  document.querySelector("title").innerHTML = "About - AR Media House";
  const { winSize, BR_1, BR_2, BR_3 } = useWinSizeContext();

  if (winSize <= BR_1) {
    OPTS.height *= 0.7;
    OPTS.width *= 0.7;
  } else if (winSize < BR_2) {
    OPTS.height *= 0.9;
    OPTS.width *= 0.9;
  }

  return (
    <>
      <HeroSectionWrapper className="!mb-0 pt-10" whiteWaveBackground>
        <Heading
          heading="Get To Know"
          headingClassName="text-center text-primary-500"
          subHeading="Us better"
          subHeadingClassName="text-tertiary-500"
          className="w-full items-center"
        />
        <Button
          arrow
          className="bg-primary-500 text-secondary-500 mx-auto mt-8 md:mt-4 mb-16 md:mb-0"
        >
          Read our Story
        </Button>
        <img
          className="hidden md:block mx-auto relative mt-4"
          src="/assets/About_banner.svg"
          alt="illustration"
        />
        {/* Shapes */}
        <Circle secondary className="top-5 left-10" />
        <Triangle secondary className="top-[24%] right-[5%]" />
      </HeroSectionWrapper>

      <Section
        heading="A Bumpy Road"
        subHeading="to success"
        text="Starting from an idea that emerged into the minds of two young
        friends, Rohit Ajmani and Sahil Walia while still in college
        exchanged their thoughts on creating something on their own. From
        successfully launching their first website, Newton007 to interacting
        with some of the most leading marketing intellectuals, they have
        come a long way and now have a better vision of enabling Idea Clan
        to turn into a Unicorn – a Billion dollar vision."
        textClassName="py-10 "
        illustration={
          <div className="rounded-3xl">
            <Youtube videoId={VIDEO_ID} opts={OPTS} />
          </div>
        }
        largeFlex
        backgroundClassName="bg-white !py-12"
        Shapes={
          <>
            <Circle className="hidden md:block top-[-24%] left-[50%]" />
            <Triangle className="bottom-[-10%] left-[20%]" />
          </>
        }
      />

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="w-full"
      />

      <section className="bg-tertiary-500 relative">
        <img
          src="./assets/about-wave.png"
          alt="path"
          className="hidden lg:block absolute top-[1.5%] left-[19%] h-[85%] w-[78%]"
        />

        <StoryComponent
          heading="The journey begins"
          text="In 2020, Harish Parihar embarked on a solo journey, offering digital
          marketing services to local clients as a freelancer. This phase served
          as his foundational period, providing valuable insights into the basic
          structures of digital marketing. As he navigated through projects, his
          clientele steadily grew, laying the groundwork for what was to come."
          Image={
            <div className={ILLUSTRATION_CLASS}>
              <img src="/assets/Story_pic.png" alt="" className="w-full" />
            </div>
          }
          direction={1}
          Year={2020}
          aboutPath={
            <img
              src="./assets/about-wave-1.svg"
              alt="path"
              className="absolute top-12 left-[45%]"
            />
          }
        />

        <StoryComponent
          heading="Expansion and Franchise Endeavours"
          text="The year 2021 marked a pivotal moment as Harish's client base expanded significantly. Towards the year's end, he took a bold step, delving into a franchise model, forming a partnership with Amazon's Easy Store. This ambitious move involved selling franchises through the renowned platform, signalling a significant leap forward in his entrepreneurial journey."
          Image={
            <div className={ILLUSTRATION_CLASS}>
              <img src="/assets/Story_pic.png" alt="" className="" />
            </div>
          }
          direction={-1}
          Year={2021}
          aboutPath={
            <img
              src="./assets/about-wave-2.svg"
              alt="path"
              className="absolute bottom-[-50%] left-[25%]"
            />
          }
        />

        <StoryComponent
          heading="Adversity and Pivot"
          text="Unfortunately, 2022 presented unexpected challenges when Amazon discontinued its operations, leading to the closure of the franchise model. Undeterred, Harish pivoted his approach, founding a full-stack digital marketing company, recognizing the need for a broader spectrum of services. The focus shifted towards data generation and expansion, signifying resilience in the face of adversity."
          Image={
            <div className={ILLUSTRATION_CLASS}>
              <img src="/assets/Story_pic.png" alt="" className="" />
            </div>
          }
          direction={1}
          Year={2022}
          aboutPath={
            <img
              src="./assets/about-wave-3.svg"
              alt="path"
              className="absolute bottom-[-46%] left-[37%]"
            />
          }
        />

        <StoryComponent
          heading="Collaborative Innovations"
          text="In 2023, fate brought Harish together with like-minded visionaries, Raj Maheshwari and Shelendra Mukati, during a summit. Engaging in spirited discussions, they explored innovative ideas, particularly around lead generation. Their synergy and shared aspirations led to the inception of Lead Bank—a revolutionary model empowered by an in-house software boasting unlimited data sources."
          Image={
            <div className={ILLUSTRATION_CLASS}>
              <img src="/assets/Story_pic.png" alt="" className="" />
            </div>
          }
          direction={-1}
          Year={2023}
          aboutPath={
            <img
              src="./assets/about-wave-2.svg"
              alt="path"
              className="absolute bottom-[-50%] left-[25%]"
            />
          }
        />

        <StoryComponent
          heading="Global Ventures and Sectoral Diversification"
          text="The year 2024 heralded a transformative phase for Lead Bank. With a well-established model in place, they successfully onboarded foreign and domestic clients, amplifying their impact across diverse sectors—from Indian businesses to digital products, ecommerce ventures, and educational initiatives. Their collaborative efforts aimed at empowering entities to thrive in the ever-evolving landscape of the online realm."
          Image={
            <div className={ILLUSTRATION_CLASS}>
              <img src="/assets/Story_pic.png" alt="" className="" />
            </div>
          }
          direction={1}
          Year={2024}
        />

        <img
          src="./assets/triple-wave-white-1.svg"
          alt=""
          className="w-full bg-white rotate-180"
        />

        <Circle className="top-[18%] left-[5%]" />
        <Triangle className="top-[52%] right-[5%]" />
        <Triangle className="bottom-[2%] right-[5%]" />
        <Circle className="top-[58%] left-[5%]" />
      </section>

      
      <AnimateIllustrationSection
        heading="We are a team of"
        subHeading="focused Individual"
        text={"We’ve established a people-focused workplace and their contributions have had a great impact on the company’s overall mission."}
        list={
          focusedIndividual.map((item, index)=>{
            const el = cardList[index];
            return (
              {...item, illustration: <img src={el.iconSrc} alt={`image-${index}`} className="w-[35vw]"/>}
            )
          })
        }
      />

      <RoundedFullCard 
        heading="WE BRING MORE"
        headingClassName="text-primary-500"
        subHeading="traffic and conversion to your website"
        subHeadingClassName="text-secondary !w-[36vw] sm:!w-[40vw] md:!w-[42vw]"
        className="bg-tertiary-500 py-12 px-8 mt-10 md:py-20 md:px-12 flex justify-between items-center"
        illustration={
          <Button arrow className="bg-primary-500 mx-auto">
            Learn More
          </Button>
        }
        linearGradient={{
          backgroundImage: "linear-gradient(0deg, #080403 50%, white 50%)",
        }}
      />

      <section className="w-full px-screen-padding py-20 bg-secondary-500 flex flex-col items-center justify-center relative">
        <Heading
          heading="We Bring a lot"
          headingClassName="text-primary-500 text-center"
          subHeading="to the table"
          subHeadingClassName="text-tertiary-500 text-center"
          className="items-center"
        />
        <div className="w-full px-[2.5vw] flex flex-col md:flex-row   justify-between">

          <div className="w-full my-16 flex flex-col items-center justify-between">
            <Carousel
            sliderClassName="!w-[62vw] md:!w-[30vw] flex justify-center"
              itemsList={
                teamBlogs1.map((item)=><img className="w-full" {...item} />)
              }
  
            />
            <Heading
              className="!w-[70%] bg-primary-500 !p-10 my-4 items-center"
              heading="170+"
              headingClassName="text-secondary-500 text-center"
              subHeading="team member"
              subHeadingClassName="text-tertiary-500 text-center !leading-7"
            />
          </div>
          
          <div className="w-full my-16 flex flex-col items-center justify-between">
            <Carousel
              sliderClassName="!w-[62vw] md:!w-[30vw] flex justify-center"
              itemsList={
                teamBlogs2.map((item)=><img {...item} />)
              }
  
            />
            <Heading
              className="!w-[70%] bg-tertiary-500 !p-10 my-4 items-center"
              heading="Our"
              subHeading="Workstation"
            />
          </div>
            
        </div>

        <Heading
          heading="3000+"
          headingClassName="text-tertiary-500"
          subHeading="Happy Clients"
          subHeadingClassName="text-primary-500 text-center"
          className="w-full items-center"
        />
      </section>

      <RoundedFullCard 
        heading="STRONG"
        subHeading="portfolio"
        subHeadingClassName="text-secondary"
        allHeadingClassName="items-center md:items-start mb-10 md:mb-0"
        className="bg-white rounded-[5rem] py-10 px-10 md:py-12 md:px-12 lg:py-20 lg:px-16 flex flex-col md:flex-row md:gap-4 justify-between items-center"
        illustration={
          <div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 justify-between items-center">
            <div className="border-l-4 border-gradient h-full md:max-w-[25vw]">
              <p className="text-secondary-500 px-2">
                We excel in what we do in that we know what it takes for a brand
                to grow, we focus on delivering quality results rather than
                quick results and this is what makes us stand out from our rival
                companies.
              </p>
            </div>
            <div className="border-l-4 border-gradient md:max-w-[20vw]">
              <p className="text-secondary-500 px-2">
                We develop a robust relationship with our clients, keep up
                commitments, and work together to build a strong outcome.
              </p>
            </div>
          </div>
        }
        linearGradient={{
          backgroundImage: "linear-gradient(180deg, #080403 50%, #f4f4f4 50%)",
        }}
      />

      <section className="w-full px-screen-padding py-20 bg-tertiary-500 flex flex-col items-center justify-center relative">
        <Heading
          heading="Meet The One"
          headingClassName="text-primary-500 text-center"
          subHeading="who creates magic"
          subHeadingClassName="text-secondary-500 text-center"
          className="items-center"
        />
        <div className="w-full px-[2.5vw] py-10 flex flex-col sm:flex-row justify-between gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          <div>
            <img src="./assets/ceo.png" alt="ceo-1" />
            <div className="flex flex-col justify-between">
              <div className="w-full flex flex-col items-start justify-center">
                <h1 className="text-primary-500 text-xl font-semibold">Sahil Walia</h1>
                <h1>Ceo Details</h1>
              </div>
              <hr className="border my-1 border-secondary-500"/>
              <p className="my-3 text-sm md:text-base">
                Sahil Walia has transformed Idea Clan into a martech company by amalgamating his marketing skills with his technical expertise. As the Director, Sahil has taken the responsibility of setting the vision and technology strategy in addition to driving the data science agenda across the company’s entire portfolio. He is the innovative mind behind the path breaking programming on which Idea Clan floats. Today, he’s driving the company’s strategy to unleash the power of technology over an established empire of online marketing.
                <br />
                <br />
                Equipped with solutions for data analytics, content and commerce, Sahil is powering the digital growth of Idea Clan across the globe. His prime focus is on leading initiatives to re-imagine the company’s processes using cutting-edge technologies. Sahil is a master of driving innovation and his Bachelor of Technology certainly has a role to play in it.
                <br />
                <br />
                As a problem solver by nature, Sahil quenches his thirst by employing technology to bring a new dimension to marketing solutions. His in depth involvement in every process and stage of marketing with constant brainstorming makes him a true participant instead of a spectator.
              </p>
            </div>
          </div>   

          <div>
            <img src="./assets/ceo.png" alt="ceo-1" />
            <div className="flex flex-col justify-between">
              <div className="w-full flex flex-col items-start justify-center">
                <h1 className="text-primary-500 text-xl font-semibold">Sahil Walia</h1>
                <h1>Ceo Details</h1>
              </div>
              <hr className="border my-1 border-secondary-500"/>
              <p className="my-3 text-sm md:text-base">
                Sahil Walia has transformed Idea Clan into a martech company by amalgamating his marketing skills with his technical expertise. As the Director, Sahil has taken the responsibility of setting the vision and technology strategy in addition to driving the data science agenda across the company’s entire portfolio. He is the innovative mind behind the path breaking programming on which Idea Clan floats. Today, he’s driving the company’s strategy to unleash the power of technology over an established empire of online marketing.
                <br />
                <br />
                Equipped with solutions for data analytics, content and commerce, Sahil is powering the digital growth of Idea Clan across the globe. His prime focus is on leading initiatives to re-imagine the company’s processes using cutting-edge technologies. Sahil is a master of driving innovation and his Bachelor of Technology certainly has a role to play in it.
                <br />
                <br />
                As a problem solver by nature, Sahil quenches his thirst by employing technology to bring a new dimension to marketing solutions. His in depth involvement in every process and stage of marketing with constant brainstorming makes him a true participant instead of a spectator.
              </p>
            </div>
          </div>         
        </div>

      </section>

      <Wonder />
    </>
  );
}

const cardList = [
  {
    title: "Focus on client's success",
    // blobSrc: "./assets/About-blob-big.svg",
    iconSrc: "/assets/focus-on-client-success.svg",
  },
  {
    title: "Elevate one another",
    // blobSrc: "./assets/About-blob-big.svg",
    iconSrc: "/assets/elevate-one-another.svg",
  },
  {
    title: "Possess the will to win.",
    // blobSrc: "./assets/About-blob-big.svg",
    iconSrc: "/assets/will-to-win.svg",
  },
];

const teamBlogs1 = [
  {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  },   {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  },   {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  },   {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  }
]
const teamBlogs2 = [
  {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  },   {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  },   {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  },   {
    src: "./assets/about-team.png",
    className: "!w-[100vw] md:!w-[40vw] ",
  }
]

const focusedIndividual = [
  {
    heading: "Focus On Client Success",
    text: "Ensuring that their goals and satisfaction remain at the forefront of our priorities.",
  }, {
    heading: "Elevate One Another",
    text: "Fostering a culture where mutual support and encouragement create a foundation for individual and collective growth.", 
  }, {
    heading: "Possess the will to win",
    text: "With an indomitable will to win, we approach challenges with determination and resilience",
  }, 
]

function Card({ blobSrc, iconSrc, title, titleClassNames }) {
  const wraperClass = classNames(
    "flex flex-col items-center justify-center",
    "text-center",
    "min-h-60",
    "w-[100%]",
    "max-w-80 md:max-w-56 lg:max-w-80",
    `bg-no-repeat bg-[0%] bg-contain `
  );

  const titleClass = classNames(
    "!text-4xl sm:!text-4xl text-secondary-500 font-playfair-display font-black mb-3",
    titleClassNames
  );

  return (
    <div className={wraperClass} style={{ backgroundImage: `url(${blobSrc})` }}>
      <img className="size-32 my-4" src={iconSrc} alt="icon" />
      <h1 className={titleClass}>{title}</h1>
    </div>
  );
}
