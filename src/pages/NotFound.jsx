import React from 'react';
import { Link } from 'react-router-dom';
import Classes from '../styles/NotFound.module.css';

function NotFound() {
    return (
        <div className={`${Classes.notfound} h-screen flex justify-center items-center flex-col`}>
            <h4 className="text-red-400 font-semibold">404 ! Page Not Found !!</h4>
            <div className="mt-7">
                <Link to="/" className="primary-btn py-4">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
