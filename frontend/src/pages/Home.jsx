import { 
  Button, 
  CompaniesAnimate, 
  ClientCards, 
  ExploreBlog, 
  Heading, 
  HeroSectionWrapper, 
  RoundedCornersSection, 
  Section, 
  ServicesCards, 
  Wonder, 
} from "../components";

export default function Home() {
  document.querySelector("title").innerHTML = "AR Media House";
  return (
    <>
      <HeroSectionWrapper className="flex py-6 flex-col gap-4 items-center justify-between" home={true}>
        <div className="w-full flex justify-between items-center">
          {/* text content right side */}
          <div className="w-[45vw] my-4">
            <Heading
              heading="Digital Marketing"
              subHeading="that drives result"
              subHeadingClassName="text-tertiary-500"
            />
            <p className="text-sm my-12 w-[30vw]">
              AR Media House works with reputable global brands to deliver data-driven lead
              generation, customer acquisition, and brand awareness campaigns through 
              various digital spaces.
            </p>
            {/* Buttons */}
            <div className="flex gap-6 py-10">
              <Button arrow className="bg-primary-500 text-secondary-500">
                Let's Connect
              </Button>
              <Button className="bg-transparent border-2 border-primary-500">
                About Us
              </Button>
            </div>
          </div>
          {/* illustraion */}
          <div  className="w-auto h-auto rounded">
              <img src="/assets/Banner1.svg" alt="" />
          </div>
        </div>

        {/* Companies */}
        <div className="flex flex-col items-center justify-center ">
          <h1 className="font-bold font-jost text-3xl text-slate-200 tracking-wider my-8">Trusted by <span className="text-primary-500">thousands</span> of client worldwide</h1>
          <div className="w-[98vw] h-28 mb-8 flex justify-center items-center relative overflow-hidden">
          <CompaniesAnimate className="flex justify-center items-center gap-16">
            {
              companies.map((c, index)=>{
                return (
                  <li key={index}>
                    {c}
                  </li>
                )
              })
            }
          </CompaniesAnimate>
          </div>
        </div>
        
      </HeroSectionWrapper>  


      <Section
        backgroundClassName="bg-tertiary-500 pt-1 pb-2"
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
          <div className="rounded-full text-center w-[40vw] h-auto my-4">
            <img src="/assets/What_makes_us.svg" alt="" />
          </div>
        }
        direction={-1}
      />



      <Section
        backgroundClassName="bg-tertiary-500 pt-2 pb-10 !items-start"
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
          <div className="rounded-full text-center w-[40vw] h-auto">
            <img src="/assets/Growth_curve.svg" alt=""  className=""/>
          </div>
        }
      />

      <img
        src="./assets/wave-downward-1.svg"
        alt="wave"
        className="bg-secondary-500 w-full"
      />

      <div className="flex flex-col gap-4 bg-secondary-500 py-6 pt-0  px-screen-padding items-between">
        <Heading 
          heading="We have Got"
          subHeading="a lot to offer"
          subHeadingClassName="text-tertiary-500"
          className="items-center"
        />

        <div className="flex flex-col items-center gap-8">
          <ul className="w-full flex justify-center gap-[6vw]  py-8 relative">
            {
              services.slice(0,4).map((s, index)=>{
                return (
                    <ServicesCards key={index}  {...s} />
                )
              })
            }
          </ul>
          <ul className="w-full gap-[6vw] flex justify-center relative mb-4">
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

      <img className="w-full" src="./assets/dark-wave-1.svg" alt="wave" />

      <Section
        backgroundClassName="py-8"
        heading="We Make Your Sales"
        headingClassName="text-black"
        middleLine="GO"
        middleLineClassName="text-primary-500 my-[-4px]"
        subHeading="through the roof"
        allHeadingClassName="mb-12"
        Button1={
          <Button className="bg-primary-500 text-secondary-500 mt-6 mb-12" arrow>
            Let's Connect
          </Button>
        }
        illustration={
          <div className="rounded-full text-center w-[40vw] h-auto">
            <img src="/assets/GO_image.svg" alt=""  className=""/>
          </div>
        }
      />

      <img
        src="./assets/wave3.svg"
        alt="wave"
        className="w-full"
      />

      <section className="bg-tertiary-500 pt-8">
        <Heading
          className="items-center"
          heading="3-easy step"
          subHeading="our growth"
          headingClassName="text-primary-500 text-6xl"
          subHeadingClassName="text-secondary-500 mt-[-4px]"
        />

        <img src="./assets/1-2-3-path.svg" alt="" className="absolute h-[180vh] left-[48%] translate-x-[-60%] translate-y-[10%]"/>

        <Section
          backgroundClassName="bg-tertiary-500 py-8"
          heading="Diagnosis & Strategy"
          headingClassName="text-5xl text-secondary-500"
          subHeadingClassName="pl-1 mt-[-8px] text-5xl text-primary-500"
          subHeading="planning"
          allHeadingClassName="mt-16 mb-12"
          text="Analyzing audience online behavior and tendencies to convert and
          strategize actions for maximum revenue."
          textClassName="mb-16"
          illustration={
            <div className="rounded-full text-center w-auto h-auto">
            <img src="/assets/Diagnosis.svg" alt=""  className=""/>
          </div>
          }
          direction={-1}
        />

        <Section
          backgroundClassName="bg-tertiary-500 py-4"
          heading="Digital Foundations"
          headingClassName="text-5xl text-secondary-500"
          subHeadingClassName="pl-1 mt-[-8px] text-5xl text-primary-500"
          subHeading="test phase"
          allHeadingClassName="mt-0 mb-12"
          text="Testing multiple creatives with varied target audience settings
          and narrowing down best-performing creatives based on data
          driven strategy."
          textClassName="mb-16"
          illustration={
            <div className="rounded-full text-center w-auto h-auto">
            <img src="/assets/Foundations.svg" alt=""  className=""/>
          </div>
          }
        />

        <Section
          backgroundClassName="bg-tertiary-500 py-5"
          heading="Verify Benchmarks"
          headingClassName="text-5xl text-secondary-500"
          subHeadingClassName="pl-1 mt-[-8px] text-5xl text-primary-500"
          subHeading="scale phase"
          allHeadingClassName="mt-0 mb-12"
          text="Using in-house technology to create AI-driven strategies and increase the frequency,
          targeting, and budget for the best performing ads in order to improve revenue
          and profit."
          textClassName="mb-16"
          illustration={
            <div className="rounded-full text-center w-auto h-auto">
            <img src="/assets/BenchMarks.svg" alt=""  className=""/>
          </div>
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
        
      </RoundedCornersSection>


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
  { className: "first:absolute first:top-32 last:absolute last:top-32 last:right-0 first:left-0", icon: icon, heading: "E-commerce", text: "Innovative outbound strategies to drive more sales and traffic for your brand. Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways."},
  { className: "first:absolute first:top-32 last:absolute last:top-32 last:right-0 first:left-0", icon: icon, heading: "Performance Marketing", text: "Place ads about your company, services, or products on websites that help drive more sales in the online market."},
  { className: "first:absolute first:top-32 last:absolute last:top-32 last:right-0 first:left-0", icon: icon, heading: "Lead Generation", text: "Convert your prospects into delighted clients solely meant for your agency."},
  { className: "first:absolute first:top-32 last:absolute last:top-32 last:right-0 first:left-0", icon: icon, heading: "Media Buying", text: "We use immense technologies to determine strategy, to compile content, execute content, & analyze results."},
  { className: "shadow-lg shadow-gray-500", icon: icon, heading: "Martech", text: "A strategic marketing approach to help your valuable content reach key audiences." },
  { className: "shadow-lg shadow-gray-500", icon: icon, heading: "Content Marketing", text: "We use immense technologies to determine strategy, to compile content, execute content, & analyze results." }
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

const companies = [
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "fantasy"}}>denver</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "system-ui"}}>Angle one</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "inherit"}}>Maruti Suzuki</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "fantasy"}}>gamezy</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "system-ui"}}>WAHL</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "inherit"}}>NMIMS</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "system-ui"}}>medAce</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "fantasy"}}>SILAII</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "system-ui"}}>Arunika</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "fantasy"}}>ClickHouse</h1>,
  <h1 className="text-white text-4xl text-center leading-8" style={{"font-family": "system-ui"}}>INSTA Transfer</h1>,
];