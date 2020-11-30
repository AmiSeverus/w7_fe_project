import React from 'react';
import {Showing} from '../catHeaderSort/showing'
import {Sorting} from '../catHeaderSort/sorting'
import {Viewing} from '../catHeaderSort/viewing'

export function Sort() {

    return (
        <div className="row">
            <div className="col-12">
                <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                    <Showing/>
                    <div className="product-sorting d-flex">
                        <Sorting/>
                        <Viewing/>
                    </div>
                </div>
            </div>
        </div>
    )
}