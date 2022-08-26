/* eslint-disable no-alert */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import { sendEmailVerification } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoginImg from '../assets/images/draw2.svg';
import Cart from '../components/Cart';
import PlayersCard from '../components/PlayersCard';
import useAuth from '../hooks/useAuth';

function Home() {
    const navigate = useNavigate();
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
        user,
        signOut,
        auth,
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

    const handleLogout = () => {
        signOut(auth);
    };

    const sendVerificationEmail = async () => {
        await sendEmailVerification(auth.currentUser).then(() => {
            alert('Email sent. Please check your inbox.');
        });
    };

    return (
        <div className="container">
            <div>
                {user && (
                    <div className="absolute right-10 top-10">
                        <button
                            type="button"
                            className="primary-btn bg-slate-600 text-white shadow-none"
                            onClick={() => handleLogout()}
                        >
                            {' '}
                            Logout{' '}
                        </button>
                    </div>
                )}
            </div>
            {user ? (
                user?.emailVerified ? (
                    <div className="grid grid-cols-12 gap-4 my-4 lg:my-12">
                        <div className="col-span-12 lg:col-span-8">
                            <h1 className="text-center text-3xl text-darkChocolate mb-10">
                                Welcome to BPL Players Draft,{' '}
                                <span className="text-green-500 font-semibold text-md">
                                    {user?.email}
                                </span>
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
                ) : (
                    <div className="flex justify-center items-center h-screen flex-col">
                        <h1 className="text-slate-600 font-semibold text-center">
                            Please verify your email to proceed next...
                            <p className="text-sm text-green-500">{user?.email}</p>
                        </h1>
                        <Link
                            to="/verify"
                            className="mt-6 block w-52 text-center bg-slate-700 px-2 py-3 text-white rounded-md font-semibold"
                        >
                            Visit Verification Page
                        </Link>
                    </div>
                )
            ) : (
                <div className="flex justify-center items-center h-screen flex-col">
                    <img src={LoginImg} alt="login" className="h-72 w-72" />
                    <h1 className="text-center -ml-5 text-2xl text-slate-800">
                        Please Login to see our content
                    </h1>
                    <div className="relative mt-12">
                        <Link to="/login" className="primary-btn absolute right-0 top-0">
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
