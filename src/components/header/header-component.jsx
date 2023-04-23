import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import ShoppingCartIcon from '../shopping-cart/shopping-cart-icon';
import ShoppingCartDropdown from '../shopping-cart/shopping-cart-dropdown-component';
import {
    HeaderContainer,
    TitleAndLogoContainer,
    LogoContainer,
    TitleContainer,
    OptionsContainer
} from './header-styles';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/shopping-cart/cart-selectors';
import SearchProducts from './search-products';

const Header = ({ hidden }) => {
    return (
        <HeaderContainer className="header">
            <TitleAndLogoContainer>
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>
                <TitleContainer to="/">MerchZenith</TitleContainer>
            </TitleAndLogoContainer>

            <OptionsContainer>
                <SearchProducts />
                <ShoppingCartIcon />
            </OptionsContainer>
            {
                hidden ? null : <ShoppingCartDropdown />
            }
        </HeaderContainer>
    );
};

const mapStatetoProps = createStructuredSelector({
    hidden: selectCartHidden
});

export default connect(mapStatetoProps)(Header);