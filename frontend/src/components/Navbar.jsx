import { Link, useLocation } from "react-router-dom";
import Button from "./Button";

export default function Navbar() {
  const location = useLocation().pathname;
  const phoneNumber="+918770644753"
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <nav className="bg-secondary-500 w-full py-2 flex justify-around items-center">
        <div className="flex justify-center items-center gap-1">
            <h2
                className="p-0 px-2 bg-primary-500 text-2xl text-secondary-500 rounded-full"
            >
                A
            </h2>
            <h1 
                className="inline text-tertiary-500 text-sm"
            >
                AR MEDIA HOUSE
            </h1>
        </div>

        <div className="flex items-center gap-[2.5vw]">
            {
                list.map((item, index)=> {
                    return (
                        <Link 
                            className="uppercase text-sm font-medium text-tertiary-500 relative py-1 flex justify-center"
                            to={item.to}
                        >
                            {item.title}
                            {location===item.to && <div className="bg-tertiary-500 h-[2px] w-full absolute bottom-0 m-auto"></div>}
                        </Link>
                    )
                })
            }
        </div>
        <div className="flex justify-center items-center gap-3">
            <Button to="/contact" primary className="bg-primary-500 text-secondary-500 text-sm">
                Let's Connect
            </Button>
            <img src="./assets/call-logo.svg" onClick={handlePhoneClick} alt="call" className="w-8 h-8" />
        </div>
    </nav>
  )
}


const list = [{
        title: "Home",
        to:"/",
    }, {
        title: "Technology",
        to: "/technologies"
    }, {
        title: "Case Study",
        to: "/case-studies",
    }, {
        title: "Services",
        to: "/services",
    }, {
        title: "About",
        to: "/about",
    }, {
        title: "Careers",
        to: "/careers",
    }, 
]