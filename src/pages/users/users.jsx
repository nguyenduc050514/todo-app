import UsersTable from "../../components/users/users.table";
import styles from "./users.module.scss";
const Users = () => {
   return (
      <div className={styles["users"]}>
         <UsersTable />
      </div>
   );
};
export default Users;
