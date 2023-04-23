const INITIAL_STATE = {
    productsMenuSections: [
    {
        title: 'women',
        // imageUrl: '../../data/women.png',
        imageUrl: 'https://static.wixstatic.com/media/360ea3_72b55505c529483aa383d5ab8550adcf~mv2.png',
        size: 'large',
        id: 4,
        linkUrl: 'shop/women'
    },
    {
        title: 'men',
        imageUrl: 'https://static.wixstatic.com/media/360ea3_ae5d67dd7a714563a139a6f1441aec5f~mv2.png',
        size: 'large',
        id: 5,
        linkUrl: 'shop/men'
    },
    {
        title: 'hats',
        imageUrl: 'https://static.wixstatic.com/media/360ea3_0a7ed57d6793431ba21a3d5d032d2b50~mv2.png',
        size: 'large',
        id: 1,
        linkUrl: 'shop/hats'
    },
    {
        title: 'jackets',
        imageUrl: 'https://static.wixstatic.com/media/360ea3_8b9847d378c548d78daa4a213468a139~mv2.png',
        size: 'large',
        id: 3,
        linkUrl: 'shop/jackets'
    },
    {
        title: 'shoes',
        //imageUrl: 'https://ibb.co/74CCymW',
        imageUrl: 'https://static.wixstatic.com/media/360ea3_a4e74e1f82aa4fab86235578c5d2ec1d~mv2.png',
        size: 'large',
        id: 2,
        linkUrl: 'shop/shoes'
    }]
}


const productsMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
};

export default productsMenuReducer;