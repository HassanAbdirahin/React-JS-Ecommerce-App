import React, { useState } from 'react';
import data from './data';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState(data);

  return (
    <div className="my-20 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-around gap-5">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
