import React from 'react';

function SortOption(props) {
    const {value} = props
    return (
        <>
            <option value="value">{value}</option>
        </>
    );
}

export default SortOption;