/* eslint-disable no-alert */
import { sendEmailVerification, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function Verify() {
    const { user, auth } = useAuth();
    const navigate = useNavigate();
    const sendVerificationEmail = async () => {
        await sendEmailVerification(auth.currentUser).then(() => {
            alert('Email sent. Please check your inbox.');
        });
        await signOut(auth);
        navigate('/login');
    };
    useEffect(() => {
        if (!user?.emailVerified) {
            navigate('/verify');
        }
        if (user?.emailVerified) {
            navigate('/');
        }
    }, [user?.emailVerified, navigate]);

    return (
        <div className="flex justify-center items-center h-screen flex-col">
            <h1 className="text-yellow-700 font-semibold px-1 lg:px-0 mb-1 lg:mb-0">
                Please verify your email to proceed next.
            </h1>
            <button
                type="submit"
                className="primary-btn bg-slate-600 text-white shadow-none"
                onClick={() => sendVerificationEmail()}
            >
                send verification email
            </button>
            <span className="text-center">
                <small>(please check your spam folder also if its not in the primary folder)</small>
            </span>
            <Link
                to="/"
                className="mt-24 block w-40 text-center bg-slate-700 p-2 text-white rounded-md"
            >
                Back to Home
            </Link>
        </div>
    );
}

export default Verify;
