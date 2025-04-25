import { useState } from "react";
import styles from "./addtask.module.scss";
const AddTask = ({ handleCreateTask }) => {
   const [content, setContent] = useState("");
   return (
      <div className={styles["add-task"]}>
         <input
            type="text"
            name=""
            value={content}
            id=""
            placeholder="Enter new task"
            className={styles["add-task__input"]}
            onChange={(e) => setContent(e.target.value)}
         />
         <button
            className={styles["add-task__btn"]}
            onClick={() => {
               handleCreateTask(content);
               setContent("");
            }}
         >
            Thêm
         </button>
      </div>
   );
};
export default AddTask;
