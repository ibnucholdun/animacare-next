import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import userServices from "@/services/users";
import { useSession } from "next-auth/react";
import React, { Dispatch, FormEvent, useState } from "react";

type Props = {
  modalUpdateUser: any;
  setModalUpdateUser: Dispatch<React.SetStateAction<{}>>;
  setUsersData: Dispatch<React.SetStateAction<any>>;
};

const ModalUpdateUser: React.FC<Props> = ({
  modalUpdateUser,
  setModalUpdateUser,
  setUsersData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession();
  const handleUpdateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form: any = e.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    try {
      const result = await userServices.updateUser(
        modalUpdateUser.id,
        data,
        session.data?.accessToken
      );

      if (result.status === 200) {
        setIsLoading(false);
        setModalUpdateUser({});
        const { data } = await userServices.getAllUsers();
        setUsersData(data.data);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <Modal onClose={() => setModalUpdateUser({})}>
      <h1>Update User</h1>
      <form onSubmit={handleUpdateUser}>
        <Input
          label="Email"
          name="email"
          type="email"
          placehoder="Email"
          defaultValue={modalUpdateUser.email}
          disabled
        />
        <Input
          label="Fullname"
          name="fullname"
          type="text"
          placehoder="Fullname"
          defaultValue={modalUpdateUser.fullname}
          disabled
        />
        <Input
          label="Phone"
          name="phone"
          type="text"
          placehoder="Phone"
          defaultValue={modalUpdateUser.phone}
          disabled
        />
        <Select
          label="Role"
          name="role"
          defaultValue={modalUpdateUser.role}
          options={[
            { label: "Admin", value: "admin" },
            { label: "Member", value: "member" },
          ]}
        />
        <Button
          type="submit"
          className="bg-blueLight text-white hover:bg-white hover:text-blueLight">
          {isLoading ? "Loading..." : "Update User"}
        </Button>
      </form>
    </Modal>
  );
};

export default ModalUpdateUser;
