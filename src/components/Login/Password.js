import React, { useState, forwardRef } from "react";
import { MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

const Password = forwardRef(
  ({ showIcon = true, placeholder = "Password" }, ref) => {
    const [showPass, setShowPass] = useState(false);
    const handleShowPass = () => {
      setShowPass(!showPass);
    };

    return (
      <div className="smoother inputField-States border-accentRGBA flex w-[65%] min-w-[300px] items-center gap-3 rounded-md border p-3 lg:w-[50%]">
        {showIcon && <MdLock className="text-2xl" />}
        <input
          className="text-colorText grow bg-transparent outline-none"
          type={showPass ? "text" : "password"}
          placeholder={placeholder}
          required
          ref={ref}
        />
        <div onClick={handleShowPass}>
          {showPass ? (
            <MdVisibility className="smooother btn-hover text-2xl" />
          ) : (
            <MdVisibilityOff className="smoother btn-hover text-2xl" />
          )}
        </div>
      </div>
    );
  },
);

export default Password;
