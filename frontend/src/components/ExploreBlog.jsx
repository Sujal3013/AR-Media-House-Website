import classNames from "classnames";
import { Heading } from "./";
import { useState } from "react";

export default function ExploreBlog({list, className}) {
  const [blogNumber, setBlogNumber] = useState(0);

  const classes = classNames("bg-tertiary-500 px-screen-padding py-8 flex flex-col items-center", {
    [className]: className,
  })

  return (
    <section className={classes}>
      <Heading
        heading="Explore Our"
        subHeading="Blogs"
        className="items-center"
      />
      <div className="w-full py-8 flex items-center justify-between gap-4">
          <img 
            src={`./assets/leftArrow${blogNumber<=0 ? "Gray": ""}.png`}
            alt="left-arrow" 
            onClick={()=>{
              if(blogNumber > 0) 
              setBlogNumber(blogNumber-1)
            }}
            className="h-8 cursor-pointer"
          />
        <ul className="w-full flex justify-between items-center gap-4 overflow-hidden">
          {
            list.slice(blogNumber, blogNumber + 3).map((blog, index)=>{
              return (
                  <li className="w-[24vw] p-4 text-secondary-500 bg-white rounded shadow flex flex-col items-start gap-2">
                      <div className="h-40 w-full rounded border-2"></div>
                      <h1 className="font-semibold">{blog.heading}</h1>
                      <p className="text-xs">{blog.text}</p>
                  </li>
              )
            })
          }
        </ul>
        <img 
          src={`./assets/rightArrow${blogNumber+3 >= list.length ? "Gray": ""}.png`}
          alt="right-arrow" 
          onClick={()=>{if(blogNumber+3 < list.length) setBlogNumber(blogNumber+1)}}
          className="h-8 cursor-pointer"
        />
      </div>
    </section>
  )
}
