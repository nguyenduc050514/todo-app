import styles from "@components/renderTask/renderTask.module.scss";
import checkList from "@assets/images/businessman-checklist.jpg";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import React from "react";
import EmptyTask from "@components/NoDataImage";
const RenderTask = React.memo(({ tasks, handleDeleteTask, handleEditTask }) => {
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
                           className={styles["task-actions__btn"]}
                           onClick={() => handleEditTask(task.id)}
                        >
                           <EditOutlined />
                        </button>
                        <button
                           className={styles["task-actions__btn"]}
                           onClick={() => handleDeleteTask(task.id)}
                        >
                           <DeleteOutlined />
                        </button>
                     </div>
                  </li>
               ))}
            </ul>
         ) : (
            <EmptyTask checkList={checkList} />
         )}
      </>
   );
});
export default RenderTask;
