import React from 'react';

function ListOneItem(props) {
    const {value, handleList} = props;
    return (
        <li class="page-item"><a class="page-link" onClick={handleList}>{value}</a></li>
    );
}

export default ListOneItem;