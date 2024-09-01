import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import Hamburger from "./Hamburger";
import "../index.css";

export default function Navbar() {
  const location = useLocation().pathname;
//   CHANGE FOR RESUME
  const ownerNumber = '+919644408803'; 

  const handleWhatsappClick = () => {
    const message = encodeURIComponent('Hello! I have a question.');
    window.location.href = `https://wa.me/${ownerNumber}?text=${message}`;
  };
  return (
    <nav className="navbar">
        <div className="flex justify-center items-center gap-1">
            <img src="/assets/logoAR.png" alt="" className="w-10 h-10" />
            <h1 className="inline text-tertiary-500 text-sm">
                AR MEDIA HOUSE
            </h1>
        </div>

        {/*Hamburger Menu*/}
        <Hamburger siteMapList={list} />
        
        <div className="hidden lg:flex items-center gap-[2vw]">
            {
                list.map((item, index)=> {
                    return (
                        <Link 
                            className="uppercase nav_bar text-sm font-medium text-tertiary-500 relative py-1 flex justify-center"
                            to={item.to}
                            key={index}
                        >
                            {item.title}
                            {location===item.to && <div className="bg-primary-500 h-[1px] w-full absolute bottom-0 m-auto"></div>}
                        </Link>
                    )
                })
            }
        </div>
        <div className="hidden lg:flex justify-center items-center gap-4">
            <Button to="/contact" primary className={`${location==="/contact"?"opacity-0 transition-opacity duration-500":"bg-primary-500 transition-opacity opacity-100 duration-500 text-secondary-500 text-sm"}`}>
                Let's Connect
            </Button>
            {/* <img 
                src="/assets/whatsapp-animated.gif" 
                onClick={handleWhatsappClick} 
                alt="whatsapp connect" 
                className="p-[0.36rem] bg-white rounded-full w-10 h-10 cursor-pointer overflow-visible" 
            /> */}
        </div>
    </nav>
  )
}


const list = [{
        title: "Home",
        to:"/",
        imgSrc:"/assets/icons8-home.svg"
    }, {
        title: "Technology",
        to: "/technologies",
        imgSrc:"/assets/icons8-technology.png"
    }, {
        title: "Case Study",
        to: "/case-studies",
        imgSrc:"/assets/icons8-case-study.png"
    }, {
        title: "Services",
        to: "/services",
        imgSrc:"/assets/icons8-services.png"
    }, 
    // CHANGE FOR RESUME
    /*{
        title: "About",
        to: "/about",
        imgSrc:"/assets/icons8-about-us.svg"
    }, */{
        title: "Careers",
        to: "/careers",
        imgSrc:"/assets/icons8-career.png"
    }, 
]