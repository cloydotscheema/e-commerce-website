import { createSelector } from 'reselect';

const selectProductsMenu = state => state.productsMenu;

export const selectProductsMenuSections = createSelector(
    [selectProductsMenu],
    productsMenu => productsMenu.productsMenuSections
);