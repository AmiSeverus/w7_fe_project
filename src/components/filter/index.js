import React from 'react'
import ColorFilter from './byColor'
import PriceFilter from './byPrice'
import CategoryFilter from './byCategory'
import BrandFilter from './byBrand'


export function CatalogFilter () {
    
    return (
        <div className="shop_sidebar_area">
            <CategoryFilter/>
            <BrandFilter/>
            <ColorFilter/>
            <PriceFilter/>
        </div>
    )
}