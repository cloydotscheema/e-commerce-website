import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../collection-item/collection-item.component';
import './product-details-styles.scss';
import SHOP_DATA from '../../Pages/resources/shop.data';
import { updateCollections } from '../../redux/shop/shop-actions';

const shopData = new Map();

shopData.set('/shop/women', 0);
shopData.set('/shop/men', 1);
shopData.set('/shop/hats', 2);
shopData.set('/shop/jackets', 3);
shopData.set('/shop/shoes', 4);


const ProductDetailsPage = ({ match, collections, updateCollections }) => {
    const { title, items } = SHOP_DATA[shopData.get(match.url)];

    React.useEffect(() => {
        if(collections === null){
            updateCollections(items);
        }

        return () =>{
            updateCollections(null)
        }
      }, []);

    return (
        collections &&
        <div className="product-details-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    collections.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collections: state.shop.collections
});

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsPage);