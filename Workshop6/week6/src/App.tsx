import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const App: React.FC = () => {
  const handleAddToCart = (product: string) => {
    alert(`${product} ใส่จระก้าเรียบร้อย`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="pt-20 w-full px-6">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">สินค้าแนะนำ</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            imageUrl="/image/0af189a0514fd9073a51e54b19749fa3.jpg"
            title="ปลาบู่"
            description="ป ปลาตากลม"
            price={10}
            onAddToCart={() => handleAddToCart("ปลาบู่")}
          />
          <ProductCard
            imageUrl="/image/pngtree-jelly-fish-png-image_13245668.png"
            title="แมงกะพุนหัวกะสุน"
            description="แมงกะพุนหัวกะสีแมงกะผีหัวกะสุน"
            price={50}
            onAddToCart={() => handleAddToCart("แมงพุน")}
          />
          <ProductCard
            imageUrl="/image/ดีไซน์ที่ไม่มีชื่อ-2023-02-20T120550.341.jpg"
            title="บอยท่าพระจัน"
            description="บอยท่าพระจัน"
            price={1000000}
            onAddToCart={() => handleAddToCart("Product C")}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
