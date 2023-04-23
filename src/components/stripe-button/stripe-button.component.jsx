import React from 'react';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import {emptyCart} from '../../redux/shopping-cart/cart-actions';

const StripeButton = ({ price, clearCart }) => {
    const priceForStripe = price * 100
    //const publishableKey = 'pk_test_TYooMQauvdEDq54NiTphI7jx';
    const publishableKey = 'pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3'

    const onToken = token => {
        console.log(token);
        clearCart();
        alert("Payment Successful");
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='MerchZenith'
            currency='INR'
            billingAddress
            shippingAddress
            image='https://static.wixstatic.com/shapes/360ea3_1bed4f1ad3894fee9eb06583c4d4e296.svg'
            description={`Your total is Rs ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

const mapDispatchToProps = dispatch => ({
    clearCart: () => dispatch(emptyCart())
});

export default connect(
    null,
    mapDispatchToProps
)(StripeButton);