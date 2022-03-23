import React from "react";
import data from "./data";

const Task = (props) => {
  const task = data;
  console.log(task);
  return (
    <div className="task">
      <h4>May I Suggest: {task[0].activity}</h4>
      <p>Category: {task[0].type}</p>
      <p>People Needed: {task[0].participants}</p>
    </div>
  );
};

export default Task;
