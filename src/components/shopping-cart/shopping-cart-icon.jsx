import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/shopping-cart/cart-selectors';
import { toggleCartHidden } from '../../redux/shopping-cart/cart-actions';
import { ShoppingCartIconContainer, ShoppingIconF, ItemCountData } from "./shopping-cart-icon-styles";

const ShoppingCartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <ShoppingCartIconContainer onClick={toggleCartHidden}>
            <ShoppingIconF />
            <ItemCountData>{itemCount}</ItemCountData>
        </ShoppingCartIconContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);