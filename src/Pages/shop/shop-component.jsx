import React from 'react';
import { Route } from 'react-router-dom';
import ProductDetailsPage from '../../components/products/product-details-component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import ProductsOverviewComponent from '../../components/collections-overview/products-overview-component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop-actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const ProductsOverviewComponentWithSpinner = WithSpinner(ProductsOverviewComponent);
const ProductDetailsPageWithSpinner = WithSpinner(ProductDetailsPage);

class Shop extends React.Component {

    state = {
        loading: true
    }

    unsubscribeFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            // updateCollections(collectionMap)
            this.setState({ loading: false })
        })
    }
    render() {
        const { match } = this.props
        const { loading } = this.state
        return (
            <div className="shop-page" >
                <Route exact path={`${match.path}`} render={(props) => <ProductsOverviewComponentWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <ProductDetailsPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})
export default connect(null, mapDispatchToProps)(Shop)