import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import { convertIDR } from "@/utils/convertIDR";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ModalAddProduct from "./ModalAddProduct";
import ModalUpdateProduct from "./ModalUpdateProduct";
import ModalDeleteProduct from "./ModalDeleteProduct";

type Props = {
  products: any;
};

const ProductsAdminView: React.FC<Props> = ({ products }) => {
  const [productsData, setProductsData] = useState<any>([]);
  const [modalAddProduct, setModalAddProduct] = useState(false);
  const [modalUpdateProduct, setModalUpdateProduct] = useState<any>({});
  const [modalDeleteProduct, setModalDeleteProduct] = useState<any>({});

  useEffect(() => {
    setProductsData(products);
  }, [products]);

  return (
    <>
      <AdminLayout>
        <div className="px-24 pt-12">
          <h1 className="text-3xl font-semibold">Products Management</h1>
          <Button
            type="button"
            className="bg-blueLight text-white hover:text-blueLight hover:bg-white flex items-center my-10"
            onClick={() => setModalAddProduct(true)}>
            <i className="bx bx-plus text-xl mr-1 font-bold" />
            Add Product
          </Button>
          <div className="overflow-y-auto max-h-[75vh]">
            <table className="w-full border rounded-lg border-separate">
              <thead>
                <tr className="bg-[#f2f2f2]">
                  <th className="text-center p-2">#</th>
                  <th className="text-center p-2">Image</th>
                  <th className="text-center p-2">Name</th>
                  <th className="text-center p-2">Category</th>
                  <th className="text-center p-2">Price</th>
                  <th className="text-center p-2">Stock</th>
                  <th className="text-center p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {productsData.map((product: any, index: number) => (
                  <tr key={product.id} className="bg-white even:bg-gray-100">
                    <td className="text-center p-2">{index + 1}</td>
                    <td className="p-2 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                        className=""
                      />
                    </td>
                    <td className="text-center p-2">{product.name}</td>
                    <td className="text-center p-2">{product.category}</td>
                    <td className="text-center p-2">
                      {convertIDR(product.price)}
                    </td>
                    <td className="text-center p-2">{product.stock}</td>
                    <td className="text-center p-2">
                      <div className="flex gap-2 justify-center">
                        <Button
                          type="button"
                          className="cursor-pointer bg-[#3C3CF4] p-2 text-white"
                          onClick={() => setModalUpdateProduct(product)}>
                          <i className="bx bxs-edit text-xl" />
                        </Button>
                        <Button
                          type="button"
                          className="cursor-pointer bg-red-500 p-2 text-white"
                          onClick={() => setModalDeleteProduct(product)}>
                          <i className="bx bx-trash" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AdminLayout>
      {modalAddProduct && (
        <ModalAddProduct
          setModalAddProduct={setModalAddProduct}
          setProductsData={setProductsData}
        />
      )}
      {Object.keys(modalUpdateProduct).length > 0 && (
        <ModalUpdateProduct
          setModalUpdateProduct={setModalUpdateProduct}
          modalUpdateProduct={modalUpdateProduct}
          setProductsData={setProductsData}
        />
      )}
      {Object.keys(modalDeleteProduct).length > 0 && (
        <ModalDeleteProduct
          modalDeletedProduct={modalDeleteProduct}
          setModalDeletedProduct={setModalDeleteProduct}
          setProductsData={setProductsData}
        />
      )}
    </>
  );
};

export default ProductsAdminView;
