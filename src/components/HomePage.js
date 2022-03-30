import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { selectSignedIn, setSignedIn, setUserData } from '../features/userSlice';
// style
import '../styling/home.css';

const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);

    return (
        <div className='home__page' style={{ display: isSignedIn ? 'none' : '' }}>
            {!isSignedIn ? (
                <div className='login__message'>
                    <h2>📗</h2>
                    <h1>A Readers favourite place!</h1>
                    <p>
                        We provide high quality online resource for reading blogs. Just sign up and start reading some
                        quality blogs.
                    </p>
                    <button className='login__button'>Login with Google</button>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Homepage;
