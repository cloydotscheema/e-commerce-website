import React from 'react';
import { ShoppingCartItemContainer, ItemDetailsContainer, NameSpanner, QuantitySpanner, ImageHolder } from "./shopping-cart-item-styles";

const ShoppingCartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <ShoppingCartItemContainer>
            <ImageHolder src={imageUrl} alt={name} />
            <ItemDetailsContainer>
                <NameSpanner>{name}</NameSpanner>
                <QuantitySpanner>{quantity}* Rs {price}</QuantitySpanner>
            </ItemDetailsContainer>
        </ShoppingCartItemContainer>
    );
};

export default ShoppingCartItem;
