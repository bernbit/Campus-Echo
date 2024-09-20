import React, { useState, useRef } from "react";
import Email from "../components/Login/Email";
import Password from "../components/Login/Password";
import LoginHero from "../components/Login/LoginHero";
import { Link, useNavigate } from "react-router-dom";
import useGeneral from "../context/GeneralContext";
import Swal from "sweetalert2";
import Logo from "../svg/Logo";

function Signup() {
  const { signup } = useGeneral();
  const navigate = useNavigate();

  //* Input Field Reference
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const [inputting, setInputting] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    //* Input Field Values
    const emailVal = emailRef.current.value;
    const passwordVal = passwordRef.current.value;
    const confirmpasswordVal = confirmPasswordRef.current.value;

    if (passwordVal !== confirmpasswordVal) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setError("");
      setInputting(true);
      // await signup(emailVal, passwordVal);
      const swalResult = await Swal.fire({
        title: "Success",
        text: "Thanks for signing up! You can now log in.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#15F5BA",
        position: "center",
        background: "#0F2634",
        color: "#ffff",
        customClass: {
          container: "custom-swal-container",
          popup: `custom-modal-box swal-custom-padding`,
        },
      });

      if (swalResult.isConfirmed) {
        navigate("/login");
        emailRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
      }

      console.log("Successfully signup");
    } catch (error) {
      // Invalid Email
      if (error.code === "auth/invalid-email") {
        setError("Invalid Email. Please try again.");
      }
      // Email Already Registered
      if (error.code === "auth/email-already-in-use") {
        setError("Email already registered");
      }
      // Weak Password
      if (error.code === "auth/weak-password") {
        setError("Password must be at least 6 characters");
      }
    }

    setInputting(false);
  };

  return (
    <main className="bg-login h-screen w-screen shadow-white md:p-16 lg:px-40">
      <div className="h-full w-full overflow-hidden md:flex md:rounded-xl ">
        <LoginHero />

        <div className="bg-extra"></div>

        {/* Signup Form   */}
        <form
          className=" flex h-full basis-[55%] flex-col bg-primary"
          onSubmit={handleSubmit}
        >
          {/* Login Form Header */}
          <div className=" flex grow flex-col items-center justify-center">
            <Logo width={"110"} height={"110"} />
            <p className="pt-2 text-2xl font-bold uppercase text-secondary">
              Sign Up
            </p>
            <p className="text-colorText">Let's create your account</p>
          </div>

          {/* Login Form Input */}
          <div className=" flex grow flex-col items-center justify-center gap-3 text-secondary">
            {/* Error Message Box */}
            {error && (
              <p className="fadeIn bg-danger w-[65%] min-w-[300px] rounded-md bg-red-600 p-3  text-center font-medium  text-colorText lg:w-[50%]">
                {error}
              </p>
            )}

            <Email ref={emailRef} />
            <Password ref={passwordRef} />
            <Password
              ref={confirmPasswordRef}
              placeholder={"Confirm Password"}
            />
          </div>

          {/* Login Form Login Button */}
          <div className="flex grow flex-col items-center gap-3">
            <button
              className="btn-hover w-[65%] min-w-[300px] rounded-md bg-secondary p-2 font-semibold text-primary lg:w-[50%]"
              type="submit"
              disabled={inputting}
            >
              Signup
            </button>
            <p className="text-colorText">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary">
                Login Here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
