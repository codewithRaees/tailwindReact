import React, { Children } from "react";
import { createPortal } from "react-dom";

const Model = ({ isOpen, setisOpen, footer, header, children }) => {
  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center   bg-black/40 px-4 ${
        isOpen ? "" : "hidden"
      }`}
      onClick={() => setisOpen(false)}
    >
      <div
        className="   max-w-fit flex-1 flex-col rounded-md bg-white px-6 shadow  lg:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {header}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {children}
          <div className="mt-10 space-y-6">{footer}</div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>,
    document.getElementById("portal"),
  );
};

export default Model;
