import React from 'react';
import OneItem from '../components/catalogelement/oneItem';
import { useSelector } from 'react-redux';
import { CatalogFilter } from '../components/filter/index';
import { Sort } from '../components/catHeaderSort'
import { Lists } from '../components/catFooterLists/lists'


function getCategoryID (categoryName, categoryList) {
    let res = '';
    categoryList.forEach (
        (item)=>{
            if (item.url === categoryName){
                res = item.id
            }
        }
    );
    return res;
}

function CatalogPage(props) {
    const catalogList = useSelector((store)=> store.app.catalogList);
    const filter = useSelector((store)=> store.app.filter);
    const categoryList = useSelector((store)=> store.app.categoryList);

    const categoryId = getCategoryID (props.match.params.categoryName, categoryList);
    const colorId = filter.color;
    const brandArr = filter.brand;
    const priceRange = filter.price;
    const sort = filter.sort;
    const view = filter.view;
    const viewList = filter.viewList;

    let min = 1+(+view)*(+viewList-1);
    let max = (+view)*(+viewList);

    let viewListArr = [min,max];

    let listNumber = 1;

    let finalCatalog = catalogList;

    
    function filterCategory (item) {
        return item.category === categoryId
    };

    function filterColor (item) {
        return item.colors === colorId
    };

    function filterPrice (item) {
        if (item.price >= priceRange[0] && item.price <= priceRange[1]) {
            return item.price
        }
    };

    function filterbrand (item) {
        if (brandArr.includes(item.brand)) {
            return item.brand
        }
    }

    if (props.match.params.categoryName) {
        finalCatalog = catalogList.filter(filterCategory)
    };

    if (colorId) {
        finalCatalog = catalogList.filter(filterColor)
    };

    if (priceRange[0]) {
        finalCatalog = catalogList.filter(filterPrice)
    };

    if (brandArr[0]){
        finalCatalog = catalogList.filter(filterbrand)
    }

    if (sort == "Lowest") {
        finalCatalog.sort((a,b)=>{
            return (+a.price) - (+b.price)
        })
    } else if (sort == "Highest") {
        finalCatalog.sort((a,b)=>{
            return (+b.price) - (+a.price)
        })
    } else {
        finalCatalog.sort((a,b)=>{
            return (+a.id) - (+b.id)
        })
    }

    if (!(+view == 0)) {
        listNumber = Math.ceil(finalCatalog.length/(+view))
    }

    let a = finalCatalog;
    a.filter(
        (item, index) => {
            if ((index+1) <= max && (index+1) >= min ){
                return item
            }
        }
    )

    console.log(min, max)

    /*a.filter(
        (item, index)=>{
            if ((index+1) <= max && (index+1) >= min){
                return item
            }
        }
    )
    */
    //console.log(a)

    return (
        <>
        <CatalogFilter/>
        <div className="amado_product_area section-padding-100">
            <div className="container-fluid">
                <Sort/>
                <div className="row">
                    {
                        a.map((item)=> <OneItem
                            key = {item.id}  
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            img_url = {item.img_url}
                        /> )
                    }
                </div>
                <Lists number = {listNumber}/>
            </div>
        </div>
        </>
    )
}

export default CatalogPage;