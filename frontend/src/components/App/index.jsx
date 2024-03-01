import "./styles.css";
import HomePage from "../HomePage";
import { Routes, Route, Link } from "react-router-dom";
import DetailsPage from "../DetailsPage";
import AuthFormPage from "../AuthFormPage";
import { useEffect, useState } from "react";

export default function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  //  Create the HTML using JSX for the App component

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setLoginStatus(true);
    }
  });

  let authLink = (
    <Link to="/auth">
      <button>Log In/Sign Up</button>
    </Link>
  );

  if (loginStatus) {
    authLink = (
      <button
        onClick={() => {
          localStorage.clear('userToken')
          setLoginStatus(false)
        }}
      >
        Log Out
      </button>
    );
  }
  return (
    <>
      <nav>
        <Link to="/">
          <h1>Plant Parenthood</h1>
        </Link>
        {authLink}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route
          path="/auth/"
          element={<AuthFormPage  />}
        />
      </Routes>
    </>
  );
}
