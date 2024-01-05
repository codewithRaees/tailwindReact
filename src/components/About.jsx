import React, { useState } from "react";

const About = () => {
  const [todosList, setTodosList] = useState([]);
  console.log(todosList);
  return (
    <div>
      <h1 className="flex  justify-center justify-items-center ">
        Welcome to Codez Logic Devlopment Services.
      </h1>
      <button
        className="bg-green-400"
        onClick={() =>
          import("./data").then((module) => setTodosList(module.todos))
        }
      >
        Load Todos
      </button>
      <ul>
        {todosList.map((singletodo) => (
          <li key={singletodo.id}>{singletodo.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
