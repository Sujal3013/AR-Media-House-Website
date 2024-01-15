import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../components";

const IndividualCaseStudy = () => {
  const { name } = useParams();
  document.querySelector("title").innerHTML = `Case Study - ${name}`;
  const blog = blogs.find((blog) => blog.name === name);
  return (
    <div>
      {blog ? (
        <>
          <div
            className={`h-[80vh] w-full bg-slate-200 bg-[url('/assets/Case-Study-Individual.png')] mb-4 bg-cover bg-no-repeat flex items-center justify-center`}
          >
            <div className="text-center items-center text-white">
              <p className="mb-4 border border-solid border-white inline-block px-4 text-lg py-2">
                Content Marketing
              </p>
              <h1 className="w-[24rem] font-jost text-xl">{blog.name}</h1>
            </div>
          </div>
          <div className="px-[12rem] py-4">
            {blog.description.map((content) => (
              <div className="mb-2">
                {content.heading && (
                  <h1 className="font-bold font-jost text-2xl my-2">
                    {content.heading}
                  </h1>
                )}
                {content.paragraph && (
                  <p className=" font-playfair-display text-xl">
                    {content.paragraph}
                  </p>
                )}
                {content.images && (
                  <div className="mt-3 p-4 flex gap-4 justify-between items-center">
                    {content.images?.map((image) => (
                      <img
                        src={image}
                        className="w-[27rem] h-[27rem] object-cover"
                      ></img>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="px-[12rem] mb-6">
            <div className="flex gap-2 items-center">
              <h2 className="py-1 px-3 rounded-full text-primary-500 inline bg-secondary-500 text-6xl">
                A
              </h2>
              <h1 className="text-2xl">AR MEDIA HOUSE</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="h-[100vh] w-full bg-slate-100 text-center">
          <h1 className="text-6xl font-bold text-secondary-500">404</h1>
          <p className="text-2xl text-secondary-500">Blog Not Found</p>
          <p className="mt-4 text-secondary-500">
            The blog you are looking for might be removed.
          </p>
          <Button
            to="/case-studies"
            arrow="true"
            className="bg-primary-500 text-secondary-500 text-sm mx-auto py-2 px-3 mt-3"
          >
            Back to Home
          </Button>
        </div>
      )}
    </div>
  );
};

export default IndividualCaseStudy;

const blogs = [
  {
    id: 5,
    name: "AR Trader Revolutionizes Lead Generation and Brand Awareness with AR Media House",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description: [
      {
        heading: "",
        paragraph:
          "Once upon a time, in the dynamic realm of financial education, AR Research House of Finance and Consultancy Services, affectionately known as AR Trader, embarked on a transformative journey. As a startup providing stock market education, they envisioned a future with both offline and online models. To materialise this vision, they sought the expertise of AR Media House, a distinguished digital marketing company.",
        images: [],
      },
      {
        heading: "",
        paragraph:
          "Our founders, Rohit Ajmani and Sahil Walia, seized this opportunity to enrich their understanding of the ever-evolving industry and plug into its latest trends and innovations. This conference served as a valuable platform for us to stay at the forefront of industry advancements and further propel our growth and success.",
        images: ["/assets/Case-study.svg", "/assets/Case-study.svg"],
      },
      {
        heading: "A Vision Unfolds",
        paragraph:
          "AR Trader, driven by a passion for empowering aspiring traders, aimed to create a dual educational model—offline and online. Their maiden venture would be into the realm of online education. With AR Media House as their guiding beacon, they set sail.AR Media House initiated the journey by focusing on the first objective—Leads Generation.",
        images: [],
      },
      {
        heading: "Crafting the Digital Blueprint",
        paragraph:
          "The voyage began with the creation of an online model. The first step was understanding the intricate journey of potential students, their mindset, and the nuances of targeting. A strategic Facebook advertising campaign was launched at the national level in India. The goal? To filter and target specific demographics, ensuring precision in location targeting.Student journeys were meticulously mapped, laying the groundwork for an insightful strategy.",
        images: [],
      },
      {
        heading: "The Rise of Automation",
        paragraph:
          "In a mere three months, a groundbreaking automation system emerged. Every step, from inquiry to student enrollment, danced to the rhythm of automation. AR Trader witnessed a sixfold increase in business, starting with three thriving batches. The conversion rate, initially at 3%, began its upward trajectory, marking the beginning of a successful automation era.Understanding products, working on execution, and achieving automation were the cornerstones of this monumental shift.",
        images: [],
      },
      {
        heading: "A Symphony of Growth",
        paragraph:
          "As the business burgeoned, yearly schedules were meticulously crafted. The success reached a point where the schedule dictated the enrollment and booking details of each batch. The growth was so substantial that the once-aspiring startup transformed into a thriving educational ecosystem.",
        images: [],
      },
      {
        heading:
          "Painting the Digital Canvas",
        paragraph:
          "With the lead generation mechanism humming efficiently, it was time to paint the canvas of brand awareness.AR Media House delved into daily content creation, turning social media platforms into digital canvases.Instagram, YouTube, WhatsApp, and Telegram became the conduits through which AR Trader spoke, shared, and connected.",
        images: ["/assets/Case-study.svg", "/assets/Case-study.svg"],
      },
      {
        heading: "A Digital Triumph Unfolds",
        paragraph:
          "And so, AR Trader's digital saga continued to unfold. The collaboration with AR Media House not only generated leads and built brand awareness but also ushered in an era of automation that propelled AR Trader into unprecedented growth. Every click, like, and share became a note in the symphony of success, echoing the digital triumph that AR Trader had become.",
        images: [],
      },
    ],
  },
  {
    id: 4,
    name: "Real Estate Elevates Lead Generation with AR Media",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description: [
      {
        heading: "",
        paragraph:
          "Embark on the journey of a Real Estate company seeking to revolutionise its lead generation strategy with the expertise of AR Media. Discover how strategic planning and digital prowess led to remarkable results in the realm of real estate.",
        images: [],
      },
      {
        heading: "A Vision for Lead Generation Mastery",
        paragraph:
          "Real Estate, a prominent player in the real estate industry, sought the guidance of AR Media to enhance its lead generation strategy. The primary goal was to achieve unprecedented success in WhatsApp lead generation and implement an original professional format for generating leads.",
        images: ["/assets/Case-study.svg", "/assets/Case-study.svg"],
      },
      {
        heading: "Crafting the WhatsApp Lead Generation Symphony",
        paragraph:
          "AR Media orchestrated a strategic WhatsApp lead generation symphony. The conversion rates unveiled a tale of success:WhatsApp Conversion Rate: 0.25%,Suspect to Prospect Conversion: 8-9%,Prospect Conversion: 3-4%.This chapter unravels the intricacies of the WhatsApp lead generation approach, positioning Real Estate as a frontrunner in the digital realm.",
        images: [],
      },
      {
        heading: "The Art of Original Professional Lead Generation",
        paragraph:
          "AR Media introduced an original professional format for lead generation, setting a new standard. The cost per lead reduced to 120 Rs with a conversion rate of 0.75%. This chapter delves into the creative strategies employed to maximise lead generation efficiency.",
        images: [],
      },
      {
        heading: "The Profitable Plot Endeavour",
        paragraph:
          "In just six months, Real Estate witnessed a staggering profit from the sale of 10 plots. This unprecedented success was a direct result of the meticulously planned lead generation strategies. The chapter unfolds the journey from leads to lucrative transactions.",
        images: [],
      },
      {
        heading: "Epilogue: AR Media's Lead Generation Alchemy",
        paragraph:
          "As the case study concludes, Real Estate emerges as a lead generation maestro in the real estate landscape. AR Media's alchemy, combining innovative WhatsApp strategies and original professional formats, propelled Real Estate into a realm of profitability and success.",
        images: [],
      },
    ],
  },
  {
    id: 3,
    name: "Insta Transfer's Digital Leap with AR Media House",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description: [
      {
        heading: "",
        paragraph:
          "In the bustling landscape of B2B services, Insta Transfer, a multifaceted company offering courier services, banking logistics, payments, and a revolutionary franchise model, embarked on a transformative journey with AR Media House. The challenge at hand was to generate leads and attract potential clients interested in the franchise and B2B model. AR Media House, armed with its expertise, crafted an immersive digital strategy.",
        images: [],
      },
      {
        heading: "",
        paragraph:
          "Ads strategically ran across diverse social media platforms, casting a wide net to capture the attention of businesses seeking innovative solutions. The result was an influx of leads expressing keen interest in purchasing the franchise and tapping into the dynamic B2B offerings. Insta Transfer emerged not just as a service provider but as a beacon for businesses seeking seamless digital solutions in the realm of logistics and beyond",
        images: ["/assets/Case-study.svg", "/assets/Case-study.svg"],
      },
      {
        heading: "",
        paragraph:
          "This case study exemplifies the prowess of AR Media House in transforming digital presence into tangible business opportunities for a B2B powerhouse like Insta Transfer.",
        images: [],
      },
    ],
  },
];

//Function to divide a paragraph into chuncks of lines

function divideParagraph(paragraph, linesPerPart) {
  const sentences = paragraph.split(". ");
  let result = {};

  let start = 0;
  linesPerPart.forEach((lines, index) => {
    const end = start + lines;
    const part = sentences.slice(start, end).join(". ") + ".";
    result[`part${index + 1}`] = part;
    start = end;
  });

  // Handle remaining sentences if any
  if (start < sentences.length) {
    result.remaining = sentences.slice(start).join(". ") + ".";
  }

  return result;
}

// Example usage
const paragraph =
  "This is sentence one. This is sentence two. This is sentence three. This is sentence four. This is sentence five.";
const linesPerPart = [2, 3];

const dividedParagraph = divideParagraph(paragraph, linesPerPart);
[
  {
    id: 1,
    name: "Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain: "Marketing",
    image: "/assets/Case-Study-Individual.png",
    description:
      "The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…",
  },
  {
    id: 2,
    name: "Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description:
      "The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…",
  },
  {
    id: 3,
    name: "Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description:
      "The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…",
  },
  {
    id: 4,
    name: "Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description:
      "The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…",
  },
];
