import "./styles.css";
import HomePage from '../HomePage'

export default function App() {
  //  Create the HTML using JSX for the App component
  return (
    <>
      <nav>
          <h1>Plant Parenthood</h1>
      </nav>
      {<HomePage />}
    </>
  );
}
