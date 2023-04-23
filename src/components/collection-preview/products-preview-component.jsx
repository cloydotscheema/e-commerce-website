import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';
import {
    ProductsPreviewContainer,
    TitleContainer,
    PreviewContainer
} from './products-preview.styles';

const ProductsPreview = ({ title, items, history, match, routeName }) => (
    <ProductsPreviewContainer>
        <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
            {title.toUpperCase()}
        
        </TitleContainer>
        <PreviewContainer>
            {items
                .filter((item, idx) => idx < 4)
                .map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </PreviewContainer>
    </ProductsPreviewContainer>
);

export default withRouter(ProductsPreview);