/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../hooks/useAuth';

function PlayersCard({ player }) {
    const { id, name, price, photo, stock, quantity } = player;
    const { cart, setCart, addToDb, removeFromDb } = useAuth();

    const handleAddToCart = (selectedPlayer) => {
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedPlayer.id);
        if (!exists) {
            selectedPlayer.quantity = 1;
            newCart = [...cart, selectedPlayer];
        } else {
            const rest = cart.filter((product) => product.id !== selectedPlayer.id);
            exists.quantity += 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedPlayer.id);
    };

    const handleRemoveFromDB = (selectedPlayer) => {
        let newCart = [];
        const exists = cart.find((product) => product.id === selectedPlayer.id);
        if (exists) {
            const rest = cart.filter((product) => product.id !== selectedPlayer.id);
            if (exists.quantity >= 1) {
                exists.quantity -= 1;
            } else if (exists.quantity === 0) {
                alert('This player is not in your cart');
            }
            newCart = [...rest, exists];
        }
        if (!exists) {
            alert('This player is not in your cart');
        }
        removeFromDb(selectedPlayer.id);
        setCart(newCart);
    };

    return (
        <div className="w-full max-w-sm rounded-lg border border-gray-200 shadow-md bg-gray-800 text-white my-1.5 lg:my-0">
            <div className="flex flex-col items-center py-3 h-64 relative">
                <div className="bg-green-500 py-1 px-3 rounded-bl-full absolute top-0 right-0">
                    {quantity}
                </div>
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={photo} alt="player" />
                <h5 className="mb-1 text-xl font-medium">{name}</h5>
                <span className="text-sm">{`$${price}`}</span>
                <div className="flex justify-between items-center space-x-10 mt-12">
                    <button
                        type="button"
                        className="bg-green-500 px-3 py-1 text-white text-center rounded-md hover:bg-green-700"
                        onClick={() => handleAddToCart(player)}
                    >
                        Add to Cart
                    </button>
                    <button
                        type="button"
                        className="bg-lightYellow px-3 py-1 text-white text-center rounded-md hover:bg-yellow-700 disabled"
                        onClick={() => handleRemoveFromDB(player)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayersCard;
