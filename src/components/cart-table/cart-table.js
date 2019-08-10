import React from 'react';

import {connect} from 'react-redux';

import {deleteItemFromCart, increaseItemInCart, decreaseItemInCart} from '../../actions';

import './cart-table.css';

const CartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
    return (
        <div className="cart-table">
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th className="item-id">#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, ind) => {
                            const {id, title, amount, price} = item;
                            return (
                                <tr key ={id}>
                                    <td className="item-id">{ind+1}</td>
                                    <td>{title}</td>
                                    <td>{amount}</td>
                                    <td>{price}$</td>
                                    <td className="action">
                                        <button
                                            onClick={()=> onDelete(id)} 
                                            className="btn btn-outline-danger btn-sm">
                                            <i className="fa fa-trash-o" />
                                        </button>
                                        <button
                                            onClick={()=>onIncrease(id)} 
                                            className="btn btn-outline-success btn-sm">
                                            <i className="fa fa-plus-circle" />
                                        </button>
                                        <button
                                            onClick={()=>onDecrease(id)} 
                                            className="btn btn-outline-warning btn-sm">
                                            <i className="fa fa-minus-circle" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
            <div className="total" >
                Total: {total}$
            </div>
        </div>
    );
}

const mapStateToProps = ({cartItems, cartTotal}) => {
    return {
        items: cartItems, 
        total: cartTotal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(increaseItemInCart(id)),
        onDecrease: (id) => dispatch(decreaseItemInCart(id)),
        onDelete: (id) => dispatch(deleteItemFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);