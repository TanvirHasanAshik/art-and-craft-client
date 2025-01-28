import React, { useContext } from 'react';
import { UserContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivatePage = ({ children }) => {
    const { user, loading } = useContext(UserContext);
    const location = useLocation();
    if (loading) return null
    if (!user) {
        return <Navigate state={location.pathname} to='/signin' />
    }
    return children
};

export default PrivatePage;