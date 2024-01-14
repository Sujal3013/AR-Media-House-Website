import Button from "../components/Button"

export const Jobopeningcard = ({id=0,title, location, daysAgo }) => {
  return (
    <>
      <div className={"job-card flex rounded-lg shadow-md shadow-secondary-200 justify-between items-center p-10 odd:bg-white even:bg-tertiary-500 transition-transform transform hover:scale-[1.03] hover:cursor-pointer"}>
        <div className="text-xl text-secondary-500 mb-2">
          <p className="font-semibold mb-4">{title}</p>
          {location}
        </div>
        <div>
        <div className="text-secondary-300 text-xl mb-2 pt-1">
          <p className="ml-px">Posted</p> 
          {daysAgo} days ago{" "}
        </div>
        </div>
        
        <Button className="bg-primary-500 rounded-lg" arrow>
          Apply Now
        </Button>
      </div>
    </>
  );
};
