import React from 'react';
import {NAV} from '../router/url';
import NavigationItem from './navigationitem'

function SideNav () {
    return (
        <header className="header-area clearfix">
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true"></i>
            </div>
            <div className="logo">
                <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
            </div>
            <nav className="amado-nav">
                <ul>
                {
                    NAV.map((item)=> (<NavigationItem  
                    url = {item.url} 
                    title = {item.title} 
                    active = {window.location.pathname === item.url}
                    key = {item.url}
                    />)
                    )
                }
                </ul>
            </nav>
            <div className="amado-btn-group mt-30 mb-100">
                <a href="#" className="btn amado-btn mb-15">%Discount%</a>
                <a href="#" className="btn amado-btn active">New this week</a>
            </div>
            <div className="cart-fav-search mb-100">
                <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></a>
                <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</a>
                <a href="#" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</a>
            </div>
            <div className="social-info d-flex justify-content-between">
                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
        </header>
    )
}

export default React.memo(SideNav);