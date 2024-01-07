import React, { useEffect, useState } from "react";
import Button from "../components/Button"

export const Jobopeningcard = ({id=0,title, location, daysAgo }) => {
  return (
    <>
      <div className={(id%2===0)?"bg-slate-100 job-card flex rounded-lg shadow-md justify-between p-10":"bg-white job-card flex rounded-lg shadow-md justify-between p-5"}>
        <div className="w-[15rem]">
        <p className="text-xl text-secondary-500 mb-2">
          <b>{title}</b>
          <br />{location}
        </p>
        </div>
        <div>
        <p className="text-gray-700 text-xl mb-2 pt-1">
          <b>Posted</b> 
          <br />{daysAgo} days ago{" "}
        </p>
        </div>
        
        <Button className="bg-primary-500 rounded-sm text-secondary-500 px-8 py-4 text-xl mr-8 h-14 my-auto">
          Apply Now
        </Button>
      </div>
    </>
  );
};
