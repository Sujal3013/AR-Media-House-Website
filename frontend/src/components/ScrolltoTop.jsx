import React, { useState, useEffect, useRef } from "react";

const ScrolltoTop = () => {
  const [scrollValue, setScrollValue] = useState(0);
  const scrollProgressRef = useRef(null);
  const progressValueRef = useRef(null);

  const calcScrollValue = () => {
    const pos = window.scrollY || document.documentElement.scrollTop;
    const calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const value = Math.round((pos * 100) / calcHeight);
    setScrollValue(value);
  };

  useEffect(() => {
    const handleScroll = () => {
      calcScrollValue();
      if (window.pageYOffset > 100) {
        scrollProgressRef.current.style.display = "grid";
      } else {
        scrollProgressRef.current.style.display = "none";
      }
      scrollProgressRef.current.style.background = `conic-gradient(#000 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call the function initially to set the initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollValue]);

  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <div
      ref={scrollProgressRef}
      className="bg-secondary-500 fixed bottom-5 right-4 h-10 w-10 hidden place-items-center rounded-full shadow-xl cursor-pointer"
      onClick={scrollToTop}
    >
      <span
        ref={progressValueRef}
        className=" h-[calc(100%-5px)] w-[calc(100%-5px)] bg-primary-500 rounded-full grid place-items-center text-2xl text-black"
      >
        &#x1F815;
      </span>
    </div>
  );
};

export default ScrolltoTop;
