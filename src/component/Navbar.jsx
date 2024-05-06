import { Link, useLocation } from "react-router-dom";
import LogoKBC from "../Image/KBC-Logo_1594107681 2.png";
import Button from "./Button";

const Navbar = () => {
  const location = useLocation();
  let home = "";

  if (location.pathname !== "/") {
    home = "Home";
  }

  return (
    <>
      <div className="sticky flex p-2 bg-primary w-auto items-center px-10 top-0 text-sm">
        <div className="flex-auto">
          <img src={LogoKBC} alt="gambar" className="h-12 max-sm:h-9" />
        </div>
        <div className="flex-auto items-center">
          <div className="flex justify-between items-center max-sm:hidden font-medium">
            <Link to="/">
              <h1>{home}</h1>
            </Link>
            <Link to="/AboutUs">
              <h1>About Us</h1>
            </Link>
            <Link to="/Story">
              <h1>Story</h1>
            </Link>
            <Link to="/Event">
              <h1>Event</h1>
            </Link>
            <Link to="/Media">
              <h1>Media</h1>
            </Link>
            <Link to="/VisitUs">
              <h1>Visit Us</h1>
            </Link>
            <Link>
              <h1>Donate</h1>
            </Link>
            <Link>
              <Button
                idButton="RegisterLogin"
                nameButton="Daftar/Login"
              />
            </Link>
          </div>
          <div className="sm:hidden grid gap-1 justify-items-end">
            <button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
