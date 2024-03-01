import { useState } from "react";
import { logIn, signUp } from "../../../utils/backend";
import { useNavigate } from "react-router-dom";

export default function AuthFormPage() {
  const [showSignUp, setShowSignUp] = useState(false);

  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    userName: "",
    firstName: "",
  });

  const navigate = useNavigate();

  function handleLogInChange(event) {
    setLogInData({ ...logInData, [event.target.name]: event.target.value });
  }
  function handleSignUpChange(event) {
    setSignUpData({ ...signUpData, [event.target.name]: event.target.value });
  }


  async function handleSubmitLogin(event) {
    event.preventDefault();
    const { token } = await logIn(logInData);
    localStorage.setItem("userToken", token);
    navigate("/");
  }
  async function handleSubmitSignUp(event) {
    event.preventDefault();
    const { token } = await signUp(signUpData);
    localStorage.setItem("userToken", token);
    navigate("/");

  }

  return (
    <>
      <button onClick={() => setShowSignUp(!showSignUp)}>
        {showSignUp ? "Log In" : "Sign Up"}
      </button>

      {showSignUp ? (
        <form onSubmit={handleSubmitLogin}>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="email"
            value={logInData.email}
            onChange={handleLogInChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            minLength="6"
            required
            placeholder="password"
            value={logInData.password}
            onChange={handleLogInChange}
          />

          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitSignUp}>
          <input
            id="name"
            type="text"
            name="firstName"
            required
            placeholder="First Name"
            value={signUpData.firstName}
            onChange={handleSignUpChange}
          />
          <input
            id="userName"
            type="text"
            name="userName"
            required
            placeholder="Username"
            value={signUpData.userName}
            onChange={handleSignUpChange}
          />
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="email"
            value={signUpData.email}
            onChange={handleSignUpChange}
          />
          <input
            id="password"
            type="password"
            name="password"
            minLength="6"
            required
            placeholder="password"
            value={signUpData.password}
            onChange={handleSignUpChange}
          />

          <button type="submit">Sign Up</button>
        </form>
      )}
    </>
  );
}
