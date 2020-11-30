import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {SERVER_IMAGES} from '../../utils/constants';
import {addCartQty, updateCartTotal} from '../../store/action_creatores';

function OneCartElem(props) {

    const dispatch = useDispatch();
    const {img_url, title, price, index} = props;
    let cartItemQty = useSelector((store)=> store.app.cart.amount);
    let amount = useSelector((store)=> store.app.cart.amount)[index];
    let totalSum = useSelector((store)=> store.app.cart.total);

    function handleChangeValue(e){
        let oldAmount = amount;
        if (e.target.getAttribute('data') == "plus"){
            amount++;
        } else if (amount > 0) {
            amount--;
        }
        cartItemQty[index] = amount;
        dispatch(addCartQty(cartItemQty));
        dispatch(updateCartTotal(totalSum - (+price)*oldAmount + (+price)*amount))
    }

    return (
        <tr>
            <td className="cart_product_img">
                <img src={`${SERVER_IMAGES}${img_url}`} alt=""/>
            </td>
            <td className="cart_product_desc">
                <h5>{title}</h5>
            </td>
            <td className="price">
                <span>${price}</span>
            </td>
            <td className="qty">
                <div className="qty-btn d-flex">
                    <p>Qty</p>
                    <div className="quantity">
                        <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty > 1 ) effect.value--;return false;"><i data="minus" onClick={handleChangeValue} className="fa fa-minus" aria-hidden="true"></i></span>
                        <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value={amount}/>
                        <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i data="plus" onClick={handleChangeValue} className="fa fa-plus" aria-hidden="true"></i></span>
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default OneCartElem;