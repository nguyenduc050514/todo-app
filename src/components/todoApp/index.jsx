import AddTask from "../addTask";
import RenderTask from "../rendertask";
import styles from "./todoApp.module.scss";
import HandleTask from "./handleTask";
const TodoApp = () => {
   const { tasks, handleCreateTask, handleDeleteTask, handleEditTask } =
      HandleTask();
   return (
      <div className={styles["todo-app"]}>
         <h1 className={styles["todo-app__heading"]}>
            Chào mừng đến với React! TodoApp
         </h1>
         <AddTask handleCreateTask={handleCreateTask} />
         <RenderTask
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
         />
      </div>
   );
};
export default TodoApp;
