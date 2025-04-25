import AddTask from "../addTask/addtask";
import EmptyTask from "../emptytask/emptytask";
import RenderTask from "../rendertask/rendertask";
import styles from "./todoApp.module.scss";

const TodoApp = () => {
   return (
      <div className={styles["todo-app"]}>
         <h1 className={styles["todo-app__heading"]}>
            Chào mừng đến với React! TodoApp
         </h1>
         <AddTask />
         <EmptyTask />
         <RenderTask />
      </div>
   );
};
export default TodoApp;
