import React from 'react';
import { Link } from 'react-router-dom';

function NavigationItem({ active, url,title }) {
    return (
        <li className={`nav-item  ${active ? 'active': ''}`} >
            <Link Link a className="nav-link" to ={url}>{title}</Link>
        </li> 
    )
}

export default React.memo(NavigationItem);