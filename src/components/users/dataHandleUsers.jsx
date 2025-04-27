const DataHandleUsers = () => {
   const columns = [
      {
         title: "ID",
         dataIndex: "id",
      },
      {
         title: "Full Name",
         dataIndex: "fullName",
      },
      {
         title: "Email",
         dataIndex: "email",
      },
      {
         title: "Role",
         dataIndex: "role",
      },
      {
         title: "Phone",
         dataIndex: "phone",
      },
      {
         title: "Action",
         key: "action",
      },
   ];

   const data = [
      {
         key: "1",
         fullName: "John Brown",
         email: "Nguyen Van Duc",
         role: "admin",
         phone: 12032131,
      },
      {
         key: "2",
         fullName: "John Brown",
         email: "Nguyen Van Duc",
         role: "client",
         phone: 12032131,
      },
   ];
   return {
      columns,
      data,
   };
};
export default DataHandleUsers;
