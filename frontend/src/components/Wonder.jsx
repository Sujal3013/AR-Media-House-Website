import { Heading,Button, Circle } from "./";

const Wonder = () => {
  const gradientStyle = {"backgroundImage": "linear-gradient(0deg, #080403 50%, #f4f4f4 50%)"}
  return (
    <div className="pt-4 flex justify-center relative" style={gradientStyle}>
      <div className="z-4 flex justify-around items-center py-8 w-[80vw] h-72 rounded-[5rem] bg-white relative">
        <div className="h-1/2 absolute w-full top-0 rounded-t-[5rem] shadow-xl" style={{boxShadow: "#DDDDDD 8px -8px 10px, #DDDDDD -8px -8px 10px"}}></div>
        <div className="flex flex-col justify-center">
        <Heading
          className="py-8"
          heading="We Can do"
          headingClassName="text-[64px] text-primary-500"
          subHeading="wonders for you"
        />
        <Button to="/contact" arrow className="bg-primary-500">Let's Work Together</Button>
        </div>
        
        <div className="h-auto w-auto bg-tertiary-500"><img src="/assets/wonders_image.png" alt="" /></div>
      </div>

      {/* Shapes */}
      <Circle className="top-[-8%] right-[4%]" />
    </div>
  );
};

export default Wonder;
