import styles from "./emptyTask.module.scss";
const EmptyTask = ({ checkList }) => {
   return (
      <div className={styles["media"]}>
         <img src={checkList} alt="" />
      </div>
   );
};
export default EmptyTask;
