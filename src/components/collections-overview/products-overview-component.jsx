import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/products-preview-component';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selector';
import { ProductsOverviewComponentContainer } from './products-overview-component.styles';

const ProductsOverviewComponent = ({ collections }) => (
    <ProductsOverviewComponentContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </ProductsOverviewComponentContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(ProductsOverviewComponent);