import {createSelector} from 'reselect';

const selectCart = state => state.cart; // input selector

export const selectCartItems = createSelector( // output selectors
    [selectCart],cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],cartItems => cartItems.reduce(
        (acc, cartItem) => acc + cartItem.quantity , 0
    )
)