import Navbar from "../component/Navbar";

const Main = ({ children }) => {
  return (
    <div class="">
      <Navbar />
      <div className="mt-18 max-sm:mt-12z">{children}</div>
    </div>
  );
};

export default Main;
