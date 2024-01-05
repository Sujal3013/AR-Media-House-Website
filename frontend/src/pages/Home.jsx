import { Button, Heading, HeroSectionWrapper } from "../components";

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
          <p className="my-8">
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
        <div  className="w-[35vw] h-[50vh] bg-tertiary-500 my-8 rounded">

        </div>
      </HeroSectionWrapper>


      {/* Companies Section */}
      <div className="flex justify-center items-center py-6 px-screen-padding">
        <h1 className="text-gray-500 font-bold text-xl">Trusted by thousands of clients worldwide.</h1>

        
      </div>
    </>
  )
}
