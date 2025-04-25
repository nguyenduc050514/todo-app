import EmptyTask from "../emptytask";
import styles from "./renderTask.module.scss";
const RenderTask = ({ tasks }) => {
   return (
      <>
         {tasks.length > 0 ? (
            <ul className={styles["task-list"]}>
               {tasks.map((task) => (
                  <li key={task.id} className={styles["task-item"]}>
                     <span className={styles["task-item__title"]}>
                        {task.title}
                     </span>
                     <div className={styles["task-actions"]}>
                        <button
                           className={`${styles["task-actions__btn"]} ${styles["task-actions__btn--edit"]}`}
                        >
                           Sửa
                        </button>
                        <button className={styles["task-actions__btn"]}>
                           Xóa
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         ) : (
            <EmptyTask />
         )}
      </>
   );
};
export default RenderTask;
