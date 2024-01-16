import "./App.css";
import Title from "./components/Title";
import TaskTracker from "./components/TaskTracker";

function App() {
  return (
    <div className="App">
      <Title text={"Task Tracker"} classes={"title"} />
      <TaskTracker />
    </div>
  );
}

export default App;
