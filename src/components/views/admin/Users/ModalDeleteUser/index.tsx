import React, { Dispatch, useState } from "react";
import { useSession } from "next-auth/react";
import userServices from "@/services/users";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

type Props = {
  modalDeletedUser: any;
  setModalDeletedUser: Dispatch<React.SetStateAction<{}>>;
  setUsersData: Dispatch<React.SetStateAction<any>>;
};

const ModalDeleteUser: React.FC<Props> = ({
  modalDeletedUser,
  setModalDeletedUser,
  setUsersData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession();

  const handleDeleteUser = async () => {
    setIsLoading(true);

    const result = await userServices.deleteUser(
      modalDeletedUser.id,
      session.data?.accessToken
    );

    if (result.status === 200) {
      setIsLoading(false);
      setModalDeletedUser({});
      const { data } = await userServices.getAllUsers();
      setUsersData(data.data);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setModalDeletedUser({})}>
      <h1 className="mb-5">Are you sure you want to delete this user?</h1>
      <Button
        type="button"
        onClick={() => handleDeleteUser()}
        className="bg-blueLight text-white hover:bg-white hover:text-blueLight">
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </Modal>
  );
};

export default ModalDeleteUser;
