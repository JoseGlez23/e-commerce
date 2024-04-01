import React from "react";
import ProductsCard from "./ProductsCard";

function Products() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text 2xl bg-black text-white py-2 w-80 text-center">
          shopping everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Welcome to our online store! Today, we're excited to introduce a
          special selection of products that are sure to delight you. From
          fashion to technology, we've gathered the best for you. Take a look at
          what we have to offer today!
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <ProductsCard />
      </div>
    </div>
  );
}

export default Products;
