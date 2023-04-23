import React from 'react';
import ProductsMenuComponent from '../../components/products/products-menu-component';
import { HomePageContainer } from './homepage-styles';

export default function Homepage({ history }) {
    return (
        <HomePageContainer>
            <ProductsMenuComponent />
        </HomePageContainer>
    )
}
