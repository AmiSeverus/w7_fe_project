import React from 'react';
import logo from './img/logo2.png';

function FooterLogo () {

    return (
        <div className="footer-logo mr-50">
         <a href="index.html"><img src={ logo } alt=""/></a>
        </div>
    )
}

export default React.memo(FooterLogo);