import React from 'react';
import { NAV } from '../../router/url';
import { withRouter } from "react-router";
import NavigationItem from '../navigationitem';

function FooterNav (props) {
    return (
                                <nav className="navbar navbar-expand-lg justify-content-end">
                                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" 
                                        data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" 
                                        aria-label="Toggle navigation"><i className="fa fa-bars"/></button>
                                    <div className="navbar-collapse collapse" id="footerNavContent">
                                        <ul className="navbar-nav ml-auto">

                                           {
                                             NAV.map((item)=> (<NavigationItem  
                                                url ={item.url} 
                                                title = {item.title} 
                                                active = {window.location.pathname === item.url}
                                                key = {item.url}
                                                />)
                                                )
                                           }

                                            
                                        </ul>
                                    </div>
                                </nav>
    )
}

export default withRouter(React.memo(FooterNav));