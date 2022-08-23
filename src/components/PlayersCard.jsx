/* eslint-disable no-unused-vars */
import React from 'react';

function PlayersCard({ player, handleAddToCart }) {
    const { id, name, price, photo, stock, quantity } = player;

    return (
        <div className="w-full max-w-sm rounded-lg border border-gray-200 shadow-md bg-gray-800 text-white my-1.5 lg:my-0">
            <div className="flex flex-col items-center pb-2 h-64 relative">
                <div className="flex justify-between space-x-20">
                    <span>
                        In Stock : <span className="text-green-500 font-semibold">{stock}</span>
                    </span>
                    <span>
                        {' '}
                        Quantity: <span className="text-green-500 font-semibold">
                            {quantity}
                        </span>{' '}
                    </span>
                </div>
                <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={photo} alt="player" />
                <h5 className="mb-1 text-xl font-medium">{name}</h5>
                <span className="text-sm">{`$${price}`}</span>
                <div className="flex justify-between items-center space-x-10 mt-8">
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
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    );
}

export default PlayersCard;
