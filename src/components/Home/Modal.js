import React from "react";
import { MdClose } from "react-icons/md";

function Modal({ children, closeModal, title }) {
  return (
    <div
      className="relative z-40"
      aria-labelledby="crop-image-dialog"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-stone-900 bg-opacity-75 backdrop-blur-sm transition-all"></div>

      <div className="fixed inset-0 z-20 m-auto h-fit w-11/12 rounded-xl bg-primary p-3 md:w-7/12 md:p-6">
        <div className="flex">
          <div className="grow px-3 py-2 text-lg font-semibold text-white">
            {title}
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md   text-2xl text-gray-400 hover:bg-gray-700 focus:outline-none"
            onClick={closeModal}
          >
            <MdClose className="text-white" />

            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default Modal;
