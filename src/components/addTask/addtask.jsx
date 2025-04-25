import styles from "./addtask.module.scss";
const AddTask = () => {
   return (
      <div className={styles["add-task"]}>
         <input
            type="text"
            name=""
            id=""
            placeholder="Enter new task"
            className={styles["add-task__input"]}
         />
         <button className={styles["add-task__btn"]}>Thêm</button>
      </div>
   );
};
export default AddTask;
