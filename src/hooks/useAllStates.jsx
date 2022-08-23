import { useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart, removeFromDb } from './useLocalStorage';

const AllStates = () => {
    // states
    const [cart, setCart] = useState([]);
    const [players, setPlayers] = useState([]);

    return {
        cart,
        setCart,
        players,
        setPlayers,
        addToDb,
        getStoredCart,
        removeFromDb,
        deleteShoppingCart,
    };
};

export default AllStates;
