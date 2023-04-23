import React from 'react';
import { withRouter } from 'react-router-dom';
import {
    ProductDetailsContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './product-list-styles';

const ProductList = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <ProductDetailsContainer
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <BackgroundImageContainer
            className='background-image'
            imageUrl={imageUrl}
        />
        <ContentContainer className='content'>
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
        </ContentContainer>
    </ProductDetailsContainer>
);

export default withRouter(ProductList);