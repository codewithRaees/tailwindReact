import React, { useState } from "react";

const NewCounter = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div className="mb-4 mt-4 flex flex-col  items-center text-3xl">
      <h1 className="mb-2">{name}</h1>
      <button
        className="flex justify-center rounded bg-blue-400 px-6 py-2"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        -{" "}
      </button>
      <h1 className="">{count}</h1>
      <button
        className="flex justify-center rounded bg-blue-400 px-6 py-2"
        onClick={() => setCount(count + 1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default NewCounter;
