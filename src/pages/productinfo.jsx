import React from 'react';
import { useSelector} from 'react-redux';
import OneProduct from '../components/oneProductelem/oneProduct'


function Productinfo(props) {

    const productId = props.match.params.itemId;
    const catalogList = useSelector((store)=> store.app.catalogList);

    const productDetails  = catalogList.filter((item)=>{
        if (item.id == productId){
            return item
        }
    })
  
    return (
        <>
            {
                productDetails.map((item)=> <OneProduct
                    id = {item.id}
                    title = {item.title}
                    price = {item.price}
                    img_url = {item.img_url}
                    categoryId = {item.category}
                    available = {item.available}
                /> )
            }
        </>
    );
}

export default Productinfo;