import React, { useState, useRef } from "react";
import Email from "../components/Login/Email";
import LoginHero from "../components/Login/LoginHero";
import { Link, useNavigate } from "react-router-dom";
import useGeneral from "../context/GeneralContext";
import Logo from "../svg/Logo";
import Swal from "sweetalert2";

const Login = () => {
  const { resetPassword } = useGeneral();
  const navigate = useNavigate();

  //* States
  const [inputting, setInputting] = useState(false);
  const [error, setError] = useState("");

  // //* Input Field Reference
  const emailRef = useRef(null);

  // //* Handle Form Submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    //* Input Field Values
    const emailVal = emailRef.current.value;

    try {
      setError("");
      setInputting(true);
      await resetPassword(emailVal);
      const swalResult = await Swal.fire({
        title: "Success",
        text: "Instructions have been sent to your email",
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
      }
    } catch (error) {
      // Invalid Email
      if (error.code === "auth/invalid-email") {
        setError("Invalid Email. Please try again.");
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
          <div className="flex grow flex-col items-center justify-center">
            <Logo width={"110"} height={"110"} />
            <p className="pt-2 text-2xl font-bold uppercase text-secondary">
              Reset Password
            </p>
            <p className="w-[65%] min-w-[300px] text-center text-colorText  lg:w-[60%]">
              Enter the email address associated with your account and we'll
              send you a link to reset your password
            </p>
          </div>

          {/* Login Form Input */}
          <div className="flex flex-col items-center justify-center gap-4 py-4 text-secondary">
            {/* Error Message Box */}
            {error && (
              <p className="fadeIn bg-danger w-[65%] min-w-[300px] rounded-md bg-red-600 p-3  text-center font-medium  text-colorText lg:w-[50%]">
                {error}
              </p>
            )}

            <Email ref={emailRef} />
          </div>

          {/* Login Form Login Button */}
          <div className="flex grow flex-col items-center gap-3">
            <button
              className="btn-hover w-[65%] min-w-[300px] rounded-md bg-secondary p-2 font-semibold text-primary lg:w-[50%]"
              type="submit"
              disabled={inputting}
            >
              Continue
            </button>
            <p className="text-colorText">
              Return to{" "}
              <Link to="/signup" className="text-secondary">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
