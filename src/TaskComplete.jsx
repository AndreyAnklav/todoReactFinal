import React from "react";

const TaskComplete = ({ taskComplete }) => {
  return (
      <div className="tasks-completed">
          Выполнено <span>{taskComplete}</span>  
      </div>
  );
};
export default TaskComplete;