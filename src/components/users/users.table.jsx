import { Table } from "antd";
import DataHandleUsers from "./dataHandleUsers";
const UsersTable = () => {
   const { columns, data } = DataHandleUsers();
   return <Table columns={columns} dataSource={data} />;
};
export default UsersTable;
