import React from "react";
import { Button, RoundedCornersSection, Heading,StoryComponent,Section } from "../components";

export default function About() {
  document.querySelector("title").innerHTML = "About - AR Media House";
  return (
    <div className="mt-20">
      <div className=" h-[85vh] flex items-center justify-center text-white">
        <div className="text-center items-center">
          <h1 className="text-7xl font-jost font-extrabold mb-4 text-primary-500 leading-3">
            GET TO
          </h1>
          <p className="text-[54px] font-bold font-playfair-display text-secondary-500">
            know us better
          </p>
          <Button
            arrow
            className="bg-primary-500 text-secondary-500 mx-auto mt-4"
          >
            Read our Story
          </Button>
          <img
            className=" relative bottom-[-1rem] h-[25rem] mt-4"
            src="/assets/About_banner.svg"
            alt="Img"
          />
        </div>
      </div>
      <RoundedCornersSection
        className="bg-secondary-500 relative flex justify-between items-center px-screen-padding py-20"
        behindBackground="bg-tertiary-500"
      >
        <div className="flex-col justify-center items-start">
          <Heading
          className="my-6"
            heading="A Bumpy Road"
            subHeading="to success"
            subHeadingClassName="text-white"
          />
          <p className="text-white w-[40rem]">
            Starting from an idea that emerged into the minds of two young
            friends, Rohit Ajmani and Sahil Walia while still in college
            exchanged their thoughts on creating something on their own. From
            successfully launching their first website, Newton007 to interacting
            with some of the most leading marketing intellectuals, they have
            come a long way and now have a better vision of enabling Idea Clan
            to turn into a Unicorn – a Billion dollar vision.
          </p>
        </div>
        <img src="./assets/Youtube_Video.svg" alt="" className="px-6"  />
      </RoundedCornersSection>
      <section className="bg-tertiary-500">
      <StoryComponent 
      heading="The journey begins"
      text="In 2020, Harish Parihar embarked on a solo journey, offering digital
      marketing services to local clients as a freelancer. This phase served
      as his foundational period, providing valuable insights into the basic
      structures of digital marketing. As he navigated through projects, his
      clientele steadily grew, laying the groundwork for what was to come."
      Image={<div className="rounded-full text-center w-[40vw] h-auto">
      <img src="/assets/Story_pic.png" alt=""  className=""/>
    </div>}
    direction={1}
    Year={2020}
      ></StoryComponent>
      <StoryComponent 
      heading="The journey begins"
      text="In 2020, Harish Parihar embarked on a solo journey, offering digital
      marketing services to local clients as a freelancer. This phase served
      as his foundational period, providing valuable insights into the basic
      structures of digital marketing. As he navigated through projects, his
      clientele steadily grew, laying the groundwork for what was to come."
      Image={<div className="rounded-full text-center w-[40vw] h-auto">
      <img src="/assets/Story_pic.png" alt=""  className=""/>
    </div>}
    direction={-1}
    Year={2021}
      />
      <StoryComponent 
      heading="The journey begins"
      text="In 2020, Harish Parihar embarked on a solo journey, offering digital
      marketing services to local clients as a freelancer. This phase served
      as his foundational period, providing valuable insights into the basic
      structures of digital marketing. As he navigated through projects, his
      clientele steadily grew, laying the groundwork for what was to come."
      Image={<div className="rounded-full text-center w-[40vw] h-auto">
      <img src="/assets/Story_pic.png" alt=""  className=""/>
    </div>}
    direction={1}
    Year={2022}
      />
      <StoryComponent 
      heading="The journey begins"
      text="In 2020, Harish Parihar embarked on a solo journey, offering digital
      marketing services to local clients as a freelancer. This phase served
      as his foundational period, providing valuable insights into the basic
      structures of digital marketing. As he navigated through projects, his
      clientele steadily grew, laying the groundwork for what was to come."
      Image={<div className="rounded-full text-center w-[40vw] h-auto">
      <img src="/assets/Story_pic.png" alt=""  className=""/>
    </div>}
    direction={-1}
    Year={2023}
      />
      <StoryComponent 
      heading="The journey begins"
      text="In 2020, Harish Parihar embarked on a solo journey, offering digital
      marketing services to local clients as a freelancer. This phase served
      as his foundational period, providing valuable insights into the basic
      structures of digital marketing. As he navigated through projects, his
      clientele steadily grew, laying the groundwork for what was to come."
      Image={<div className="rounded-full text-center w-[40vw] h-auto">
      <img src="/assets/Story_pic.png" alt=""  className=""/>
    </div>}
    direction={1}
    Year={2024}
      />
      <img src="./assets/Wave-white.svg" alt="" className="w-full" />
      </section>
      
      <Section
      heading="We are a team of"
      subHeading="focused individuals"
      text="We’ve established a people-focused workplace and their contributions
      have had a great impact on the company’s overall mission."
      backgroundClassName="py-16"
      textClassName="w-[40vw] py-6"
      illustration={<div className="rounded-full text-center w-[40vw] h-auto">
      <img src="/assets/Individuals_About.svg" alt=""  className=""/>
    </div>}
    Button1={
      <Button className="bg-primary-500 text-secondary-500 mt-6 mb-12" arrow>
        Let's Connect
      </Button>
    }/>


    </div>
  );
}
