import React from 'react';
import { Link } from 'react-router-dom';
import { CATALOG } from '../../router/url';
import {SERVER_IMAGES} from '../../utils/constants';


function OneRootElem(props) {

    const {price, title, img_url} = props
    return (
        <div>
            <div className="single-products-catagory clearfix">
                <Link to={CATALOG}>
                    <img src={`${SERVER_IMAGES}${img_url}`} alt=""/>
                    <div className="hover-content">
                        <div className="line"></div>
                        <p>From ${price}</p>
                        <h4>{title}</h4>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default OneRootElem;