import { Heading,Button, Circle } from "./";
import classNames from "classnames";

const Wonder = ({linearGradient, className, shapeClassName}) => {
  if(linearGradient === undefined) 
    linearGradient = {"backgroundImage": "linear-gradient(0deg, #080403 50%, #f4f4f4 50%)"}

  const classes = classNames("z-4 flex justify-around items-center py-8 w-[80vw] h-56 sm:h-72 rounded-[2rem] md:rounded-[4rem] lg:rounded-[5rem] bg-white relative overflow-hidden", {
    [className]: className,
  })

  const shapeClasses = classNames("top-[-8%] right-[4%]", {
    [shapeClassName]: shapeClassName,
  })
  return (
    <div className="pt-4 flex justify-center relative" style={linearGradient}>
      <div className={classes}>
        <div className="h-1/2 absolute w-full top-0 shadow-xl" style={{boxShadow: "#DDDDDD 8px -8px 10px, #DDDDDD -8px -8px 10px"}}></div>
        <div className="flex flex-col justify-center sm:pl-4">
        <Heading
          className="py-8"
          heading="We Can do"
          headingClassName="sm:text-[56px] lg:text-[64px] text-primary-500"
          subHeading="wonders for you"
        />
        <Button to="/contact" arrow className="bg-primary-500">Let's Work Together</Button>
        </div>
        
        <div className="bg-tertiary-500 h-[23rem] w-96 hidden md:block"><img src="/assets/wonders_image.gif" alt=""/></div>
      </div>

      {/* Shapes */}
      <Circle className={shapeClasses} />
    </div>
  );
};

export default Wonder;
