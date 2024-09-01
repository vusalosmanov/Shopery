import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Star from "../../assets/shopery.netlify.app.svg"
import Basket from "../../assets/shopery.netlify.app (6).svg"
import Heart from "../../assets/shopery.netlify.app (5).svg"
import Eye from "../../assets/shopery.netlify.app (7).svg"

const ProductList2 = () => {
  const products2 = useSelector((state) => state.products2.items);

  return (
        <div className='flex flex-wrap w-[1333px] px-0 mx-auto '>
            {products2.map((product) => (
                <div key={product.id} className='relative text-center h-full overflow-hidden bg-white box-border border border-[#e5e5e5] cursor-pointer hover:border-[green] shadow-md group transition-all duration-300 ease-linear'>
                    <div className='absolute top-1.5 right-2 opacity-0 transition-opacity duration-300  group-hover:opacity-100 group-hover:block'>
                        <button className='w-9 h-9 box-border mt-4 rounded-3xl bg-[#f2f2f2] hover:bg-[#2c742f] flex items-center justify-center transition-all duration-300 ease-linear'>
                            <img className='hover:filter hover:invert' src={Heart} alt="Heart" />
                        </button>

                        <button className='w-9 h-9 box-border mt-4 rounded-3xl bg-[#f2f2f2] hover:bg-[#2c742f] flex items-center justify-center transition-all duration-300 ease-linear'>
                            <img className='hover:filter hover:invert' src={Eye} alt="Eye" />
                        </button>
                    </div>
                        <img className='w-[264px]' src={product.image} alt={product.name} />
                    <div className='p-3 flex items-center justify-between'>
                        <div className='flex flex-col items-start gap-1'>
                            <span className='text-[16px] font-semibold text-[#4d4d4d] group-hover:text-[#2c742f] mt-4'>{product.name}</span>
                            <div className='flex items-center gap-1'>
                                <span className='text-[#1a1a1a] text-base font-medium leading-5 '>${product.price}</span>
                                <del className='text-[#999999] text-base font-medium leading-5 '>{product.originalPrice}</del>
                            </div>
                            <div className='flex'>
                                <img className='' src={Star} alt="Star" />
                                <img className='' src={Star} alt="Star" />
                                <img className='' src={Star} alt="Star" />
                                <img className='' src={Star} alt="Star" />
                                <img className='' src={Star} alt="Star" />
                            </div>
                        </div>
                        <button className='w-10 h-10 box-border mt-4 rounded-3xl bg-[#f2f2f2] group-hover:bg-[#2c742f] flex items-center justify-center'>
                            <img className='group-hover:filter group-hover:invert' src={Basket} alt="Basket" />
                        </button>
                    </div>
                </div>
            ))}
    </div>
  );
};

export default ProductList2;