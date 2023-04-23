import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateCollections } from '../../redux/shop/shop-actions';
import SHOP_DATA from '../../Pages/resources/shop.data';
import './search-products.css';

const shopData = new Map();

shopData.set('women', 0);
shopData.set('men', 1);
shopData.set('hats', 2);
shopData.set('jackets', 3);
shopData.set('shoes', 4);

const SearchProducts = ({ updateCollections }) => {
    const [searchValue, setSearchValue] = React.useState('');
    const category = window.location.href.split('/');
    const currentCategory = category[category.length-2];
    const shouldShowFilterInput = currentCategory === 'shop';

    const onInputChange = (event) => {
        setSearchValue(event.target.value);
        const category = window.location.href.split('/')
        const currentCategory = category[category.length-1]
        const searchValue1 = event.target.value;
        const shopData = SHOP_DATA.filter(res => res.routeName === currentCategory);
        const filteredItems = shopData[0].items.filter(res => res.name.toUpperCase().includes(searchValue1.toUpperCase()))
    
        updateCollections(filteredItems);
    };

    return (
        shouldShowFilterInput &&
        <input
            className='filter-input'
            value={searchValue}
            onChange={onInputChange}
            type='search'
            placeholder='Search...'
        >
        </input>
    );
};

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default withRouter(connect(null, mapDispatchToProps)(SearchProducts));