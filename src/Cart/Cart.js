import React from 'react';
import {AiOutlineDelete} from 'react-icons/ai';

const Cart = ({cart,handleResetCart,handleSelectOneCart}) => {
    return (
        <div className='sticky top-0 p-5 bg-gray-200 rounded shadow-lg'>
            <h1 className='md:text-2xl text-md font-bold'>Selected Books</h1>
           <div className='mt-5'>
           {
                cart.map(book=><div key={book.id} className='flex items-center space-x-1 md:space-x-3'>
                        <img className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' src={book.image} alt="" />
                        <p className='md:text-md text-sm ml-2'>{book.name}</p>
                        <button className=' px-2 py-1 md:px-5 md:py-3'><AiOutlineDelete className=' text-sm md:text-xl'/></button>
                     </div>)
            }
           </div>
           <div className='mt-2 flex flex-col'>
               <button onClick={()=>handleSelectOneCart(cart)} className='w-full md:w-1/2 px-1 py-1 md:px-3 md:py-2 bg-green-500 text-white hover:bg-green-700 rounded text-sm'>Select 1 for Me</button>
               <button onClick={()=>handleResetCart(cart)} className='w-full md:w-1/2  px-1 py-1 md:px-3 md:py-2 bg-pink-500 text-white hover:bg-pink-700 rounded mt-3'> Reset 
               </button>
           </div>
            
        </div>


    );
};

export default Cart;