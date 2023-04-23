import React from 'react';
import ShoppingCartItem from './shopping-cart-item-component';
import { connect } from 'react-redux';
import { ShoppingCartDropDownContainer, ShoppingCartItemsContainer, EmptyShoppingCartMessage, StyledCustomButton } from "./shopping-cart-dropdown-styles";
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/shopping-cart/cart-selectors';
import { toggleCartHidden } from '../../redux/shopping-cart/cart-actions';

const ShoppingCartDropdown = ({ cartItems, history, dispatch }) => (
    <ShoppingCartDropDownContainer>
        <ShoppingCartItemsContainer>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <ShoppingCartItem key={cartItem.id} item={cartItem} />)
                    :
                    <EmptyShoppingCartMessage>Your Cart is empty</EmptyShoppingCartMessage>
            }
        </ShoppingCartItemsContainer>
        <StyledCustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }
        }>GO TO CHECKOUT
            </StyledCustomButton>
    </ShoppingCartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(ShoppingCartDropdown));