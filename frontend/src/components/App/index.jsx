import "./styles.css";
import HomePage from "../HomePage";
import { Routes, Route, Link } from "react-router-dom";
import DetailsPage from "../DetailsPage";
import AuthFormPage from "../AuthFormPage";
import { useEffect, useState } from "react";
import banner from "../../assets/deeper_green_banner.png";

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  //  Create the HTML using JSX for the App component

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setLoginStatus(true);
    }
  }, []);

  let authLink = (
    <Link to="/auth">
      <button className="h-8 px-4 m-2 text-white font-bold transition-colors duration-150 bg-[#C2AD97] rounded focus:shadow-outline hover:bg-[#0F6359] hover:text-[#EDFFCF]">
        Log In | Sign Up
      </button>
    </Link>
  );

  if (loginStatus) {
    authLink = (
      <button
        className="h-8 px-5 m-2 text-[#0F6359] font-bold transition-colors duration-150 bg-[#EDFFCF] rounded-sm focus:shadow-outline hover:bg-[#0F6359] hover:text-[#EDFFCF]"
        onClick={() => {
          localStorage.clear("userToken");
          setLoginStatus(false);
        }}
      >
        Log Out
      </button>
    );
  }
  return (
    <>
      <div className="w-screen">
        <img className=" w-screen" src={banner} alt="" />
      </div>
      <nav className="flex items-center justify-between h-[8vh] bg-[#0F6359] shadow-lg lg:px-9 md:px-6 px-3">
        <Link to="/">
          <h1 className="font-bold font-mono text-white">Home</h1>
        </Link>

        {authLink}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route
          path="/auth/"
          element={<AuthFormPage setLoginStatus={setLoginStatus} />}
        />
      </Routes>
      <footer className="bg-[#0F6359] mt-5 h-[4vh] text-center text-white">
        {" "}
        Plant Parenthood
      </footer>
    </>
  );
}
