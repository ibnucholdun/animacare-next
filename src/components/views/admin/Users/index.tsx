import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";

type Props = {
  users: any;
};

const AdminUserView: React.FC<Props> = ({ users }) => {
  const [updatedUser, setUpdatedUser] = useState<any>({});
  const [deletedUser, setDeletedUser] = useState<any>({});
  const [usersData, setUsersData] = useState<any>([]);

  useEffect(() => {
    setUsersData(users);
  }, [users]);

  return (
    <>
      <AdminLayout>
        <div className="w-full px-24 pt-12">
          <h1 className="text-3xl font-semibold">Users Management</h1>
          <table className="w-full border border-spacing-0 border-collapse mt-10">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-center p-2">#</th>
                <th className="text-center p-2">Fullname</th>
                <th className="text-center p-2">Email</th>
                <th className="text-center p-2">Phone</th>
                <th className="text-center p-2">Role</th>
                <th className="text-center p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user: any, index: number) => (
                <tr key={user.id} className="even:bg-slate-100">
                  <td className="text-center p-2">{index + 1}</td>
                  <td className="text-center p-2">{user.fullname}</td>
                  <td className="text-center p-2">{user.email}</td>
                  <td className="text-center p-2">{user.phone}</td>
                  <td className="text-center p-2">{user.role}</td>
                  <td className="text-center p-2">
                    <div className="flex gap-3 justify-center">
                      <Button
                        type="button"
                        onClick={() => setUpdatedUser(user)}
                        className="cursor-pointer bg-[#3C3CF4] p-4 text-white">
                        <i className="bx bxs-edit text-xl" />
                      </Button>
                      <Button
                        type="button"
                        className="cursor-pointer bg-red-500 p-4 text-white"
                        onClick={() => setDeletedUser(user)}>
                        <i className="bx bx-trash text-xl" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </AdminLayout>
      {Object.keys(updatedUser).length > 0 && (
        <ModalUpdateUser
          modalUpdateUser={updatedUser}
          setModalUpdateUser={setUpdatedUser}
          setUsersData={setUsersData}
        />
      )}
      {Object.keys(deletedUser).length > 0 && (
        <ModalDeleteUser
          modalDeletedUser={deletedUser}
          setModalDeletedUser={setDeletedUser}
          setUsersData={setUsersData}
        />
      )}
    </>
  );
};

export default AdminUserView;
