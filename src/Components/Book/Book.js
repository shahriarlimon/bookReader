import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Book = ({book,handleAddToCart}) => {
    const {image,name,price,id} = book;
    return (
        <div className='border rounded w-[200px] h-[380px] md:w-[270px] md:h-[480px] ml-2 md:ml-16 relative shadow-lg'>
            <div className='m-2'>
                <img className='md:w-[250px] w-[200px] h-[200px] md:h-[300px] rounded' src={image} alt="" />
            </div>
            <div className='md:m-3 m-1'>
                <h1 className='text-xl md:font-semibold'>{name}</h1>
                <p className='text-lg md:font-semibold'>Price: ${price}</p>
                <p className='text-lg'>Id: {id}</p>
            </div>
            <button onClick={()=>handleAddToCart(book)} className='absolute bottom-0 px-3 py-2 bg-blue-500 hover:bg-blue-700 w-full rounded text-white font-semibold flex items-center justify-center'>Add To Cart <AiOutlineShoppingCart className='ml-3'/></button>
        </div>
    );
};

export default Book;