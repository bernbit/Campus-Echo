import React, { forwardRef } from "react";
import { MdMail } from "react-icons/md";

const Email = forwardRef(
  (
    { showIcon = true, placeholder = "Email Address", disabled = false },
    ref,
  ) => {
    return (
      <div className="smoother inputField-States border-accentRGBA flex w-[65%] min-w-[300px] items-center  gap-3 rounded-md border p-3 lg:w-[50%] ">
        {showIcon && <MdMail className="text-2xl" />}
        <input
          className={`${
            disabled ? "opacity-50" : ""
          } text-colorText grow bg-transparent outline-none`}
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          required
          ref={ref}
        />
      </div>
    );
  },
);

export default Email;
