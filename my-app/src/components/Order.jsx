import React from 'react';

const Ordered = ({ order, price }) => {
    return (
        <>
            <h4>{order} ${price}</h4>
        </>
    );
};

export default Ordered;