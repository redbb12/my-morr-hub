import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg text-center">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default ProductCard;
