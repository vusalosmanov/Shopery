import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const products = useSelector((state) => state.products.items);

  return (
        <div className='flex flex-wrap w-[1333px] px-0 mx-auto gap-8'>
            {products.map((product) => (
                <div key={product.id} className=' h-[200px] text-center overflow-hidden bg-white box-border border border-[#e5e5e5] cursor-pointer hover:border-[#2c742f] shadow-md group transition-all duration-300 ease-linear'>
                    
                    <img className='mb-3' src={product.image} alt={product.name} />
                    <span className=' text-[18px] pt-3 font-semibold text-[#1a1a1a] box-border group-hover:text-[#2c742f]'>{product.name}</span>
                    
                </div>
            ))}
    </div>
  );
};

export default ProductList;