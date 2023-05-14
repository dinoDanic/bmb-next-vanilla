import React from "react";
import { Product } from "./product";
import { getProductById } from "@/features/products";

const ProductIdPage = async ({ params }: { params: { productId: string } }) => {
  const product = await getProductById(params.productId);
  if (product) {
    return <Product {...product} />;
  }
  return null;
};

export default ProductIdPage;