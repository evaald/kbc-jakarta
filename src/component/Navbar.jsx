import { Link, useLocation } from "react-router-dom"
import LogoKBC from "../Image/KBC-Logo_1594107681 2.png"
import Button from "./Button";

const Navbar = () => {
    const location = useLocation();
    const showMenu = window.innerWidth < 640;
    let home = ""
    
    if (location.pathname !== "/"){
        home = "Home"
    }

    return(
        <>
        <div className="flex flex-row justify-between p-2 top-0" style={{backgroundColor: "#f5eddb"}}>
            <div className="w-1/3">        
                <img
                src={LogoKBC}
                alt="gambar"
                className="h-16"
                />
            </div>
            {showMenu?(            
            <div className="flex items-center w-2/3">
                <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                
            </div>):(
                <div className="flex justify-around items-center w-2/3">
                <Link to="/"><h1>{home}</h1></Link>
                <Link to="/AboutUs"><h1>About Us</h1></Link>
                <Link to="/Story"><h1>Story</h1></Link>
                <Link to="/Event"><h1>Event</h1></Link>
                <Link to="/Media"><h1>Media</h1></Link>
                <Link to="/VisitUs"><h1>Visit Us</h1></Link>
                <Link ><h1>Donate</h1></Link>
                <Link><Button idButton="RegisterLogin" nameButton="Daftar/Login" backgroundColorButton="#be8511"/></Link>
            </div>
            )}
        </div>
        </>
    )
}

export default Navbar;
