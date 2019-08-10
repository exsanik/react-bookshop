import React from 'react';

import './book-list-item.css';

const BookListItem = ({book, onAddToCart}) => {
    const {title, author, imgLink, price} = book;
    return (
        <div className="container ">
            <div className="row">
                <div className= "col-md-3 col-5 align-self-end">
                    <img src={imgLink} className="img-fluid book-cover" alt="Book cover"/>
                </div>
                <div className="col-md-9 col-7 align-self-start">
                    <div className="book-details">
                        <div className="book-title">{title}</div>
                        <div className="w-100"></div>
                        <div>by {author}</div>
                        <div className="book-price">{price}$</div>

                        <button
                            onClick={onAddToCart} 
                            className="btn btn-info add-to-cart">Add to cart</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BookListItem;