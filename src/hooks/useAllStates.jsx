import { useState } from 'react';
import useFirebase from './useFirebase';
import { addToDb, getStoredCart, removeFromDb } from './useLocalStorage';

const AllStates = () => {
    // states
    const [cart, setCart] = useState([]);
    const [players, setPlayers] = useState([]);

    // firebase
    const {
        user,
        isLoading,
        setIsLoading,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        setName,
        updateUser,
        registerWithEmail,
        setResponse,
        name,
        setUser,
        auth,
        signInWithEmailAndPassword,
        response,
        signInUsingGoogle,
        signOut,
    } = useFirebase();

    return {
        cart,
        setCart,
        players,
        setPlayers,
        addToDb,
        getStoredCart,
        removeFromDb,
        user,
        setUser,
        isLoading,
        setIsLoading,
        userEmail,
        setUserEmail,
        userPassword,
        setUserPassword,
        setName,
        updateUser,
        registerWithEmail,
        setResponse,
        name,
        auth,
        signInWithEmailAndPassword,
        response,
        signInUsingGoogle,
        signOut,
    };
};

export default AllStates;
