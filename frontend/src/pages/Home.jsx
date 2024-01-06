import { 
  Button, 
  CompaniesAnimate, 
  ClientCards, 
  ExploreBlog, 
  Heading, 
  HeroSectionWrapper, 
  Section, 
  ServicesCards, 
  Wonder, 
} from "../components";
import { motion } from "framer-motion";

export default function Home() {
  document.querySelector("title").innerHTML = "AR Media House";
  return (
    <>
      <HeroSectionWrapper className="flex gap-[4vw] items-center justify-between">
        {/* text content right side */}
        <div className="w-[40vw] my-[10vh]">
          <Heading
            heading="Digital Marketing"
            subHeading="that drives result"
            subHeadingClassName="text-tertiary-500"
          />
          <p className="my-12">
            AR Media House works with reputable global brands to deliver data-driven lead
            generation, customer acquisition, and brand awareness campaigns through 
            various digital spaces.
          </p>
          {/* Buttons */}
          <div className="flex gap-6 pt-8">
            <Button arrow className="bg-primary-500 text-secondary-500">
              Let's Connect
            </Button>
            <Button className="bg-transparent border-2 border-primary-500">
              About Us
            </Button>
          </div>
        </div>
        {/* illustraion */}
        <div  className="w-[35vw] h-[50vh] bg-tertiary-500 my-28 rounded">

        </div>
      </HeroSectionWrapper>


      {/* Companies Section */}
      <section className="h-[35vh] pt-8 flex flex-col items-center justify-start px-screen-padding relative overflow-hidden">
        <h1 className="font-bold text-gray-500 text-xl">Trusted by thousands of clients worldwide</h1>
        <CompaniesAnimate className="top-14">
          <ul className="flex justify-start items-center gap-32">
            {
              images.map((company, index)=>{
                return (
                  <li className="w-36 h-fit flex justify-center">
                    <img {...company} />
                  </li>
                )
              })
            }
          </ul>
        </CompaniesAnimate>
      </section>

      <img
        src="./assets/wave1.svg"
        alt="wave"
      />


      <Section
        backgroundClassName="bg-tertiary-500 py-24"
        heading="What Make Us"
        subHeading="different"
        text="AR Media House works with reputable global brands to deliver
        data-driven lead generation, customer acquisition, and brand awareness
        campaigns through various digital spaces."
        textClassName="py-10"
        Button1={
          <Button arrow primary className="mt-4 text-secondary-500 bg-primary-500">
            Learn More
          </Button>
        }
        illustration={
          <div className="rounded-full bg-white text-center w-96 h-72 my-4">Hello</div>
        }
        direction={-1}
      />



      <Section
        backgroundClassName="bg-tertiary-500 pb-24"
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
          <div className="rounded-full bg-white text-center w-96 h-72 my-4">Hello</div>
        }
      />

      <img
        src="./assets/wave-dark1.svg"
        alt="wave"
        className="bg-secondary-500"
      />

      <div className="flex flex-col gap-4 bg-secondary-500 py-6 pt-0  px-screen-padding items-between h-[120vh] mb-36">
        <Heading 
          heading="We have Got"
          subHeading="a lot to offer"
          subHeadingClassName="text-tertiary-500"
          className="items-center"
        />

        <div className="flex flex-col items-center gap-8">
          <ul className="w-full flex justify-between py-8 relative">
            {
              services.slice(0,4).map((s, index)=>{
                return (
                    <ServicesCards key={index}  {...s} />
                )
              })
            }
          </ul>
          <ul className="w-[48%] flex justify-between relative first:">
            {
              services.slice(4).map((s, index)=>{
                return (
                    <ServicesCards key={index}  {...s} />
                )
              })
            }
          </ul>
        </div>
      </div>



      <Section
        heading="We Make Your"
        middleLine="GO"
        middleLineClassName="text-primary-500 my-[-4px]"
        subHeading="through the roof"
        allHeadingClassName="mt-6 mb-12"
        Button1={
          <Button className="bg-primary-500 text-secondary-500 mt-6 mb-12" arrow>
            Let's Connect
          </Button>
        }
        illustration={
          <div className="h-72 w-96 rounded-3xl bg-tertiary-500"></div>
        }
      />

      <img
        src="./assets/wave3.svg"
        alt="wave"
      />

      <section className="bg-tertiary-500 pt-8">
        <Heading
          className="items-center"
          heading="3-easy step"
          subHeading="our growth"
          headingClassName="text-primary-500"
          subHeadingClassName="text-secondary-500 mt-[-4px]"
        />

        <img src="./assets/1-2-3-line.svg" alt="" className="absolute h-[140vh] left-[50%] translate-x-[-55%] translate-y-20"/>

        <Section
          backgroundClassName="bg-tertiary-500 py-6"
          heading="Diagnosis & Strategy"
          headingClassName="!text-4xl text-secondary-500"
          subHeadingClassName="pl-1 mt-[-8px] !text-3xl text-primary-500"
          subHeading="planning"
          allHeadingClassName="mt-16 mb-12"
          text="Analyzing audience online behavior and tendencies to convert and
          strategize actions for maximum revenue."
          textClassName="mb-16"
          illustration={
            <div className="h-72 w-96 rounded-3xl bg-white"></div>
          }
          direction={-1}
        />

        <Section
          backgroundClassName="bg-tertiary-500 py-6"
          heading="Digital Foundation"
          headingClassName="!text-4xl text-secondary-500"
          subHeadingClassName="pl-1 mt-[-8px] !text-3xl text-primary-500"
          subHeading="test phase"
          allHeadingClassName="mt-16 mb-12"
          text="Testing multiple creatives with varied target audience settings
          and narrowing down best-performing creatives based on data
          driven strategy."
          textClassName="mb-16"
          illustration={
            <div className="h-72 w-96 rounded-3xl bg-white"></div>
          }
        />

        <Section
          backgroundClassName="bg-tertiary-500 py-6"
          heading="Verify Benchmarks"
          headingClassName="!text-4xl text-secondary-500"
          subHeadingClassName="pl-1 mt-[-8px] !text-3xl text-primary-500"
          subHeading="scale phase"
          allHeadingClassName="mt-16 mb-12"
          text="Using in-house technology to create AI-driven strategies and increase the frequency,
          targeting, and budget for the best performing ads in order to improve revenue
          and profit."
          textClassName="mb-16"
          illustration={
            <div className="h-72 w-96 rounded-3xl bg-white"></div>
          }
          direction={-1}
        />
      </section>



      <HeroSectionWrapper className="rounded-tl-[5rem] h-96 mb-56">
        <Heading
          heading="Our Client"
          subHeading="loves us"
          headingClassName="text-tertiary-500"
          subHeadingClassName="text-tertiary-500 mt-[-4px]"
          className="items-center py-8 pt-12"
        />

        <ul className="flex gap-4 justify-between py-4 mb-6">
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
      </HeroSectionWrapper>


      <ExploreBlog list={blogsList}/>

      <Wonder />
      
    </>
  )
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

