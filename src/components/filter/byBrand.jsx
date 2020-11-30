import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterBrand } from '../../store/action_creatores'

function BrandFilter () {
    const dataList = useSelector (
        (store)=> {
            return store.app.brandList;
        }
    );

    let brandArr = useSelector((store)=> store.app.filter.brand);

    const dispatch = useDispatch();

    function handleCheck (e) {

        if (e.target.checked) {
            brandArr.push(e.target.getAttribute('id'));
        } else {
            let key = brandArr.indexOf(e.target.getAttribute('id'));
            brandArr.splice(key, 1);
        };
        dispatch(updateFilterBrand(brandArr));
    }

    function handleClick (e) {
        dispatch(updateFilterBrand([]));
        let collection = e.target.parentElement.children;
        for (let i = 0; i < collection.length-1; i++) {
            collection[i].firstChild.checked = false;
        }
    }

    function renderList (item) {
        return (
        <div key= { item.id } className="form-check">
            <input className="form-check-input" type="checkbox" onChange={handleCheck} value="" id={item.id}/>
            <label className="form-check-label" for="amado">{item.title}</label>
        </div>
        )
    };

    return (
        <div className="widget brands mb-50">
            <h6 className="widget-title mb-30">Brands</h6>
            <div className="widget-desc">
                {
                    dataList.map(renderList)
                }
                <button onClick={handleClick} style={{border: "none", cursor: "pointer", textDecoration: "none"}}>Сбросить фильтр</button>
            </div>
        </div>
    )
}

export default React.memo(BrandFilter)