import axios from "axios";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const apiUrl = import.meta.env.VITE_API_URL;

import "./Tasks.scss";

import TaskItem from "./TaskItem";
import AddTask from "./AddTask";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/tasks`);
      console.log(data);
      setTasks(data);
    } catch {
      toast.error("Não foi possível recuperar as tarefas do banco de dados...");
    }
  }, []);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const lastTasks = useMemo(() => {
    return tasks.filter((task) => task.completed === false);
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.completed === true);
  }, [tasks]);

  return (
    <div className="tasks-container">
      <h2>Minhas tarefas</h2>
      <div className="last-tasks">
        <h3>Últimas tarefas</h3>
        <AddTask fetchTasks={fetchTasks} />
        <div className="tasks-list">
          {lastTasks.map((lastTask, index) => (
            <TaskItem key={index} task={lastTask} fetchTasks={fetchTasks} />
          ))}
        </div>
      </div>

      <div className="completed-tasks">
        <h3>Tarefas concluídas</h3>
        <div className="tasks-list">
          {completedTasks.map((completedTask, index) => (
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
