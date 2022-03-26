import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Book from '../Book/Book';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    const handleAddToCart = (selectedBook)=>{
        const newCart = [...cart, selectedBook];
        setCart(newCart);
    }
    const handleSelectOneCart = (cart)=>{
        const indexCart = Math.floor((Math.random() * cart.length) + 1);
        const newIndexCart = cart[indexCart-1];
        const newCart = [newIndexCart];
        setCart(newCart);
    }
    const handleResetCart= (cart)=>{
        setCart([])
    }
    return (
        <div className='grid grid-cols-2 md:grid-cols-5 md:gap-10 w-full min-h-screen'>
            <div className=' col-span-1 md:col-span-3 grid md:grid-cols-2 grid-cols-1 gap-5 md:gap-8 '>
                {
                    books.map(book=><Book handleAddToCart={handleAddToCart} key={book.id} book={book}/>)
                }
            </div>
            <div className=' ml-3 col-span-1 md:col-span-2 relative md:px-8 md:py-5 '>
                <Cart handleSelectOneCart={handleSelectOneCart} handleResetCart={handleResetCart} cart={cart}/>
            </div>
        </div>
    );
};

export default Shop;