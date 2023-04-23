import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectProductsMenuSections } from '../../redux/products-menu/products-menu-selector';
import ProductList from './product-list-component';
import { ProductsMenuComponentContainer } from './products-menu-styles';

const ProductsMenuComponent = ({ productsMenuSections }) => (
    <ProductsMenuComponentContainer>
        {productsMenuSections.map(({ id, ...otherSectionProps }) => (
            <ProductList key={id} {...otherSectionProps} />
        ))}
    </ProductsMenuComponentContainer>
);

const mapStateToProps = createStructuredSelector({
    productsMenuSections: selectProductsMenuSections
});

export default connect(mapStateToProps)(ProductsMenuComponent);