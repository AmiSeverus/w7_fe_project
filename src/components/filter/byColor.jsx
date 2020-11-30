import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterColor } from '../../store/action_creatores';


function ColorFilter () {
    const dataList = useSelector (
        (store)=>{
            return store.app.colorList;
        }
    );

    const colorId = useSelector((store)=> store.app.filter.color);

    const dispatch = useDispatch();

    function handleClick (e) {
        dispatch(updateFilterColor(e.target.getAttribute('data-color')))
    };

    function renderList (item) {
        return (
            <li key={item.id }><a data-color={item.id} href={ item.url } onClick={handleClick} style={{
                backgroundColor: `#${item.color}`,
                border: colorId === item.id ? "3px dashed violet" : "3px solid violet",
                cursor: 'pointer'
            }}>&nbsp;</a></li>            
        )
    }

    return (
        <div className="widget color mb-50">
            <h6 className="widget-title mb-30">Color</h6>
            <div className="widget-desc">
                <ul className="d-flex">
                    {
                        dataList.map(renderList)
                    }
                </ul>
                <a data-color='' style={{
                    cursor: "pointer",
                    fontSize: "20px"
                }} onClick={handleClick} >Сброс фильтра</a>
            </div>
        </div>
    )
}

export default React.memo(ColorFilter)

/*

                    <li><a href="#" className="color1"></a></li>
                    <li><a href="#" className="color2"></a></li>
                    <li><a href="#" className="color3"></a></li>
                    <li><a href="#" className="color4"></a></li>
                    <li><a href="#" className="color5"></a></li>
                    <li><a href="#" className="color6"></a></li>
                    <li><a href="#" className="color7"></a></li>
                    <li><a href="#" className="color8"></a></li>

*/ 