import { useEffect, useState } from "react";
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
import { useWinSizeContext } from "../context/winSizeContext";

const SECTION5_HEADING_CLASS = "!text-3xl sm:!text-4xl lg:!text-5xl text-secondary-500"
const SECTION5_SUB_HEADING_CLASS = "!text-3xl sm:!text-4xl lg:!text-5xl pl-1 mt-[-8px] text-primary-500"
const SECTION5_ALL_HEADING_CLASS = "mt-16 mb-4 sm:mb-6 md:mb-12"
const SECTION5_TEXT_CLASS = "mb-8 md:mb-12 lg:mb-16"

export default function Home() {
  document.querySelector("title").innerHTML = "AR Media House";
  return (
    <>
      <HeroSectionWrapper className="flex py-6 flex-col gap-4 items-center justify-between relative">
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
                AR Media House works with reputable global brands to deliver data-driven lead
                generation, customer acquisition, and brand awareness campaigns through 
                various digital spaces.
              </p>
            </FadeInUp>
            {/* Buttons */}
            <div className="flex gap-6 py-10">
              <Button arrow className="bg-primary-500 text-secondary-500">
                Let's Connect
              </Button>
              <Button className="bg-transparent border-2 border-primary-500 text-primary-500">
                About Us
              </Button>
            </div>
          </div>
          {/* illustraion */}
          <div  className="hidden w-[38vw] min-w-80 md:block h-auto rounded">
              <img src="/assets/Banner1.svg" alt="" />
          </div>
        </div>

        {/* Companies */}
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-md sm:text-xl lg:text-2xl text-center font-bold font-jost text-slate-200 tracking-wider my-8">Trusted by <span className="text-primary-500">thousands</span> of client worldwide</h1>
          <div className="w-[98vw] h-28 mb-8 flex justify-center items-center relative overflow-hidden">
          <CompaniesAnimate className="flex justify-center items-center gap-12 sm:gap-16 md:gap-20 lg:gap-24" length={companies.length}>
            {
              logos.map((c, index)=>{
                return (
                  <li key={index} className="">
                    {c}
                  </li>
                )
              })
            }
          </CompaniesAnimate>
          </div>
        </div>
        

        {/* Shapes */}
        <Circle className="top-[30%] sm:top-[35%] md:top-[4%] right-[2%]" secondary/>
        <Circle className="top-[50%] left-[25%]" secondary/>
        <Triangle className="top-[-4%] left-[20%]" secondary/>
        <Triangle className="bottom-[-8%] right-[10%]" secondary duration={10} />
      </HeroSectionWrapper>  


      <Section
        backgroundClassName="bg-tertiary-500 py-10"
        heading="What Make Us"
        subHeading="different"
        text="We make digital stuff easy for you by finding the perfect solutions. Our goal is to go above and beyond what you expect and what's considered normal. At AR Media, we use online marketing to help Indian and international brands grow a lot. We want to bring that same success to you, showing you how it’s done."
        textClassName="my-10"
        Button1={
          <Button arrow primary className="mt-4 text-secondary-500 bg-primary-500">
            Learn More
          </Button>
        }
        illustration={
          <img src="/assets/What_makes_us.png" alt="" className="ImgResponsive h-auto w-[35vw]"/>
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
          <Button arrow primary className="mt-4 text-secondary-500 bg-primary-500">
            Learn More
          </Button>
        }
        illustration={
            <img src="/assets/Growth_curve.svg" alt=""  className="ImgResponsive w-[30vw]"/>
        }
        Shapes={
          <Triangle className="top-[26%] left-[69%] md:top-[70%] md:left-[25%]" />
        }
      />


      <BlackSection className="flex flex-col gap-4 py-4 items-center relative">
        <Heading 
          heading="We have Got"
          subHeading="a lot to offer"
          subHeadingClassName="text-tertiary-500"
          className="items-center"
        />

        <Services />
      </BlackSection>


      <Section
        backgroundClassName="py-8"
        heading="We Make Your Sales"
        headingClassName="text-black"
        middleLine="GO"
        middleLineClassName="text-primary-500 my-[-4px]"
        subHeading="through the roof"
        allHeadingClassName="mb-6 sm:mb-12"
        Button1={
          <Button className="bg-primary-500 text-secondary-500 mt-3 md:mt-6 mb-6 sm:mb-8 md:mb-12" arrow>
            Let's Connect
          </Button>
        }
        illustration={
            <img src="/assets/GO_image.svg" alt=""  className="ImgResponsive w-[40vw]"/>
        }
        Shapes={
          <Circle className="top-[20%] left-[69%] md:top-[56%] md:left-[30%]" />
        }
      />

      <img
        src="./assets/triple-wave-white-1.svg"
        alt="wave"
        className="w-full"
      />

      <section className="bg-tertiary-500 pt-8 relative">
        <Heading
          className="w-full items-center pb-2"
          heading="3-easy step"
          headingClassName="text-center text-primary-500"
          subHeading="our growth"
          subHeadingClassName="text-center"
        />

        {/* <img src="./assets/1-2-3-path.svg" alt="steps" className="hidden lg:block absolute z-10 mt-8 h-[200vh] left-[50%] translate-x-[-60%]"/> */}
        <HomePage3StepPath className="hidden lg:block absolute top-[-4%] z-10 mt-8 h-[280vh] left-[50%] translate-x-[-60%]" />

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
            <img src="/assets/Diagnosis.svg" alt=""  className=""/>
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
            <img src="/assets/digitalFoundations.svg" alt=""  className=""/>
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
            <img src="/assets/VerifyBenchmark.svg" alt="benchmark-image"  className="ml-[-6vw]"/>
          }
          direction={-1}
        />
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
          {
            clients.map((c, index)=>{
              return (
                <ClientCards
                  key={index}
                  {...c}
                />
              )
            }) 
          }
        </ul>
        
      </RoundedCornersSection>


      <ExploreBlog/>

      <Wonder />
      
    </>
  )
}

