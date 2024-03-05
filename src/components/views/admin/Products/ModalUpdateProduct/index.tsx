import React, { Dispatch, SetStateAction, useState } from "react";
import productServices from "@/services/products";
import { useSession } from "next-auth/react";
import { uploadFile } from "@/lib/firebase/services";
import Image from "next/image";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import InputFile from "@/components/ui/InputFile";
import Button from "@/components/ui/Button";

type Props = {
  setModalUpdateProduct: Dispatch<SetStateAction<boolean>>;
  modalUpdateProduct: any;
  setProductsData: Dispatch<SetStateAction<any[]>>;
};

const ModalUpdateProduct: React.FC<Props> = ({
  setModalUpdateProduct,
  modalUpdateProduct,
  setProductsData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [changeImage, setChangeImage] = useState<File | null>(null);
  const session: any = useSession();

  const updateProduct = async (
    form: any,
    newImageUrl: string = modalUpdateProduct.image
  ) => {
    const data = {
      name: form.name.value,
      price: form.price.value,
      category: form.category.value,
      status: form.status.value,
      stock: form.stock.value,
      image: newImageUrl,
    };

    const result = await productServices.updateProduct(
      modalUpdateProduct.id,
      data,
      session?.data?.accessToken
    );

    if (result.status === 200) {
      setIsLoading(false);
      setChangeImage(null);
      form.reset();
      setModalUpdateProduct(false);
      const { data } = await productServices.getAllProducts();
      setProductsData(data.data);
      alert("Update Product Success");
    } else {
      setIsLoading(false);
      alert("Update Product Failed");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form: any = e.target as HTMLFormElement;
    const file = form.image.files[0];

    if (file) {
      const newName = "main." + file.name.split(".")[1];
      uploadFile(
        modalUpdateProduct.id,
        file,
        newName,
        "products",
        async (status: boolean, newImageUrl: string) => {
          if (status) {
            updateProduct(form, newImageUrl);
          } else {
            setIsLoading(false);
            alert("Update Product Failed");
          }
        }
      );
    } else {
      updateProduct(form);
    }
  };

  return (
    <Modal onClose={() => setModalUpdateProduct(false)}>
      <h1 className="text-2xl">Update Product</h1>
      <form onSubmit={handleSubmit} className="">
        <Input
          label="Name"
          name="name"
          type="text"
          placehoder="Insert product name"
          variant="text-slate-600"
          defaultValue={modalUpdateProduct.name}
        />
        <Input
          label="Price"
          name="price"
          type="number"
          placehoder="Insert Product price"
          variant="text-slate-600"
          defaultValue={modalUpdateProduct.price}
        />
        <Input
          label="Stock"
          name="stock"
          type="number"
          placehoder="Insert product stock"
          variant="text-slate-600"
          defaultValue={modalUpdateProduct.stock}
        />
        <Select
          label="Category"
          name="category"
          options={[
            { label: "Makanan Kucing", value: "Makanan Kucing" },
            { label: "Makanan Anjing", value: "Makanan Anjing" },
            { label: "Parfum", value: "Parfum" },
            { label: "Vitamin", value: "Vitamin" },
            { label: "Kandang", value: "Kandang" },
            { label: "Susu", value: "Susu" },
            { label: "Obat", value: "Obat" },
            { label: "Box Pasir", value: "Box Pasir" },
            { label: "Pasir", value: "Pasir" },
            { label: "Aksesoris", value: "Aksesoris" },
            { label: "Shampo", value: "Shampo" },
            { label: "Tas Hewan", value: "Tas Hewan" },
          ]}
          defaultValue={modalUpdateProduct.category}
        />
        <Select
          label="Status"
          name="status"
          options={[
            { label: "Released", value: "true" },
            { label: "Not Released", value: "false" },
          ]}
          defaultValue={modalUpdateProduct.status}
        />
        <label htmlFor="image">Image</label>
        <div className="flex items-center gap-3 mt-2 mb-5">
          <Image
            src={
              changeImage
                ? URL.createObjectURL(changeImage)
                : modalUpdateProduct?.image || ""
            }
            alt={modalUpdateProduct?.name}
            width={200}
            height={200}
            className="w-1/6 aspect-square h-auto rounded-md bg-[#eee] flex justify-center items-center"
          />
          <InputFile
            name="image"
            changeImage={changeImage}
            setChangeImage={setChangeImage}
            setDisabled={setIsLoading}
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-blueLight text-white hover:text-blueLight hover:bg-white">
          {isLoading ? "Loading..." : "Update Product"}
        </Button>
      </form>
    </Modal>
  );
};
export default ModalUpdateProduct;
