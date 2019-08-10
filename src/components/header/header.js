import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import './header.css'

class Header extends React.Component
{
    render() 
    {
        const {total, items} = this.props;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-md-6 offset-md-1">
                        <h1><Link to= "/">ReStore</Link></h1>
                    </div>
                    <div className="col-6 col-md-4 align-self-center ">
                        <h3 className="cart text-right"><Link to= "/cart"><i className="fa fa-shopping-basket"></i> {items} items ({total}$)  </Link></h3>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({cartItems, cartTotal}) =>{
    return{
        items: cartItems.length,
        total: cartTotal
    }
}

export default connect(mapStateToProps)(Header);