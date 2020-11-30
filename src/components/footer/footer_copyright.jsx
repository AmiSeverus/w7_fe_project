import React from 'react';
import dayjs from 'dayjs';

function FooterCopyr () {

    return (
        <p className="copywrite">
            Copyright ©
            { dayjs().format('YYYY') }<br/> 
            All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"/> by 
            <a href="https://colorlib.com" target="_blank">Colorlib</a>
       </p>
    )
}

export default React.memo(FooterCopyr);