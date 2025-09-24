import React from "react";
import Button from "./Button";

interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  onAddToCart,
}) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg overflow-hidden 
                    w-full md:w-80 flex flex-col"
    >
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm mt-2 flex-1">{description}</p>
        <p className="text-xl font-bold text-green-600 mt-2">
          ${price.toFixed(2)}
        </p>

        <div className="mt-4">
          <Button variant="primary" size="md" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
