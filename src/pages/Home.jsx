/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import PlayersCard from '../components/PlayersCard';
import { addToDb, getStoredCart } from '../hooks/useLocalStorage';

function Home() {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.JSON')
            .then((res) => res.json())
            .then((data) => setPlayers(data));
    }, []);

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
    }, [players]);

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter((product) => product.id !== selectedProduct.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    return (
        <div className="container">
            <div className="grid grid-cols-12 gap-4 my-12">
                <div className="players col-span-9">
                    <h1 className="text-center text-3xl text-darkChocolate mb-16">
                        Welcome to BPL Players Draft
                    </h1>
                    <div className="grid grid-cols-12 gap-x-3 gap-y-5">
                        {players.map((player) => (
                            <div key={player.id} className="col-span-4">
                                <PlayersCard player={player} handleAddToCart={handleAddToCart} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="cart bg-lightYellow py-8 rounded-md px-24 text-center col-span-3 fixed top-1/3 right-1 h-80">
                    <Cart cart={cart} />
                </div>
            </div>
        </div>
    );
}

export default Home;
