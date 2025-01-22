import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const { data } = await axios.get(
        "https://task-manager-backend-u0gw.onrender.com/tasks"
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
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>

      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.completed === false)
            .map((lastTask, index) => (
              <p key={index}>{lastTask.description}</p>
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.completed)
            .map((completedTask, index) => (
              <p key={index}>{completedTask.description}</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
