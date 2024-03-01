import React, { useEffect, useState ,useRef} from "react";
import classNames from "classnames";
import {
  AnimateNumber, 
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

const VIDEO_ID = "cBA-itmpR84";
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

      <section ref={ref} id="story" className="bg-tertiary-500 relative">
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
              <img src="/assets/Story_pic.png" alt="pic" className="" />
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

        <div className="w-full px-[2.5vw] py-10 flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          <div className="w-[90%] md:w-[40%] shadow-lg hover:cursor-pointer rounded-2xl overflow-hidden ceo-container">
            <img src="/assets/founder2.jpg" alt="ceo-1" className="ceo-image"/>

            <div className="flex justify-between items-center">
              <div>
                <div className="w-fit min-w-[50%] pl-2 md:pl-3 pr-4 md:pr-6 py-1 mt-1.5 rounded-r-full bg-primary-500 text-lg sm:text-2xl font-semibold">
                  Raj Maheshwari
                </div>
                <h2 className="px-2 md:px-3 font-semibold text-gray-500 text-sm sm:text-base">
                  Co-founder
                </h2>
              </div>

              <div className="basis-[30%] flex justify-between gap-2 pr-3 ceo-socials">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                </svg>
              </div>
            </div>

            <div className="p-3 pt-0">
              <p className="my-3 text-xs sm:text-sm">
              Raj Maheshwari is a digital market specialist, portfolio manager, trainer, and stock market trader. In 2018, he founded the AR group and launched his first business, AR Financial Research & Consultancy Services, where he served as a mentor to help others succeed in the worlds of finance and investment.<br/> 
Later on, he discovered that the lack of digitalization is causing issues for a lot of businesses. Subsequently, he devised the concept to establish an additional enterprise, AR Media House, offering digital solutions that facilitate corporate expansion. <br />
His goal is to enable people and companies to prosper in the digital and financial spheres. Whether your goal is to become an expert in stock market trading or to increase your web presence, I can help you every step of the way.
              </p>
            </div>
          </div> 


          <div className="w-[90%] md:w-[40%] shadow-lg hover:cursor-pointer rounded-2xl overflow-hidden ceo-container">
            <img src="/assets/founder1.jpeg" alt="ceo-1" className="ceo-image"/>

            <div className="flex justify-between items-center">
              <div>
                <div className="w-fit min-w-[50%] pl-2 md:pl-3 pr-4 md:pr-6 py-1 mt-1.5 rounded-r-full bg-secondary-500 text-tertiary-500 text-lg sm:text-2xl font-semibold">
                Shailendra Mukati
                </div>
                <h2 className="px-2 md:px-3 font-semibold text-gray-500 text-sm sm:text-base">
                  Co-Founder
                </h2>
              </div>
              <div className="basis-[30%] flex justify-between gap-2 pr-3 ceo-socials">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                </svg>
              </div>
            </div>

            <div className="p-3 pt-0">
              <p className="my-3 text-xs sm:text-sm">
              Another AR group cofounder is Shailendra Mukati. His area of expertise is computer engineering (CS), and he has developed technical talents that solve technical issues for businesses. <br />
It was there that he began applying his managerial and marketing talents to deal with clients. His goal was to help as many businesses as possible go from having low sales to experiencing 10x growth. <br />
Shailendra, a true leader, is the driving force behind a group of remarkable people that collaborate relentlessly to achieve the shared objective of revolutionising internet marketing. As the leader of AR Media House, Shailendra is leading the company into its next phase of leadership in the market.Under Shailendra's guidance, AR Media House is poised to set new standards and pave the way for innovative approaches in internet marketing.
              </p>
            </div>
          </div> 
         
        </div>
        <div className="w-full px-[2.5vw] py-10 flex flex-col md:flex-row items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24">
          <div className="w-[90%] md:w-[40%] shadow-lg hover:cursor-pointer mx-auto rounded-2xl overflow-hidden ceo-container">
            <img src="/assets/founder3.JPG" alt="ceo-1" className="ceo-image"/>

            <div className="flex justify-between items-center">
              <div>
                <div className="w-fit min-w-[50%] pl-2 md:pl-3 pr-4 md:pr-6 py-1 mt-1.5 rounded-r-full bg-primary-500 text-lg sm:text-2xl font-semibold">
                  Harish Parihar
                </div>
                <h2 className="px-2 md:px-3 font-semibold text-gray-500 text-sm sm:text-base">
                  Co-founder
                </h2>
              </div>

              <div className="basis-[30%] flex justify-between gap-2 pr-3 ceo-socials">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 9h3l-.375 3H14v9h-3.89v-9H8V9h2.11V6.984c0-1.312.327-2.304.984-2.976C11.75 3.336 12.844 3 14.375 3H17v3h-1.594c-.594 0-.976.094-1.148.281-.172.188-.258.5-.258.938V9z"></path>
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.875 7.5v.563c0 3.28-1.18 6.257-3.54 8.93C14.978 19.663 11.845 21 7.938 21c-2.5 0-4.812-.687-6.937-2.063.5.063.86.094 1.078.094 2.094 0 3.969-.656 5.625-1.968a4.563 4.563 0 0 1-2.625-.915 4.294 4.294 0 0 1-1.594-2.226c.375.062.657.094.844.094.313 0 .719-.063 1.219-.188-1.031-.219-1.899-.742-2.602-1.57a4.32 4.32 0 0 1-1.054-2.883c.687.328 1.375.516 2.062.516C2.61 9.016 1.938 7.75 1.938 6.094c0-.782.203-1.531.609-2.25 2.406 2.969 5.515 4.547 9.328 4.734-.063-.219-.094-.562-.094-1.031 0-1.281.438-2.36 1.313-3.234C13.969 3.437 15.047 3 16.328 3s2.375.484 3.281 1.453c.938-.156 1.907-.531 2.907-1.125-.313 1.094-.985 1.938-2.016 2.531.969-.093 1.844-.328 2.625-.703-.563.875-1.312 1.656-2.25 2.344z"></path>
                </svg>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                </svg>
              </div>
            </div>

            <div className="p-3 pt-0">
              <p className="my-3 text-xs sm:text-sm">
                Sahil Walia has transformed Idea Clan into a martech company by amalgamating his marketing skills with his technical expertise. As the Director, Sahil has taken the responsibility of setting the vision and technology strategy in addition to driving the data science agenda across the company’s entire portfolio. He is the innovative mind behind the path breaking programming on which Idea Clan floats. Today, he’s driving the company’s strategy to unleash the power of technology over an established empire of online marketing.
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
