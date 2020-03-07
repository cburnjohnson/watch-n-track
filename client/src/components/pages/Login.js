import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';

const Login = props => {
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { login, isAuthenticated, error, clearErrors } = authContext;
    const { setAlert } = alertContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/');
        }
        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
    }, [error, isAuthenticated, props.history]);

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const onChange = e =>
        setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login(loginInfo);
    };

    return (
        <div className='form-container'>
            <h1>
                Log<span className='highlight'>in</span>
            </h1>
            <form onSubmit={onSubmit} className='flex-form login-form'>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={onChange}
                        required
                        minLength='6'
                    />
                </div>

                <div className='form-group'>
                    <input type='submit' value='Login' />
                </div>
            </form>
        </div>
    );
};

export default Login;
