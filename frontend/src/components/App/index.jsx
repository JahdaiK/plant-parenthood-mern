import "./styles.css";
import HomePage from "../HomePage";
import { Routes, Route, Link } from "react-router-dom";
import DetailsPage from "../DetailsPage";
import AuthFormPage from "../AuthFormPage";

export default function App() {
  //  Create the HTML using JSX for the App component
  return (
    <>
      <nav>
        <Link to="/">
          <h1>Plant Parenthood</h1>
        </Link>
      
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/auth/" element={<AuthFormPage />} />
      </Routes>
    </>
  );
}
