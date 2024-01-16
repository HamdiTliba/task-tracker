import { useState } from "react";
import AddTask from "./AddTask";

const TaskTracker = () => {
  let tasks = [{ date: "", task: "" }];
  const [taskList, setTaskList] = useState(tasks);
  const [newTask, setNewTask] = useState({
    date: "",
    type: "",
    completed: "",
  });
  const handleChangeType = (e) => {
    setNewTask({ ...newTask, type: e.target.value });
    console.log(newTask.type);
  };
  const handleChangeDate = (e) => {
    setNewTask({ ...newTask, date: e.target.value });
    console.log(newTask.date);
  };
  const addNewtask = () => {
    setTaskList([...taskList, { date: newTask.date, type: newTask.type }]);
  };
  const onDeleteTask = (e) => {
    window.confirm("Are you sure you want to delete?") &&
      e.target.parentElement.remove();
  };
  const handleComplete = (e) => {
    e.target.classList.toggle("completed");
  };
  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "30px",
        paddingRight: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}>
      <div className="table-key">
        <h1>Date</h1>
        <h1>Task</h1>
      </div>
      <div className="table-value">
        <input
          type="datetime-local"
          value={newTask.date}
          onChange={handleChangeDate}
        />

        <input
          type="text"
          value={newTask.type}
          placeholder="add here"
          onChange={handleChangeType}
        />
        <button onClick={addNewtask}>+ Add</button>
      </div>
      {taskList.map((tas, i) => {
        return tas.date !== "" && tasks.type !== "" ? (
          <AddTask
            key={i}
            type={tas.type}
            date={tas.date}
            onDelete={onDeleteTask}
            onTaskClick={handleComplete}
          />
        ) : null;
      })}
    </div>
  );
};

export default TaskTracker;
