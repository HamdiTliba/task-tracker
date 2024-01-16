import React from "react";

const AddTask = ({ type, date, onDelete, onTaskClick }) => {
  return (
    <div className="add-task" onClick={onTaskClick}>
      <div>
        <h2>{type}</h2>
        <p>{date}</p>
      </div>
      <button onClick={onDelete}>delete</button>
    </div>
  );
};

export default AddTask;
