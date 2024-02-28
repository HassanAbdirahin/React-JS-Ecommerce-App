import React from 'react';
import { FaStar } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const ProductCard = ({ product }) => {
  const { title, price, description, imageUrl } = product;

  return (
    <div className="max-w-sm  mx-auto overflow-hidden bg-white rounded shadow-lg">
      <img src={imageUrl} alt={title} className="w-[300px] h-48 object-cover object-center" />
      <div className="px-6 py-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600"><span className="flex"><FaStar className='text-yellow-400'/><FaStar className='text-yellow-400'/><FaStar className='text-yellow-400'/><FaStar className='text-yellow-400'/></span></p>
        <p className="text-gray-700 mb-2">${price.toFixed(2)}</p>
      </div>
      <div className="flex items-center justify-between px-6 py-4 bg-gray-100">
        <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        <IoCartOutline size={20}/> Add to Cart
        </button>
      </div>
    </div>

    
  );
};

export default ProductCard;
