import React, { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

// Components
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import InputFile from "@/components/ui/InputFile";

// Services
import productServices from "@/services/products";
import { uploadFile } from "@/lib/firebase/services";

// Toastify
import { toast } from "react-toastify";

type Props = {
  setModalAddProduct: Dispatch<SetStateAction<boolean>>;
  setProductsData: Dispatch<SetStateAction<any[]>>;
};

const ModalAddProduct: React.FC<Props> = ({
  setModalAddProduct,
  setProductsData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [changeImage, setChangeImage] = useState<File | null>(null);
  const session: any = useSession();

  const uploadImage = async (form: any, id: string) => {
    const file = form.image.files[0];
    const newName = "main." + file.name.split(".")[1];

    if (file) {
      uploadFile(
        id,
        file,
        newName,
        "products",
        async (status: boolean, newImageUrl: string) => {
          if (status) {
            const data = {
              image: newImageUrl,
            };
            const result = await productServices.updateProduct(
              id,
              data,
              session?.data?.accessToken
            );
            if (result.status === 200) {
              setIsLoading(false);
              setChangeImage(null);
              form.reset();
              setModalAddProduct(false);
              const { data } = await productServices.getAllProducts();
              setProductsData(data.data);
              toast.success("Add Product Success");
            } else {
              setIsLoading(false);
              toast.error("Add Product Failed");
            }
          } else {
            setIsLoading(false);
            toast.error("Add Product Failed");
          }
        }
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form: any = e.target as HTMLFormElement;
    const data = {
      name: form.name.value,
      price: form.price.value,
      category: form.category.value,
      status: form.status.value,
      stock: form.stock.value,
      image: changeImage,
    };

    const result = await productServices.addProduct(
      data,
      session?.data?.accessToken
    );

    if (result.status === 200) {
      uploadImage(form, result.data.data.id);
    } else {
      setIsLoading(false);
      toast.error("Add Product Failed");
    }
  };
  return (
    <Modal onClose={() => setModalAddProduct(false)}>
      <h1 className="text-2xl">Add Product</h1>
      <form onSubmit={handleSubmit} className="">
        <Input
          label="Name"
          name="name"
          type="text"
          placehoder="Insert product name"
          variant="text-slate-600"
        />
        <Input
          label="Price"
          name="price"
          type="number"
          placehoder="Insert Product price"
          variant="text-slate-600"
        />
        <Input
          label="Stock"
          name="stock"
          type="number"
          placehoder="Insert product stock"
          variant="text-slate-600"
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
        />
        <Select
          label="Status"
          name="status"
          options={[
            { label: "Released", value: "true" },
            { label: "Not Released", value: "false" },
          ]}
        />
        <label htmlFor="image">Image</label>
        <div className="flex items-center gap-3 mt-2 mb-5">
          {changeImage ? (
            <Image
              src={URL.createObjectURL(changeImage)}
              alt={"image"}
              width={200}
              height={200}
              className="w-1/6 aspect-square h-auto rounded-md bg-[#eee] flex justify-center items-center"
            />
          ) : (
            <div className="w-1/6 aspect-square h-auto rounded-md bg-[#eee] flex justify-center items-center">
              No Image
            </div>
          )}
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
          {isLoading ? "Loading..." : "Add Product"}
        </Button>
      </form>
    </Modal>
  );
};
export default ModalAddProduct;
