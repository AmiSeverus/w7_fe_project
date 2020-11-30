export const ROOT = '/';
export const CATALOG = '/catalog';
export const CART = '/cart';
export const CATALOG_CATEGORY = `${CATALOG}/:categoryName`;
export const CHECKOUT = '/checkout';
export const VIEW_ONE = `${CATALOG}/info_:itemId`

export const NAV = [
    {
        title: 'home',
        url: ROOT,
    },
    {
        title: 'catalog',
        url: CATALOG,
        children: [
            {
                title: 'view element',
                url: VIEW_ONE,
            },
        ]
    },
    {
        title: 'cart',
        url: CART,
    },
    {
        title: 'checkout',
        url: CHECKOUT,
    },
    
];