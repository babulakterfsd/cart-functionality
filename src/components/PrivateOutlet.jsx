/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function PrivateOutlet() {
    const { user, isLoading, mobile } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return user ? <Outlet /> : <Navigate to="/login" state={location.pathname} replace />;
}

export default PrivateOutlet;
