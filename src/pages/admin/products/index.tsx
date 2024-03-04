import ProductsAdminView from "@/components/views/admin/Products";
import productServices from "@/services/products";
import React, { useEffect, useState } from "react";

type Props = {};

const ProductAdminPage = (props: Props) => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const { data } = await productServices.getAllProducts();
    setProducts(data.data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <>
      <ProductsAdminView products={products} />
    </>
  );
};

export default ProductAdminPage;
