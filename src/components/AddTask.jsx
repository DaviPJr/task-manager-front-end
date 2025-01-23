/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

import "./AddTask.scss";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");

  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    try {
      if (task.length === 0) {
        return toast.error(
          "A tarefa precisa de uma descrição para ser adicionada."
        );
      }
      await axios.post("https://task-manager-backend-u0gw.onrender.com/tasks", {
        description: task,
        completed: false,
      });

      await fetchTasks();
      setTask(" ");
      toast.success("Tarefa adicionada com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado...", error);
    }
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