function Services(){
  const {winSize, BR_1, BR_2, BR_3} = useWinSizeContext()
  let toReturn;
  if(winSize > BR_2){
    toReturn = <div className="flex flex-col items-center gap-8 md:pb-24">
      <ul className="w-full flex justify-between gap-[3vw] lg:gap-[6vw] py-8 relative">
        {
          services.slice(0,4).map((s, index)=>(
            <ServicesCards key={index}  {...s} />
          ))
        }
      </ul>
      <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-center relative mb-4">
        {
          services.slice(4).map((s, index)=>{
            return (
                <ServicesCards key={index}  {...s} />
            )
          })
        }
      </ul>
    </div>
  }
  else if(winSize > BR_1){
    toReturn = <div className="flex flex-col items-center gap-8">
      <ul className="w-full flex justify-evenly gap-[3vw] lg:gap-[6vw] py-8 relative">
        {
          services.slice(0,2).map((s, index)=>(
            <ServicesCards key={index}  {...s} />
          ))
        }
      </ul>
      <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-evenly relative mb-4">
        {
          services.slice(2,4).map((s, index)=>{
            return (
                <ServicesCards key={index}  {...s} />
            )
          })
        }
      </ul>
      <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-evenly relative mb-4">
        {
          services.slice(4,6).map((s, index)=>{
            return (
                <ServicesCards key={index}  {...s} />
            )
          })
        }
      </ul>
      <ul className="w-full gap-[3vw] lg:gap-[6vw] flex justify-evenly relative mb-4">
        {
          services.slice(6).map((s, index)=>{
            return (
                <ServicesCards key={index}  {...s} />
            )
          })
        }
      </ul>
    </div>
  }
  else{
    toReturn = <div className="flex flex-col items-center gap-8">
      <ul className="w-full flex flex-col gap-[3vw] py-8 items-center">
        {
          services.map((s, index)=>(
            <ServicesCards key={index}  {...s} />
          ))
        }
      </ul>
    </div>
  }

  return toReturn
}

const images = [
  { src: "./assets/angelOne.png", alt: "angelOne",  },
  { src: "./assets/denver.jpg", alt: "denver"},
  { src: "./assets/maruti-suzuki-vector-logo.png", alt: "maruti-suzuki",  className:"h-24 w-28"},
  { src: "./assets/WAHL.png", alt: "WAHL",  className: "h-14"},
  { src: "./assets/nmims.png", alt: "NMIMS", className: "h-20"},
  { src: "./assets/SILAII.webp", alt: "SILAII", },
  { src: "./assets/sikshaWS.png", alt: "Siksha-W-S", className: "w-20 h-20"},
  { src: "./assets/instaTransfer.png", alt: "Insta-Transfer",  },
  { src: "./assets/manipalmedace.jpg", alt: "manipalmedace",  },
  { src: "./assets/arunika.jpg", alt: "arunika",  },
  { src: "./assets/company.png", alt: "company", className: "h-16"},
  { src: "./assets/gamezy.jpg", alt: "gamezy",  }
];

