import axios from "axios";
import { useEffect, useState } from "react";

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

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
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {tasks
            .filter((task) => task.completed === false)
            .map((lastTask, index) => (
              <TaskItem key={index} task={lastTask} fetchTasks={fetchTasks} />
            ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
          {tasks
            .filter((task) => task.completed)
            .map((completedTask, index) => (
              <TaskItem
                key={index}
                task={completedTask}
                fetchTasks={fetchTasks}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
