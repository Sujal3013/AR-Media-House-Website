import React, { useEffect, useState ,useRef} from "react";
import classNames from "classnames";
import {
  AnimateNumber, 
  Button,
  Heading,
  StoryComponent,
  Section,
  Wonder,
  HeroSectionWrapper,
  Circle,
  Triangle,
  FounderCard,
} from "../components";
import Youtube from "react-youtube";
import { useWinSizeContext } from "../context/winSizeContext";
import AnimateIllustrationSection from "../components/AnimateIllustrationSection";

const VIDEO_ID = "VIHa3lcp2wY";
const OPTS = {
  height: "350",
  width: "575",
  playerVars: {
    autoplay: 0,
  },
};

const ILLUSTRATION_CLASS =
  "rounded-full text-center basis-[40%] h-auto";

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
  const ref=useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
      <HeroSectionWrapper className="!mb-0 py-10 md:pb-0" whiteWaveBackground>
        <Heading
          heading="Get To Know"
          headingClassName="text-center text-primary-500"
          subHeading="Us better"
          subHeadingClassName="text-tertiary-500"
          className="w-full items-center"
        />
        <Button
        arrow
          onClick={handleClick}
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
        friends, Harish Parihar and Raj Maheshwari
        exchanged their thoughts on creating something on their own. From
        successfully launching their first website, Newton007 to interacting
        with some of the most leading marketing intellectuals, they have
        come a long way and now have a better vision of enabling AR Media House
        to turn into a Unicorn – a Billion dollar vision."
        textClassName="py-10 "
        illustration={
          <div className="rounded-3xl">
            <Youtube videoId={VIDEO_ID} opts={OPTS} width="90%" />
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

      <section ref={ref} id="story" className="bg-tertiary-500 relative">
        <img
          src="./assets/about-wave.png"
          alt="path"
          className="hidden lg:block absolute top-[1.8%] left-[19%] h-[85%] w-[78%]"
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
              <img src="/assets/story-4.png" alt="pic" className="" />
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
              <img src="/assets/story-1.png" alt="" className="" />
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
              <img src="/assets/story-3.png" alt="" className="" />
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
              <img src="/assets/story-7.png" alt="" className="" />
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
              <img src="/assets/story-8.png" alt="" className="" />
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
              {...item, key: index, illustration: <img src={el.iconSrc} alt={`image-${index}`} className={`w-[35vw] ${index===1 && "-translate-y-16"}`}/>}
            )
          })
        }
      />
        
      <img 
        className="rotate-180 h-[90%] w-full translate-y-1" 
        src="./assets/triple-wave-dark-2.svg" 
        alt="wave" 
      />

      <section className="w-full px-screen-padding py-10 md:py-20 bg-secondary-500 flex flex-col items-center justify-center relative">
        <Heading
          heading="WE BRING MORE"
          headingClassName="text-primary-500 text-center"
          subHeading="to the table"
          subHeadingClassName="text-tertiary-500 text-center"
          className="items-center mt-2 md:mt-4 mb-6 md:mb-8"
        />

        <div className="w-full pb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-[90%] md:w-[20%] min-h-16 p-4 flex flex-col items-center rounded-lg bg-primary-500">
            <h1 className="text-5xl font-bold">
              <AnimateNumber
                className="inline"
                from={0}
                to={30}
                duration={2.5}
              />  
              +
            </h1>
            <p className="text-xl text-center font-semibold">Team Members</p>
          </div>
          <div className="w-[90%] md:w-[20%] min-h-16 p-4 flex flex-col items-center rounded-lg bg-tertiary-500">
            <h1 className="text-5xl font-bold">
              <AnimateNumber
                className="inline"
                from={0}
                to={5}
                duration={2.5}
              />
              +
            </h1>
            <p className="text-xl text-center font-semibold">Workstations</p>
          </div>
          <div className="w-[90%] md:w-[20%] min-h-16 p-4 flex flex-col items-center rounded-lg bg-primary-500">
            <h1 className="text-5xl font-bold">
              <AnimateNumber
                className="inline"
                from={0}
                to={300}
                duration={2.5}
              />
              +
            </h1>
            <p className="text-xl text-center font-semibold">Happy Clients</p>
          </div>
        </div>

        <div className="w-full py-8 flex flex-col items-center">
          <Heading
            className="items-center"
            subHeading="Strong Protfolio"
            subHeadingClassName="text-tertiary-500 text-center"
          />

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 mt-6 md:mt-12 text-sm md:text-base leading-[1rem] md:leading-[1.4rem] lg:leading-[1.6rem] lg:font-medium">
            <div className="w-[90%] md:w-[28%] min-h-24 md:min-h-60 lg:min-h-40 p-4 flex items-center rounded-lg bg-primary-500">
              <p className="text-center">
                We excel in what we do in that we know what it takes for a brand to grow, we focus on delivering quality results rather than quick results and this is what makes us stand out from our rival companies.
              </p>
            </div>
            <div className="w-[90%] md:w-[28%] min-h-24 md:min-h-60 lg:min-h-40 p-4 flex items-center rounded-lg bg-tertiary-500">
              <p className="text-center">
                Incorporate details about your brand’s approach and build a robust marketing portfolio.
              </p>
            </div>
            <div className="w-[90%] md:w-[28%] min-h-24 md:min-h-60 lg:min-h-40 p-4 flex items-center rounded-lg bg-primary-500">
              <p className="text-center">
                We develop a robust relationship with our clients, keep up commitments, and work together to build a strong outcome.
              </p>
            </div>
          </div>
        </div>  
      </section>

      <img className="h-[90%] w-full" src="./assets/triple-wave-dark-1.svg" alt="wave" />

      <section className="w-full px-screen-padding py-12 md:py-16 bg-tertiary-500 flex flex-col items-center justify-center relative">
        <Heading
          heading="Meet The One"
          headingClassName="text-primary-500 text-center"
          subHeading="who creates magic"
          subHeadingClassName="text-secondary-500 text-center"
          className="items-center"
        />

        <div className="w-full py-10 flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center md:items-start justify-center lg:justify-between gap-12 sm:gap-8 md:gap-12 xl:gap-16">
          {
            founders.map((founder, indx)=>{
              return (
                <FounderCard {...founder} key={indx} index={indx}/>
              )
            })
          }         
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

