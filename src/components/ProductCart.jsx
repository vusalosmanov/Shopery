import React from 'react';
import { products } from '../data/ProductData';

const ProductCart = () => {
    return (
        <>
            {products.map(product => (
                <div
                    key={product.id}
                    className="bg-gray-100 rounded-lg p-4 w-[306px] h-[413px] shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-lg font-bold mb-2">${product.price.toFixed(2)}</p>
                    <div className="text-yellow-500 mb-2">{product.rating}</div>
                </div>
            ))}
        </>
    );
};

export default ProductCart;
