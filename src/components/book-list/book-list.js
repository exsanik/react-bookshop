import React from 'react';
import {connect } from 'react-redux'

import {compose} from '../../utils';
import {withBookstoreService} from '../hoc';
import {fetchBooks, increaseItemInCart} from '../../actions';
import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books, onAddToCart}) => {
    return(
        <ul className="list-group">
            {
                books.map((book) => {
                    return (
                        <li className="list-group-item" key = {book.id}>
                            <BookListItem book ={book} onAddToCart = {() => onAddToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
}

class BookListContainer extends React.Component 
{
    componentDidMount()
    {
        this.props.fetchBooks();
    }
    render() 
    {
        const {books, loading, error, onAddToCart} = this.props;
        if(error)
            return <ErrorIndicator />;
        if(loading)
            return <Spinner />;
        
        return <BookList books = {books} onAddToCart={onAddToCart} />;
    }
}



const mapStateToProps = ({books, loading, error}) => {
    return { books, loading, error}
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(dispatch, bookstoreService),
        onAddToCart: (id) => dispatch(increaseItemInCart(id))
    }
};

export default compose(
        withBookstoreService(),
        connect(mapStateToProps, mapDispatchToProps)
    )(BookListContainer);
