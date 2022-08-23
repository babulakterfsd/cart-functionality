/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import Cart from '../components/Cart';
import PlayersCard from '../components/PlayersCard';
import useAuth from '../hooks/useAuth';

function Home() {
    const {
        addToDb,
        getStoredCart,
        removeFromDb,
        deleteShoppingCart,
        cart,
        setCart,
        players,
        setPlayers,
        QuantityCount,
        setQuantityCount,
    } = useAuth();

    useEffect(() => {
        fetch('products.JSON')
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, [setPlayers]);

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = players.find((product) => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [players, getStoredCart, setCart]);

    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-4 my-4 lg:my-12">
                <div className="col-span-12 lg:col-span-8">
                    <h1 className="text-center text-3xl text-darkChocolate mb-10">
                        Welcome to BPL Players Draft
                    </h1>
                    <div className="grid grid-cols-12 lg:gap-x-3 lg:gap-y-5 px-3 lg:px-0">
                        {players.map((player) => (
                            <div key={player.id} className="col-span-12 lg:col-span-4">
                                <PlayersCard player={player} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:fixed lg:top-1/3  lg:right-1 h-48 lg:80">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
}

export default Home;