const icon = <div className="h-32 w-32 rounded-3xl bg-primary-500"></div>

const services = [
  { className: "first:translate-y-28 last:translate-y-28", icon: icon, heading: "E-commerce", text: "Innovative outbound strategies to drive more sales and traffic for your brand. Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways." },
  { className: "first:translate-y-28 last:translate-y-28", icon: icon, heading: "Performance Marketing", text: "Place ads about your company, services, or products on websites that help drive more sales in the online market." },
  { className: "first:translate-y-28 last:translate-y-28", icon: icon, heading: "Lead Generation", text: "Convert your prospects into delighted clients solely meant for your agency." },
  { className: "first:translate-y-28 last:translate-y-28", icon: icon, heading: "Media Buying", text: "We use immense technologies to determine strategy, to compile content, execute content, & analyze results." },
  { icon: icon, heading: "Martech", text: "A strategic marketing approach to help your valuable content reach key audiences." },
  { icon: icon, heading: "Content Marketing", text: "We use immense technologies to determine strategy, to compile content, execute content, & analyze results." }
]

const icon2 = <img src="./assets/person.png" alt="person" className="w-16 h-16"/>

const clients = [
  {
    icon: icon2,
    heading: "James Wallace",
    subHeading: "Scorpion Media",
    text: "AR Media House's superior targeting technology, ease of implementation, and ability to deliver quality at scale is what has made us so successful in this field. Their experience from managing multiple verticals of lead generation and social media marketing has made them one of the most trusted organizations to partner with. Their constant expanding of horizons is worth appreciating. Their adaptable approach made the collaboration enriching for both the parties.",
    className: "first:translate-y-16 last:translate-y-16",
  },
  {
    icon: icon2,
    heading: "Matt Crist",
    subHeading: "4AD",
    text: "I’ve experienced working directly with AR Media House Inc, in the marketing space for many years, and they have been very successful as a multiple channel advertiser — driving thousands of leads and sales to our offers over the years. Some of their most successful sources have been Native and social media (Facebook) marketing. It’s been great to see them build infrastructures and teams to successfully tackle multiple verticals using these media sources.",
    className: "first:translate-y-16 last:translate-y-16",
  },
  {
    icon: icon2,
    heading: "Brooklyn Foster",
    subHeading: "Suited Connector",
    text: "I’ve worked with AR Media House, Inc. since 2018 from both the advertising and lead generation sides of the business. They are highly versatile marketers that are able to play at a high level in both the Media Buying and Lead generation space. Idea Clan brings a depth of experience, skills, and access to resources that instantly gives them an edge over other marketers — allowing them to bring enormously high revenue and ROIs for those who partner with him.",
    className: "first:translate-y-16 last:translate-y-16",
  },
];


const blogsList = [
  {
    heading: "Some Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  },{
    heading: "Our Success Story",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  }, {
    heading: "Say Hello to Our Team",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  }, {
    heading: "Some Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  }, {
    heading: "AR Media House's Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
  }
]