const logoicon1 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/Ecommercelogo.png" alt="" /></div>
const logoicon2 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/Performancelogo.png" alt="" /></div>
const logoicon3 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/Leadgenerationlogo.png" alt="" /></div>
const logoicon4 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/MediaBuying.png" alt="" /></div>
const logoicon5 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/Martechlogo.png" alt="" /></div>
const logoicon6 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/ContentMarketinglogo.png" alt="" /></div>
const logoicon7 = <div className="h-32 w-32 rounded-3xl"><img src="./assets/webdevlogo.svg" alt="" /></div>

const services = [
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32", icon: logoicon1, heading: "E-commerce", text: "Elevating your online store for greater success by innovative outbound strategies to drive more sales and traffic for your brand."},
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32", icon: logoicon2, heading: "Performance Marketing", text: "Experts in driving online results through strategic ads. We boost online outcomes with strategic ad tactics."},
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32", icon: logoicon3, heading: "Lead Generation", text: "Convert your prospects into delighted clients solely meant for your business."},
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32", icon: logoicon4, heading: "Media Buying", text: "Maximising visibility and impact through online ads."},
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32",icon: logoicon5, heading: "Martech", text: "Leveraging cutting-edge tech for marketing success. Using tech to drive marketing triumph." },
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32",icon: logoicon6, heading: "Content Marketing", text: "Crafting compelling content for your brand's story. We create engaging brand stories." },
  { className: "md:first:relative md:first:top-32 md:last:relative md:last:top-32",icon: logoicon7, heading: "Web Development", text: "Building platforms that captivate and convert. Creating captivating converting platforms." }
]

const icon2 = <img src="./assets/person.png" alt="person" className="w-16 h-16"/>

const clients = [
  {
    icon: icon2,
    heading: "James Wallace",
    subHeading: "Scorpion Media",
    text: "AR Media House's superior targeting technology, ease of implementation, and ability to deliver quality at scale is what has made us so successful in this field. Their experience from managing multiple verticals of lead generation and social media marketing has made them one of the most trusted organizations to partner with. Their constant expanding of horizons is worth appreciating. Their adaptable approach made the collaboration enriching for both the parties.",
    className: "first:relative md:first:top-16 last:relative md:last:top-16",
  },
  {
    icon: icon2,
    heading: "Matt Crist",
    subHeading: "4AD",
    text: "I’ve experienced working directly with AR Media House Inc, in the marketing space for many years, and they have been very successful as a multiple channel advertiser — driving thousands of leads and sales to our offers over the years. Some of their most successful sources have been Native and social media (Facebook) marketing. It’s been great to see them build infrastructures and teams to successfully tackle multiple verticals using these media sources.",
    className: "first:relative md:first:top-16 last:relative md:last:top-16",
  },
  {
    icon: icon2,
    heading: "Brooklyn Foster",
    subHeading: "Suited Connector",
    text: "I’ve worked with AR Media House, Inc. since 2018 from both the advertising and lead generation sides of the business. They are highly versatile marketers that are able to play at a high level in both the Media Buying and Lead generation space. Idea Clan brings a depth of experience, skills, and access to resources that instantly gives them an edge over other marketers — allowing them to bring enormously high revenue and ROIs for those who partner with him.",
    className: "first:relative md:first:top-16 last:relative md:last:top-16",
  },
];




const companies = [
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "fantasy"}}>denver</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "system-ui"}}>Angle one</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "inherit"}}>Maruti Suzuki</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "fantasy"}}>gamezy</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "system-ui"}}>WAHL</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "inherit"}}>NMIMS</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "system-ui"}}>medAce</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "fantasy"}}>SILAII</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "system-ui"}}>Arunika</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "fantasy"}}>ClickHouse</h1>,
  <h1 className="text-xl sm:text-3xl lg:text-4xl text-white text-center leading-8" style={{"fontFamily": "system-ui"}}>INSTA Transfer</h1>,
];

const logos=[
  <img src="./assets/denverwhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/angelOnewhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/arunika.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/gamezywhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/instaTransferwhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/marutisuzukiwhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/nmimswhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/silaiwhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/wahlwhite1.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/clickHouse.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/shikshawhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
  <img src="./assets/manipalmedacewhite.png" alt="DENVER" className="max-w-[5rem] h-auto"></img>,
]