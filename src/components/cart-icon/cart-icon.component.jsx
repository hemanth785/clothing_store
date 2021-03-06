import React from 'react';
import './cart-icon.style.scss';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {selectCartItemsCount} from '../../redux/cart/cart.selector';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon">
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden} />
        <span className='item-count'>{itemCount}</span> 
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);