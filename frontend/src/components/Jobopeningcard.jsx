import Button from "../components/Button"

export const Jobopeningcard = ({id=0,title, location, daysAgo }) => {
  return (
    <>
      <div className={"job-card flex flex-col md:flex-row justify-center md:justify-between items-center rounded-lg shadow-md shadow-secondary-200 p-6 md:p-10 odd:bg-white even:bg-secondary-400 odd:text-secondary-500 even:text-tertiary-500 transition-transform transform hover:scale-[1.01] md:hover:scale-[1.03] hover:cursor-pointer"}>
        <div className="text-center md:text-left text-lg sm:text-xl mb-4 md:mb-2">
          <p className="font-semibold mb-2 leading-[1.2]">{title}</p>
          {location}
        </div>
        <div>
        <div className="text-center md:text-left text-tertiary-800 text-sm sm:text-base md:text-xl mb-2 pt-1">
          <p className="ml-px inline md:block">Posted </p> 
          {daysAgo} days ago{" "}
        </div>
        </div>
        
        <Button className="bg-primary-500 text-secondary-500 rounded-lg w-full md:w-auto" to="https://forms.gle/VTeHbsMJ7RK4hhSx5" arrow>
          Apply Now
        </Button>
      </div>
    </>
  );
};
