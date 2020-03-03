import React, { useReducer } from 'react';
import AuthContext from './authContext';
import authReducer from './authReducer';
import axios from 'axios';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    // Load User
    const loadUser = async () => {
        console.log('load user');
    };

    // Register user
    const register = async formData => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
        } catch (err) {
            console.error(err.message);
        }
    };

    // Login User
    const login = async () => {
        console.log('login');
    };

    // Logout
    const logout = () => {
        console.log('logout');
    };

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                loadUser,
                register,
                login,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
