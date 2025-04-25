import styles from "./emptyTask.module.scss";
import checkList from "../../assets/images/businessman-checklist.jpg";
const EmptyTask = () => {
   return (
      <div className={styles["media"]}>
         <img src={checkList} alt="" />
      </div>
   );
};
export default EmptyTask;
