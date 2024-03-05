import React, { Dispatch, useState } from "react";
import { useSession } from "next-auth/react";
import productServices from "@/services/products";
import { deleteFile } from "@/lib/firebase/services";
import Modal from "@/components/ui/Modal";
import Button from "@/components/ui/Button";

type Props = {
  modalDeletedProduct: any;
  setModalDeletedProduct: Dispatch<React.SetStateAction<{}>>;
  setProductsData: Dispatch<React.SetStateAction<any[]>>;
};

const ModalDeleteProduct: React.FC<Props> = ({
  modalDeletedProduct,
  setModalDeletedProduct,
  setProductsData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const session: any = useSession();

  const handleDeleteProduct = async () => {
    setIsLoading(true);

    const result = await productServices.deleteProduct(
      modalDeletedProduct.id,
      session.data?.accessToken
    );

    if (result.status === 200) {
      setIsLoading(false);
      deleteFile(
        `/images/products/${modalDeletedProduct.id}/${
          modalDeletedProduct.image.split("%2F")[3].split("?")[0]
        }`,
        async (status: boolean) => {
          if (status) {
            alert("Delete Product Success");
          }
        }
      );
      setModalDeletedProduct({});
      const { data } = await productServices.getAllProducts();
      setProductsData(data.data);
    } else {
      setIsLoading(false);
      alert("Delete Product Failed");
    }
  };
  return (
    <Modal onClose={() => setModalDeletedProduct({})}>
      <h1 className="mb-5">Are you sure you want to delete this Product?</h1>
      <Button
        type="button"
        onClick={() => handleDeleteProduct()}
        className="bg-blueLight text-white hover:text-blueLight hover:bg-white">
        {isLoading ? "Deleting..." : "Delete"}
      </Button>
    </Modal>
  );
};

export default ModalDeleteProduct;
