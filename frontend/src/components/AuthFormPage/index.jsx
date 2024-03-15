import { useState } from "react";
import { logIn, signUp } from "../../../utils/backend";
import { useNavigate } from "react-router-dom";

export default function AuthFormPage({ setLoginStatus }) {
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
    setLoginStatus(true);
    event.preventDefault();
    const { token } = await logIn(logInData);
    localStorage.setItem("userToken", token);
    navigate("/");
  }
  async function handleSubmitSignUp(event) {
    setLoginStatus(true);
    event.preventDefault();
    const { token } = await signUp(signUpData);
    localStorage.setItem("userToken", token);
    navigate("/");
  }

  return (
    <>
      {showSignUp ? (
        <form
          className="flex flex-col justify-center rounded mx-10 mt-10 bg-[#0F6359]"
          onSubmit={handleSubmitLogin}
        >
          <div className="mb-1 flex flex-col gap-6 mx-10 mt-5">
            <h3 className="-mb-3 font-bold text-white"> Email</h3>
            <input
              className="rounded py-3"
              id="email"
              type="email"
              name="email"
              required
              placeholder="email"
              value={logInData.email}
              onChange={handleLogInChange}
            />
            <h3 className="-mb-3 font-bold text-white"> Password</h3>
            <input
              className="rounded py-3"
              id="password"
              type="password"
              name="password"
              minLength="6"
              required
              placeholder="password"
              value={logInData.password}
              onChange={handleLogInChange}
            />
          </div>

          <button
            className="mt-6 bg-[#C7F07F] rounded  py-2 font-bold"
            type="submit"
          >
            Login
          </button>
        </form>
      ) : (
        <form
          className="flex flex-col justify-center rounded mx-10 mt-10 bg-[#0F6359]"
          onSubmit={handleSubmitSignUp}
        >
          <div className="mb-1 flex flex-col gap-6 mx-10 mt-5">
            <h3 className="-mb-3 font-bold text-white"> First Name</h3>
            <input
              className="rounded py-3 "
              id="name"
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              value={signUpData.firstName}
              onChange={handleSignUpChange}
            />

            <h3 className="-mb-3 font-bold text-white"> Username</h3>
            <input
              className="rounded py-3"
              id="userName"
              type="text"
              name="userName"
              required
              placeholder="Username"
              value={signUpData.userName}
              onChange={handleSignUpChange}
            />
            <h3 className="-mb-3 font-bold text-white"> Email</h3>
            <input
              className="rounded py-3"
              id="email"
              type="email"
              name="email"
              required
              placeholder="Email"
              value={signUpData.email}
              onChange={handleSignUpChange}
            />
            <h3 className="-mb-3 font-bold text-white"> Password</h3>
            <input
              className="rounded py-3"
              id="password"
              type="password"
              name="password"
              minLength="6"
              required
              placeholder="Password, 6 characters or more"
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
          </div>

          <button
            className="mt-6 bg-[#C7F07F] rounded  py-2 font-bold "
            type="submit"
          >
            Sign Up
          </button>
        </form>
      )}
      <div className="flex justify-center">
        <button
          className="text-gray-500 mt-5 font-bold"
          onClick={() => setShowSignUp(!showSignUp)}
        >
          {showSignUp ? "Not Yet a User? Sign Up" : "Already a User? LogIn"}
        </button>
      </div>
    </>
  );
}
