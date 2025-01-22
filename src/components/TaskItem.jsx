/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TaskItem = ({ task }) => {
  return (
    <>
      <h1>{task.description}</h1>
      <p>{task.isCompleted ? "Completa" : "Não completa"}</p>
    </>
  );
};

export default TaskItem;
