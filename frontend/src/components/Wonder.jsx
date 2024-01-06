import { Heading } from "./";

const Wonder = () => {
  const gradientStyle = {"background-image": "linear-gradient(0deg, rgb(5, 13, 46) 50%, #f7f7f7 50%)"}
  return (
    <div className="pt-2 flex justify-center" style={gradientStyle}>
      <div className="z-4 flex justify-around items-center py-8 w-[80vw] h-72 rounded-[5rem] bg-white">
        <Heading
          className="py-8"
          heading="We Can do"
          subHeading="wonders for you"
        />
        <div className="h-56 w-56 bg-tertiary-500">{/* SVG OR ANIMATION */}</div>
      </div>
    </div>
  );
};

export default Wonder;
