
const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    cartTotal: 0
};

const updateItem = (payload, state, quantity = 1) => {
    const {cartItems, cartTotal, books} = state;
    const ind = cartItems.findIndex((item) => item.id === payload);
    const book = books.find((book) => book.id === payload); 
    
    let item = cartItems[ind];
    if(!item)
        item = {id: book.id, title: book.title, amount: 0, price: 0};
    
    item.amount += quantity;  
    if(quantity < 0 && item.amount === 0)
        return {
            ...state,
            cartItems: [...cartItems.slice(0, ind), ...cartItems.slice(ind+1)], 
            cartTotal: cartTotal-item.price
        };

    item.price += book.price * quantity;  
    let cart = {cartTotal: cartTotal+(book.price*quantity)};
    if(ind!==-1)
        cart.cartItems = [...cartItems.slice(0, ind), item, ...cartItems.slice(ind+1)];
    else
        cart.cartItems = [...cartItems, item]; 
    return {...state, ...cart};
}

const reducer = (state = initialState, action) => {
    switch(action.type)
    {   
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return{
                ...state,
                books:[],
                loading: false,
                error: action.payload
            }
        case 'INCREASE_ITEM_IN_CART':
            return{
                ...state,
                ...updateItem(action.payload, state)
            }
        case 'DECREASE_ITEM_IN_CART':
            return{
                ...state,
                ...updateItem(action.payload, state, -1)
            }
        case 'DELETE_ITEM_FROM_CART':
            const item = state.cartItems.find((item) => item.id === action.payload);
            return{
                ...state,
                ...updateItem(action.payload, state, -item.amount)
            }
        default:
            return state;
    }
};

export default reducer;