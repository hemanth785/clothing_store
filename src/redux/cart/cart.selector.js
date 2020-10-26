import {createSelector} from 'reselect';

const selectCart = state => state.cart; // input selector

export const selectCartItems = createSelector( // output selectors
    [selectCart],cart => cart.cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],(cart) => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity , 0
    )
)

export const selectCartTotal = createSelector(
    [selectCartItems],cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity * cartItem.price  , 0
    )
)