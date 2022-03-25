import React from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Book = ({book}) => {
    const {image,name,price,id} = book;
    return (
        <div className='border rounded w-[270px] h-[480px] ml-16 relative shadow-lg'>
            <div className='m-2'>
                <img className='w-[250px] h-[300px] rounded' src={image} alt="" />
            </div>
            <div className='m-3'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-lg font-semibold'>Price: ${price}</p>
                <p className='text-lg'>Id: {id}</p>
            </div>
            <button className='absolute bottom-0 px-3 py-2 bg-blue-500 hover:bg-blue-700 w-full rounded text-white font-semibold'>Add To Cart <AiOutlineShoppingCart/></button>
        </div>
    );
};

export default Book;