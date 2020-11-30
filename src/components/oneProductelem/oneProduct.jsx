import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { Link } from 'react-router-dom';
import { ROOT } from '../../router/url';
import { CATALOG } from '../../router/url';
import {SERVER_IMAGES} from '../../utils/constants';
import {addCartItem, addCartQty, updateCartTotal} from '../../store/action_creatores';

function OneProduct(props) {
    let value = 1;
    const {id, title, price, img_url, categoryId, available} = props;
    const categoryList = useSelector((store)=> store.app.categoryList);
    const reviewList = useSelector((store)=> store.app.productReview);
    const total = useSelector((store)=>store.app.cart.total);
    const cart = useSelector((store)=>store.app.cart.items);
    const cartItemQty = useSelector((store)=>store.app.cart.amount);
    const dispatch = useDispatch();

    function getCategoryTitle (categoryId, categoryList) {
        let res = [];
        categoryList.forEach (
            (item)=>{
                if (item.id == categoryId){
                    res = [item.url, item.title]
                }
            }
        );
        return res;
    }

    const category = getCategoryTitle (categoryId, categoryList);

    function getReview (id, reviewList) {
        let res = "";
        /*reviewList.forEach (
            (item)=>{
                if (item.cid == id){
                    res = `${item.user}: ${item.title}`
                }
            }
        );*/
        if (res.length < 1) {
            res = "Пока нет отзыва";
        }
        return res;
    }

    const review = getReview (id, reviewList);
    
    function handleAmount(e){
        if (e.target.parentElement.getAttribute('data') == "plus") {
            value = +e.target.parentElement.previousElementSibling.getAttribute("value");
            value++;
            e.target.parentElement.previousElementSibling.setAttribute("value", value)
        } else if (value > 0) {
            value = +(e.target.parentElement.nextElementSibling.getAttribute("value"));
            value--;
            e.target.parentElement.nextElementSibling.setAttribute("value", value)
        }
    }

    function addCartItemToCart (e){
        dispatch(addCartItem(cart.push({id, img_url, title, price})));
        dispatch(addCartQty(cartItemQty.push(value)))
        dispatch(updateCartTotal((+total) + (+price)*(+value)))
    }

    //const finalReview = review[0] ? `${review[0]}:&nbsp;${review[1]}`: "Пока нет отзыва";
    
    return (
        <div className="single-product-area section-padding-100 clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mt-50">
                                <li className="breadcrumb-item"><Link to={ROOT}>Home</Link></li>
                                <li className="breadcrumb-item"><Link to={CATALOG}>Catalog</Link></li>
                                <li className="breadcrumb-item"><Link to={`${CATALOG}/${category[0]}`}>{category[0]}</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{title}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-7">
                        <div className="single_product_thumb">
                            <img className="d-block w-100" src={`${SERVER_IMAGES}${img_url}`} alt=""/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5">
                        <div className="single_product_desc">
                            <div className="product-meta-data">
                                <div className="line"></div>
                                <p className="product-price">${price}</p>
                                <a href="product-details.html">
                                    <h6>{title}</h6>
                                </a>
                                <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                    <div className="ratings">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="review">
                                        <a href="#">Write A Review</a>
                                    </div>
                                </div>
                                <p className="avaibility"><i className="fa fa-circle"></i> In Stock {available}</p>
                            </div>
                            <div className="short_overview my-5">
                                <p>review</p>
                            </div>
                            <form className="cart clearfix">
                                <div className="cart-btn d-flex mb-50">
                                    <p>Qty</p>
                                    <div className="quantity">
                                        <span data="minus" className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;" onClick={handleAmount}><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                        <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value=''/>
                                        <span data="plus" className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-caret-up" aria-hidden="true" onClick={handleAmount}></i></span>
                                    </div>
                                </div>
                                <button type="button" name="addtocart" value="5" className="btn amado-btn" onClick={addCartItemToCart}>Add to cart</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OneProduct;