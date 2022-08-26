/* eslint-disable no-lone-blocks */
/* eslint-disable no-unused-vars */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Login() {
    const { signInUsingGoogle, signInWithEmailAndPassword, auth, user } = useAuth();
    const navigate = useNavigate();

    const handleEmailSignIn = async (event) => {
        event.preventDefault();
        const userEmail = event.target.elements.email.value;
        const userPassword = event.target.elements.password.value;
        await signInWithEmailAndPassword(auth, userEmail, userPassword)
            .then(() => {
                alert('Login Successful');
                if (!user?.emailVerified) {
                    navigate('/verify');
                }
            })
            .catch((error) => alert('Login Failed'));
    };

    const GoogleSignIn = async () => {
        await signInUsingGoogle();
        navigate('/');
    };

    if (user) {
        navigate('/');
    }

    return (
        <section className="h-screen">
            <div className="container px-6 h-full">
                <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800 py-12">
                    <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            className="w-full"
                            alt="Phone"
                        />
                    </div>
                    <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                        <form onSubmit={(e) => handleEmailSignIn(e)}>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    name="email"
                                />
                            </div>

                            <div className="mb-6">
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-block px-7 py-3 bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out w-full"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Sign in
                            </button>
                        </form>

                        <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                            <p className="text-center font-semibold mx-4 mb-0">OR</p>
                        </div>

                        <button
                            type="button"
                            className=" px-2 py-3 text-white rounded-md w-full bg-slate-600 shadow-none "
                            onClick={() => GoogleSignIn()}
                        >
                            SignIn with Google
                        </button>

                        <div className="flex justify-center items-center flex-col mt-16 ">
                            <p>
                                Dont have a an account?{' '}
                                <Link to="/resgister" className="text-[#2563eb]">
                                    Create a new account
                                </Link>{' '}
                            </p>
                            <div className="my-7">
                                <Link to="/" className="primary-btn py-4">
                                    Back to Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
