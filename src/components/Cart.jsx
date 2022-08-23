/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */
import React from 'react';

function Cart({ cart }) {
    let subTotal = 0;
    let tax = 0;
    let quantity = 0;
    for (const player of cart) {
        quantity += player.quantity;
        subTotal += player.price * player.quantity;
        tax += parseFloat((player.price * player.quantity * 0.1).toFixed(2));
    }
    const total = subTotal + tax;

    return (
        <div className="w-full bg-lightYellow mt-16 lg:mt-0 py-5 lg:py-8 rounded-md px-6 lg:px-24 text-center ">
            <h3 className="text-2xl text-white underline mb-6">Order Summary</h3>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-6">
                <span className="font-semibold">Selected Players: </span>
                <span className="text-slate-500 font-semibold">{quantity}</span>
            </div>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-6">
                <span className="font-semibold">Subtotal: </span>
                <span className="text-slate-500 font-semibold">{`$${subTotal}`}</span>
            </div>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-6">
                <span className="font-semibold">Tax: </span>
                <span className="text-slate-500 font-semibold">{`$${tax}`}</span>
            </div>
            <div className="flex justify-around items-center  text-white mb-3 lg:mb-6">
                <span className="font-semibold">Total: </span>
                <span className="text-slate-500 font-semibold">{`$${total}`}</span>
            </div>
            <div className="text-center">
                <button
                    type="button"
                    className="bg-green-500 px-3 py-1 text-white text-center rounded-md hover:bg-green-700"
                >
                    Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
