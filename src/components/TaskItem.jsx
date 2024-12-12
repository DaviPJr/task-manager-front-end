// eslint-disable-next-line react/prop-types
const TaskItem = ({ task, isCompleted }) => {
  return (
    <>
      <h1>{task}</h1>
      <p>{isCompleted ? "Completa" : "Não completa"}</p>
    </>
  );
};

export default TaskItem;
