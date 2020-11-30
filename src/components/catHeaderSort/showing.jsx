import React from 'react';


export function Showing (props) {
    return (
        <div className="total-products">
            <p>Showing 1-8 0f 25</p>
            <div className="view d-flex">
                <a href="#"><i className="fa fa-th-large" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a>
            </div>
        </div>
    );
}
