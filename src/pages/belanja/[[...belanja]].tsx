import React, { useEffect, useState } from "react";
import BelanjaView from "../../components/views/belanja/BelanjaView";
import productServices from "@/services/products";

type Props = {};

const BelanjaPage = (props: Props) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const { data } = await productServices.getAllProducts();
      setProductData(data.data);
    };
    getAllProducts();
  }, []);

  return (
    <>
      <BelanjaView productData={productData} />
    </>
  );
};

export default BelanjaPage;
