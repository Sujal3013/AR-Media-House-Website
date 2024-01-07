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
    name: "Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain: "Marketing",
    image: "/assets/Case-study.svg",
    description: [
      {
        heading: "",
        paragraph:
          "The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry knowledge.",
        images: [],
      },
      {
        heading: "",
        paragraph:
          "Our founders, Rohit Ajmani and Sahil Walia, seized this opportunity to enrich their understanding of the ever-evolving industry and plug into its latest trends and innovations. This conference served as a valuable platform for us to stay at the forefront of industry advancements and further propel our growth and success.",
        images: ["/assets/Case-study.svg", "/assets/Case-study.svg"],
      },
      {
        heading: "Customer Growth And Lead Generation Strategies",
        paragraph:
          "One of the notable sessions at the conference was a fireside chat on customer growth and lead generation strategies. Esteemed panelists from renowned retailers shared their most effective marketing tactics to unlock customer growth and loyalty.",
        images: [],
      },
      {
        heading: "Increasing Performance Through New Partner Channels",
        paragraph:
          "Another session focused on improving performance through new partner channels. As affiliate and partner marketing continue to evolve, the panel of experts discussed how they manage their programs and provided a glimpse into what the future holds for this diverse and dynamic channel.",
        images: [],
      },
      {
        heading: "Brand-to-Brand Partnerships",
        paragraph:
          "Brand-to-brand partnerships also took center stage at the conference, giving attendees, including our founders, a chance to explore the potential and benefits of collaborating with other brands. This topic has gained momentum in the performance marketing industry, allowing marketers to think creatively and expand their horizons.",
        images: [],
      },
      {
        heading: "Addressing Challenges Faced By Affiliate Managers",
        paragraph:
          "The conference provided valuable insights into the challenges encountered by affiliate managers in terms of budget allocation and influencing stakeholders. Esteemed speakers from prominent organizations shared their expertise on leveraging content to effectively secure budgets and influence key stakeholders within affiliate management roles.",
        images: [],
      },
      {
        heading:
          "Unlocking Connections: Explore Limitless Networking Opportunities",
        paragraph:
          "Our founders not only acquired valuable knowledge during the event, but they also built strong relationships with other industry leaders. These connections have the potential to foster fruitful collaborations and partnerships in the future. In addition to attending informative sessions, they had the privilege of engaging in networking activities such as lunches, happy hours, and sessions dedicated solely to building connections. ",
        images: ["/assets/Case-study.svg", "/assets/Case-study.svg"],
      },
      {
        heading: "",
        paragraph:
          "Brand-to-brand partnerships also took center stage at the conference, giving attendees, including our founders, a chance to explore the potential and benefits of collaborating with other brands. This topic has gained momentum in the performance marketing industry, allowing marketers to think creatively and expand their horizons.",
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
console.log(dividedParagraph);

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
