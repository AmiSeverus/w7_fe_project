import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilterView, updateFilterViewList } from '../../store/action_creatores';
import SortOption from '../sortItems/sortOptions';
import SortLi from '../sortItems/sortLi'

export function Viewing(props) {
    const dispatch = useDispatch();
    const view = useSelector((store)=> store.app.view);

    function handleOptionShowingOpen(e){
        if (e.target.classList.value.search("open")==-1){
            e.target.classList.value += " open"
        }else {
            let classListVal = e.target.classList.value.replace("open", "");
            e.target.classList.value = classListVal;
        }
    }

    function handleOptionChoose(e){
        let children = e.target.parentElement.children;
        for (let i = 0; i < children.length; i++){
            children[i].classList.value = "option";
        };
        e.target.classList.value += " selected focus";
        let classListVal = e.target.parentElement.parentElement.classList.value.replace("open", "");
        e.target.parentElement.parentElement.classList.value = classListVal;
        e.target.parentElement.parentElement.firstChild.textContent = e.target.textContent;
        dispatch(updateFilterView(e.target.textContent));
        dispatch(updateFilterViewList("1"))
    }

    return (
        <div className="view-product d-flex align-items-center">
            <p>View</p>
            <form>
                <select name="select" id="viewProduct" style={{display: "none"}}>
                    {
                        view.map((item, index)=> <SortOption
                            key = {index}
                            value = {item}
                        />)
                    }
                </select>
                <div className="nice-select" tabindex="0" onClick={handleOptionShowingOpen} >
                    <span className="current">12</span>
                    <ul className="list">
                        {
                            view.map((item, index)=> <SortLi
                                key = {index}
                                value = {item}
                                handleOptionChoose = {handleOptionChoose}
                            />)
                        }     
                    </ul>
                </div>
            </form>
        </div>
    );
}