import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import axios from "axios";

import "./TaskItem.scss";

const TaskItem = ({ task, fetchTasks }) => {
  const handleTaskDeletion = async () => {
    try {
      await axios.delete(
        `https://task-manager-backend-u0gw.onrender.com/tasks/${task.id}`
      );
      await fetchTasks();
      toast.success("Tarefa excluída com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado...", error);
    }
  };

  const handleTasksUpdate = async (e) => {
    try {
      await axios.patch(
        `https://task-manager-backend-u0gw.onrender.com/tasks/${task.id}}`,
        {
          completed: e.target.checked,
        }
      );
      await fetchTasks();
      toast.success("A tarefa foi modificada com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado...", error);
    }
  };

  return (
    <div className="task-item-container">
      <div className="task-description">
        <label
          className={
            task.completed
              ? "checkbox-container-completed"
              : "checkbox-container"
          }
        >
          {task.description}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => handleTasksUpdate(e)}
          />
          <span
            className={task.completed ? "checkmark completed" : "checkmark"}
          ></span>
        </label>
      </div>

      <div className="delete">
        <AiFillDelete size={18} color="#F97474" onClick={handleTaskDeletion} />
      </div>
    </div>
  );
};

export default TaskItem;
