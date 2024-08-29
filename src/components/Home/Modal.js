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
      <div className="fixed inset-0 z-10 w-full">
        <div className="flex min-h-screen justify-center px-2 py-12 text-center ">
          {/* Modal Box */}
          <div className="relative max-h-[84vh]  w-[100%] overflow-y-auto  rounded-2xl bg-primary text-left text-slate-100 shadow-xl transition-all sm:w-[65%]  md:min-h-[60vh]">
            <div className="flex h-full flex-col gap-y-2 px-5 py-5">
              {/* Modal Heaeder   */}
              <div className="flex px-1 py-2 md:px-2">
                <div className="grow text-lg font-semibold">{title}</div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md   text-2xl text-gray-400 hover:bg-gray-700 focus:outline-none"
                  onClick={closeModal}
                >
                  <MdClose />

                  <span className="sr-only">Close menu</span>
                </button>
              </div>

              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
