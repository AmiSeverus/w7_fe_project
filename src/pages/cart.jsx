import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import OneCartElem from "../components/cartelem/oneCartElem"
import { CHECKOUT } from "../router/url"

function Cart() {

    let total = useSelector((store)=> store.app.cart.total);
    let cartArrDet = useSelector((store)=> store.app.cart.items);
    let cartArrQty = useSelector((store)=> store.app.cart.amount);

    return (
        <div className="cart-table-area section-padding-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-8">
                        <div className="cart-title mt-50">
                            <h2>Shopping Cart</h2>
                        </div>
                        <div className="cart-table clearfix">
                            <table className="table table-responsive" tabindex="1" style={{overflow: "hidden", outline: "none"}}>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartArrDet.map((item, index)=><OneCartElem
                                            id = {item.id}
                                            title = {item.title}
                                            price = {item.price}
                                            img_url = {item.img_url}
                                            index = {index}
                                            amount = {cartArrQty[index]}
                                        />
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="cart-summary">
                            <h5>Cart Total</h5>
                            <ul className="summary-table">
                                <li><span>subtotal:</span> <span>${total}</span></li>
                                <li><span>delivery:</span> <span>Free</span></li>
                                <li><span>total:</span> <span>${total}</span></li>
                            </ul>
                            <div className="cart-btn mt-100">
                                <Link to={CHECKOUT} className="btn amado-btn w-100">Checkout</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;