const founders = [
  {
    founderName: "Raj Maheshwari",
    imageSrc: "/assets/founder2.jpg", 
    position: "Founder",
    description: `Raj Maheshwari is a digital market specialist, portfolio manager, trainer, and stock market trader. In 2018, he founded the AR group and launched his first business, AR Financial Research & Consultancy Services, where he served as a mentor to help others succeed in the worlds of finance and investment.\n
    Later on, he discovered that the lack of digitalization is causing issues for a lot of businesses. Subsequently, he devised the concept to establish an additional enterprise, AR Media House, offering digital solutions that facilitate corporate expansion.\n
    His goal is to enable people and companies to prosper in the digital and financial spheres. Whether your goal is to become an expert in stock market trading or to increase your web presence, I can help you every step of the way.`,
    facebookLink: "https://www.facebook.com/raj.maheshwari.1238/", 
    twitterLink: "https://www.instagram.com/rajmaheshwari.ai/?hl=en", 
    linkedinLink: "https://www.linkedin.com/in/raj-maheshwari-895778149/", 
  }, 
  {
    founderName: "Harish Parihar", 
    imageSrc: "/assets/founder3.JPG", 
    position: "CEO & CTO",
    description: `Welcome to AR Media House, where innovation intersects with lead generation excellence. I'm Harish Parihar, serving as both CEO and CTO, leveraging extensive expertise in Performance Marketing, Digital Marketing, and Brand Strategy. With a track record managing $250k+ in ad spend and generating over 100k leads via finely-tuned funnels and targeted Facebook Ads, I specialize in elevating businesses across various sectors.At AR Media House, we don't just promise results; we guarantee them. Through strategic planning, data-driven insights, and continuous optimization, we ensure your brand outshines digital clutter and captivates your audience. Whether you're a startup carving your niche or an established enterprise pursuing exponential growth, our customized solutions exceed expectations.`,
    facebookLink: "https://www.facebook.com/harish.parihar.96592/", 
    twitterLink: "https://www.instagram.com/harishparihar.ai/", 
    linkedinLink: "https://www.linkedin.com/in/harish-parihar-ab5086153/", 
  }, 
  {
    founderName: "Shailendra Mukati",
    imageSrc: "/assets/founder1.jpeg", 
    position: "Co-Founder",
    description: `Another AR group cofounder is Shailendra Mukati. His area of expertise is computer engineering (CS), and he has developed technical talents that solve technical issues for businesses. 
    It was there that he began applying his managerial and marketing talents to deal with clients. His goal was to help as many businesses as possible go from having low sales to experiencing 10x growth. 
    Shailendra, a true leader, is the driving force behind a group of remarkable people that collaborate relentlessly to achieve the shared objective of revolutionising internet marketing. As the leader of AR Media House, Shailendra is leading the company into its next phase of leadership in the market.Under Shailendra's guidance, AR Media House is poised to set new standards and pave the way for innovative approaches in internet marketing.`,
    facebookLink: "", 
    twitterLink: "", 
    linkedinLink: "", 
  },
]