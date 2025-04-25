import styles from "./renderTask.module.scss";
const RenderTask = () => {
   return (
      <ul className={styles["task-list"]}>
         <li className={styles["task-item"]}>
            <span className={styles["task-item__title"]}>Nguyen van duc</span>
            <div className={styles["task-actions"]}>
               <button className={styles["task-actions__btn"]}>Xóa</button>
               <button
                  className={`${styles["task-actions__btn"]} ${styles["task-actions__btn--edit"]}`}
               >
                  Sửa
               </button>
            </div>
         </li>
      </ul>
   );
};
export default RenderTask;
