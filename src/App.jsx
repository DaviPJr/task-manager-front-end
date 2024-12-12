import axios from "axios";
import { useEffect, useState } from "react";

import TaskItem from "./components/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://task-manager-davi-e56224ebcdf9.herokuapp.com/tasks"
      );
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task.description}
            isCompleted={task.isCompleted}
          />
        );
      })}
    </>
  );
}

export default App;
