import React from 'react';
import {useSelector} from 'react-redux'
import OneRootElem from '../components/rootElem/oneRootElem';

function HomePage(props) {

    const catalogList = useSelector((store)=> store.app.catalogList);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }

    let randomIdArr = [];

    while (randomIdArr.length<10){
        randomIdArr.push(getRandomIntInclusive(0, catalogList.length-1))
    }

    /*let finalCatalog = catalogList.forEach((item)=>{
        if (randomIdArr.includes(item.id)){
            finalCatalog.push(item)
            console.log(finalCatalog)
        }
    })

    console.log(finalCatalog)*/

    return (
        <div className="products-catagories-area clearfix">
                <div className="amado-pro-catagory clearfix">
                {
                    catalogList.map((item)=> <OneRootElem  
                            key = {item.id}
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            img_url = {item.img_url}
                        /> 
                    )
                }
            </div>
        </div>
    )      
}

export default HomePage;