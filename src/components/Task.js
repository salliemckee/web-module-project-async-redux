import React from "react";

const Task = (props) => {
  const { task } = props;
  return (
    <div className="task">
      <h3>May I Suggest: {task.activity}</h3>
      <p>Category: {task.type}</p>
      <p></p>
    </div>
  );
};

export default Task;
