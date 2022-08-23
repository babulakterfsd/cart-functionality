/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';

function PlayersCard({ player }) {
    const [QuantityCount, setQuantityCount] = useState(0);
    const { id, name, price, photo, stock, quantity } = player;
    const { cart, setCart, addToDb, removeFromDb } = useAuth();

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
        setQuantityCount(QuantityCount + 1);
        setCart(newCart);
        addToDb(selectedProduct.id);
    };

    const handleRemoveFromDB = (playerID) => {
        removeFromDb(playerID);
        if (QuantityCount > 0) {
            setQuantityCount(QuantityCount - 1);
        }
    };

    return (
        <div className="w-full max-w-sm rounded-lg border border-gray-200 shadow-md bg-gray-800 text-white my-1.5 lg:my-0">
            <div className="flex flex-col items-center py-5 h-72 relative">
                <div className="flex justify-between space-x-12">
                    <span>
                        In Stock: <span className="text-green-500 font-semibold">{stock}</span>
                    </span>
                    <span>
                        {' '}
                        Quantity:{' '}
                        <span className="text-green-500 font-semibold">{QuantityCount}</span>{' '}
                    </span>
                </div>
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={photo} alt="player" />
                <h5 className="mb-1 text-xl font-medium">{name}</h5>
                <span className="text-sm">{`$${price}`}</span>
                <div className="flex justify-between items-center space-x-10 mt-8">
                    {stock > quantity ? (
                        <button
                            type="button"
                            className="bg-green-500 px-3 py-1 text-white text-center rounded-md hover:bg-green-700"
                            onClick={() => handleAddToCart(player)}
                        >
                            Add to Cart
                        </button>
                    ) : (
                        <button
                            disabled
                            type="button"
                            className="bg-slate-500 px-3 py-1 text-white text-center rounded-md cursor-not-allowed"
                            onClick={() => handleAddToCart(player)}
                        >
                            Add to Cart
                        </button>
                    )}

                    <button
                        type="button"
                        className="bg-lightYellow px-3 py-1 text-white text-center rounded-md hover:bg-yellow-700 disabled"
                        onClick={() => handleRemoveFromDB(player.id)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayersCard;
