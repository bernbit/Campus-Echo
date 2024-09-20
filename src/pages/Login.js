import React, { useState, useRef } from "react";
import Email from "../components/Login/Email";
import Password from "../components/Login/Password";
import LoginHero from "../components/Login/LoginHero";
import { Link, useNavigate } from "react-router-dom";
import useGeneral from "../context/GeneralContext";
import Logo from "../svg/Logo";

const Login = () => {
  const navigate = useNavigate();

  //* States
  const [inputting, setInputting] = useState(false);
  const [error, setError] = useState("");

  // //* Input Field Reference
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  //* Get useAuth Objects
  const {
    login,
    setIsAuthenticated,
    currentUser,
    setCurrentUser,
    setIsLoading,
  } = useGeneral();

  // //* Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //* Input Field Values
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;

    try {
      setError("");
      setInputting(true);
      const userCredential = await login(emailVal, passwordVal);
      localStorage.setItem("currentUser", JSON.stringify(userCredential));
      setCurrentUser(JSON.stringify(userCredential));
      setIsAuthenticated(true);
      console.log("Successfully logged in");

      setIsLoading(true);

      setTimeout(() => {
        navigate("/");
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      // Invalid Email
      if (error.code === "auth/invalid-email") {
        setError("Invalid Email. Please try again.");
      }
      // Incorrect Password or Email
      if (error.code === "auth/invalid-credential") {
        setError("Incorrect password or email.");
      }
      if (error.code === "auth/user-not-found") {
        setError("User not found.");
      }
    }

    setInputting(false);
  };

  return (
    <main className="bg-login h-screen w-screen shadow-white md:p-16 lg:px-40">
      <div className="h-full w-full overflow-hidden md:flex md:rounded-xl ">
        <LoginHero />

        {/* Login Form   */}
        <form
          className=" flex h-full basis-[55%] flex-col bg-primary"
          onSubmit={handleSubmit}
        >
          {/* Login Form Header */}
          <div className=" flex grow flex-col items-center justify-center">
            <Logo width={"110"} height={"110"} />
            <p className="pt-2 text-2xl font-bold uppercase text-secondary">
              Welcome Back
            </p>
            <p className="text-colorText">Login to continue</p>
          </div>

          {/* Login Form Input */}
          <div className=" flex grow flex-col items-center justify-center gap-4 text-secondary">
            {/* Error Message Box */}
            {error && (
              <p className="fadeIn bg-danger w-[65%] min-w-[300px] rounded-md bg-red-600 p-3  text-center font-medium  text-colorText lg:w-[50%]">
                {error}
              </p>
            )}

            <Email ref={emailRef} placeholder="Enter: campusecho@gmail.com" />
            <Password ref={passwordRef} placeholder="Enter: campus-echo-demo" />
            <Link
              to="/resetpassword"
              className="w-[65%] min-w-[300px] text-right lg:w-[50%]"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Form Login Button */}
          <div className="flex grow flex-col items-center gap-3">
            <button
              className="btn-hover w-[65%] min-w-[300px] rounded-md bg-secondary p-2 font-semibold text-primary lg:w-[50%]"
              type="submit"
              disabled={inputting}
            >
              Login
            </button>
            <p className="text-colorText">
              New to Campus Echo?{" "}
              <Link to="/signup" className="text-secondary">
                Create an account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
