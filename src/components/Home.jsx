import React from "react";
import ClickCounter from "./ClickCounter";
import HoverCounter from "./HoverCounter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center text-2xl">
        <h1 className=" text-black sm:text-2xl">
          {" "}
          Codez Logic Devlopment Services.
        </h1>
      </div>
      <div className="flex flex-col">
        <ClickCounter name="Click Counter" />

        <HoverCounter name="Hover Counter" />
      </div>
    </div>
  );
}
