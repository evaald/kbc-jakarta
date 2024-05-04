import { useLocation } from "react-router-dom";
import Button from "../component/Button";
import Navbar from "../component/Navbar";

const Header = (props) => {
  const location = useLocation();
  let judulHeader = "";
  let button = "";

  if (location.pathname === "/") {
    judulHeader = "KINGDOM BUSINESS COMMUNITY";
    button = (
      <Button
        idButton="AboutUs"
        nameButton="ABOUT US"
        backgroundColorButton="#be8511"
        buttonFontWeight="bold"
      />
    );
  } else if (location.pathname === "/Story") {
    judulHeader = "STORY";
  } else if (location.pathname === "/Event") {
    judulHeader = "WHAT'S HAPPENING";
  } else if (location.pathname === "/Media") {
    judulHeader = "MEDIA";
  } else if (location.pathname === "/VisitUs") {
    judulHeader = "VISIT US";
  }

  return (
    <>
      <div class="flex flex-col">
        <Navbar />
        <div
          class="flex text-white center flex-col m-auto text-center font-bold"
          style={{ fontSize: "50px" }}
        >
          <h1 class="m-auto w-2/4">{judulHeader}</h1>
          <div>{button}</div>
        </div>
      </div>
    </>
  );
};

export default Header;
