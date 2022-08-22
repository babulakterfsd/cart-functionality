import { useState } from 'react';

const AllStates = () => {
    // states
    const [cart, setCart] = useState([]);

    return {
        cart,
        setCart,
    };
};

export default AllStates;
