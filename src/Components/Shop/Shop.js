import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Shop = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div className='grid grid-cols-5 gap-10'>
            <div className='col-span-3  border grid md:grid-cols-2 grid-cols-1 md:gap-8 '>
                {
                    books.map(book=><Book key={book.id} book={book}/>)
                }
            </div>
            <div className='col-span-2 bg-orange-200'>

            </div>
        </div>
    );
};

export default Shop;