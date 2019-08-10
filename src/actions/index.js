const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST' 
    }
}

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    };
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
}

export const deleteItemFromCart = (itemId) => {
    return {
        type: 'DELETE_ITEM_FROM_CART',
        payload: itemId
    }
}

export const increaseItemInCart = (itemId) => {
    return {
        type: 'INCREASE_ITEM_IN_CART',
        payload: itemId
    }
}

export const decreaseItemInCart = (itemId) => {
    return {
        type: 'DECREASE_ITEM_IN_CART',
        payload: itemId
    }
}

export const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
}
