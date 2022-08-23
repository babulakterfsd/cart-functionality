/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import React from 'react';
import useAuth from '../hooks/useAuth';

function Cart({ cart }) {
    const { deleteShoppingCart } = useAuth();
    let subTotal = 0;
    let tax = 0;
    let quantity = 0;
    for (const player of cart) {
        quantity += player.quantity;
        subTotal += player.price * player.quantity;
        tax += subTotal * 0.1;
        tax = Number(tax.toFixed(2));
    }
    const total = subTotal + tax;

    const handleDeleteShoppingCart = () => {
        deleteShoppingCart();
        window.location.reload();
    };

    return (
        <div className=" bg-dark mt-16 lg:mt-0 py-5 lg:py-8 px-6 lg:px-24 text-center lg:rounded-tl-[100px] lg:rounded-br-[100px]">
            <h3 className="text-2xl text-white underline mb-6">Order Summary</h3>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-4">
                <span className="font-semibold">Selected Players: </span>
                <span className="text-slate-500 font-semibold">{quantity}</span>
            </div>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-4">
                <span className="font-semibold">Subtotal: </span>
                <span className="text-slate-500 font-semibold">{`$${subTotal}`}</span>
            </div>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-4">
                <span className="font-semibold">Tax: </span>
                <span className="text-slate-500 font-semibold">{`$${tax}`}</span>
            </div>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-4">
                <span className="font-semibold">Total: </span>
                <span className="text-slate-500 font-semibold">{`$${total}`}</span>
            </div>
            <div className="flex justify-around lg:ml-8 items-center space-x-2 lg:space-x-4">
                <div>
                    <button
                        type="button"
                        className="bg-green-500 px-3 py-1 text-white text-center rounded-md hover:bg-green-700"
                    >
                        Checkout
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="bg-green-500 px-3 py-1 text-white text-center rounded-md hover:bg-green-700"
                        onClick={() => handleDeleteShoppingCart()}
                    >
                        Remove All
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
