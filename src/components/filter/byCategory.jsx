import React from 'react';
import { useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { CATALOG } from '../../router/url';

function CategoryFilter () {
    const dataList = useSelector (
        (store)=>{
            return store.app.categoryList;
        }
    );

    function renderList (item) {
        return (
            <li key = {item.id}><Link to={ `${CATALOG}/${item.url}` }>{ item.title }</Link></li>
        )
    };

    return (
        <div className="widget catagory mb-50">
            <h6 className="widget-title mb-30">Catagories</h6>
            <div className="catagories-menu">
                <ul>
                    { 
                        dataList.map(renderList) 
                    }
                    <li><Link to={ `${CATALOG}` }>Все</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default React.memo(CategoryFilter)