import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterPrice } from '../../store/action_creatores';


function PriceFilter () {
    const dataList = useSelector (
        (store)=>{
            return store.app.priceRange;
        }
    );
    
    const dispatch = useDispatch();

    function handleCoordDeterm (e) {
        let slider = e.target;
        let box = slider.parentElement;
        box.addEventListener('mousemove', handleMousemove);

        function handleMousemove (e) {
            let boxLeft = box.getBoundingClientRect().left;
            let boxWidth = box.getBoundingClientRect().width;
            let onePer = boxWidth/100;
            let left = (e.clientX-boxLeft)/onePer;
            if (left > 0 && left < 100) {
                slider.style.left = left + "%"
            };

            const onePerVal = ((+e.target.parentElement.getAttribute('data-max')) - (+e.target.parentElement.getAttribute('data-min')))/100;

            let minPer = +e.target.parentElement.firstElementChild.nextElementSibling.style.left.slice(0, -1);
            let maxPer = +e.target.parentElement.lastElementChild.previousElementSibling.style.left.slice(0, -1);

            let min = Math.round(+e.target.parentElement.getAttribute('data-min') + minPer*onePerVal);
            let max = Math.round(+e.target.parentElement.getAttribute('data-max') - (100-maxPer)*onePerVal);

            e.target.parentElement.nextElementSibling.textContent = `$${min} - $${max}`;

            dispatch(updateFilterPrice([min, max]))
        }
        
        document.onmouseup = handleStop;

        function handleStop () {
            box.removeEventListener('mousemove', handleMousemove)
        }
    };

    function filterReset (e) {
        e.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.style.left = "0%";
        e.target.parentElement.firstElementChild.lastElementChild.previousElementSibling.style.left = "100%";
        e.target.previousElementSibling.textContent = `$${e.target.parentElement.firstElementChild.getAttribute("data-min")} - $${e.target.parentElement.firstElementChild.getAttribute("data-max")}`;
        //console.log(e.target.parentElement.firstElementChild.firstElementChild.nextElementSibling.style.left)
    };

    function renderItem (item) {

        return (
            <div className="slider-range">                
                <div data-min={item.priceMin} data-max={item.priceMax} data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="" data-value-max=""  data-label-result="" style={{position: "relative"}}>
                    <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" onMouseDown={handleCoordDeterm} style={{left: "0%", position:"absolute"}}></span>
                    <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" onMouseDown={handleCoordDeterm} style={{left: "100%", position:"absolute"}}></span>
                    <div className="ui-slider-range ui-corner-all ui-widget-header" style={{left: "0%", width: "100%"}}></div>
                </div>
                <div className="range-price">${item.priceMin} - ${item.priceMax}</div>
                <div onClick={filterReset} style={{marginTop: "20px", cursor: "pointer"} }>Сброс фильтра</div>
            </div>          
        )
    }

    return (
        <div className="widget price mb-50">
            <h6 className="widget-title mb-30">Price</h6>
            <div className="widget-desc">
                {
                    dataList.map(renderItem)
                }
            </div>
        </div>
    )
}

export default React.memo(PriceFilter)

