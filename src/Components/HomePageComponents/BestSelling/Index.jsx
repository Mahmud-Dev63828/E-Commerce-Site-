import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useBestSellingProductQuery } from "../../../Features/Api/ProductApi";
const BestSellilng = () => {
  const { data, error, isLoading } = useBestSellingProductQuery();

  return (
    <div className="container border-t-[1.5px] border-gray-300">
      <ProductCommonLayout
        heading="This Month's"
        description="Best Selling Products"
        ProductCard={ProductCard}
        partialItemShow={6}
        componentData={data?.products}
        isLoading={isLoading}
        viewButton={true}
      />
    </div>
  );
};

export default BestSellilng;
