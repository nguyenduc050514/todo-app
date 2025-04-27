import AddTask from "@components/addTask";
import RenderTask from "@components/rendertask";
import styles from "@components/todoApp/todoApp.module.scss";
import HandleTask from "@components/todoApp/handleTask";
import { useEffect } from "react";
const TodoApp = () => {
   const {
      tasks,
      handleCreateTask,
      handleDeleteTask,
      handleEditTask,
      setEmptyNoTask,
      emptyNoTask,
   } = HandleTask();
   useEffect(() => {
      if (emptyNoTask) {
         const timer = setTimeout(() => {
            setEmptyNoTask("");
         }, 4000);
         return () => clearTimeout(timer);
      }
   }, [emptyNoTask, setEmptyNoTask]);
   return (
      <div className={styles["todo-app"]}>
         <h1 className={styles["todo-app__heading"]}>
            Chào mừng đến với React! TodoApp
         </h1>
         <AddTask handleCreateTask={handleCreateTask} />
         {emptyNoTask && (
            <p className={styles["empty-no-task"]}>{emptyNoTask}</p>
         )}
         <RenderTask
            tasks={tasks}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
         />
      </div>
   );
};
export default TodoApp;
