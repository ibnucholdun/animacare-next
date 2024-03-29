import AdminUserView from "@/components/views/admin/Users";
import userServices from "@/services/users";
import React, { useEffect, useState } from "react";

type Props = {};

const AdminUserPage = (props: Props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getAllUsers();
      setUsers(data.data);
    };
    getAllUsers();
  }, []);
  return (
    <>
      <AdminUserView users={users} />
    </>
  );
};

export default AdminUserPage;
