import React from 'react';

function SortLi(props) {
    const {value, handleOptionChoose} = props
    return (
        <>
            <li data-value="value" className="option" onClick={handleOptionChoose}>{value}</li>
        </>
    );
}

export default SortLi;