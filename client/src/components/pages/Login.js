import React from 'react';

const Login = () => {
    const onSubmit = e => {
        e.preventDefault();
        console.log('logged in');
    };

    return (
        <div className='form-container'>
            <h1>
                Log<span className='highlight'>in</span>
            </h1>
            <form onSubmit={onSubmit} className='flex-form login-form'>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' name='email' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        required
                        minLength='6'
                    />
                </div>

                <div className='form-group'>
                    <input type='submit' value='Log In' />
                </div>
            </form>
        </div>
    );
};

export default Login;
