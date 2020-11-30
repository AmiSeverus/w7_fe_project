import React from 'react';
import { useDispatch } from 'react-redux';
import ListOneItem from './listOneItem';
import { updateFilterViewList } from '../../store/action_creatores';


export function Lists(props) {
    const dispatch = useDispatch();
    const { number } = props;
    let listNumber = [];
    if (number > 1){
        for (let i=1; i <= number; i++){
            listNumber.push(i)
        }
    }

    function handleList(e){
        let lists = e.target.parentElement.parentElement.children;
        for (let i=0; i < lists.length; i++){
            lists[i].classList.value = "page-item"
        };
        e.target.parentElement.classList.value += " active";
        dispatch(updateFilterViewList(e.target.textContent))
    }

    return (
        <div className="row">
            <div className="col-12">
                <nav aria-label="navigation">
                    <ul className="pagination justify-content-end mt-50">
                        {
                            listNumber.map((item, index)=><ListOneItem
                                key = {index}
                                value = {item}
                                handleList = {handleList}    
                            />)
                        }                        
                    </ul>
                </nav>
            </div>
        </div>
    );
}