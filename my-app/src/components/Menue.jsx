import React, { useState } from "react";

const Menu = ({ order, price, addItem }) => {


    const [count, setCount] = useState(0);

// Function to increment the count
    const incrementCount = () => {
        setCount(count + 1);
    };
    const totalPrice = price * count


    const handleClick = () => {
        addItem({ order, price });
        incrementCount();
    };

    return (
        <>
            <div className='card'>
                <h4>{order} ${price}</h4>
                <button onClick={handleClick}>Add Item</button>
                <p>{count}</p>
            </div>
        </>
    )
}

export default Menu