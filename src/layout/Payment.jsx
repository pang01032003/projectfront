import React, { useState } from "react";
import { Link } from "react-router-dom";

const qrcode = () => {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableSelect = (tableNumber) => {
    setSelectedTable(tableNumber);
  };

  const movies = [
    {
      id: 1,
      imageSrc: "https://i.pinimg.com/736x/d9/cd/a0/d9cda025b1ba0cb493fe5720cb474270.jpg", // เปลี่ยน URL ของภาพไปที่ลิงก์ของรูปภาพที่ต้องการ
      imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      href: "/" 
    },
];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="mt-10 p-5 border w-1/3 w- min-w-[600px] h-auto rounded-[20px] mx-auto bg-white shadow-md flex flex-col justify-center items-center">
        {movies.map((product) => (
          <Link key={product.id} to={product.href} className="group">
            <div className="flex gap-5 pb-10 pl-10">
              <p className="text-black font-bold text-3xl mx-44">ชำระเงิน</p>
            </div>
            <p className="text-black text-center">Scan to pay for meeting room bookings </p>
            <p className="text-black text-center"> thank you </p>
            <div className="w-56 mx-44">
              <img src={product.imageSrc} alt={product.imageAlt} />
            </div>
            <div className="flex gap-5 pb-3 pl-1">
              <p className="text-gray-500 mx-48">Date: Dic 14  Time: 15:30</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default qrcode;
