import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword } from '../firebase';
import '../css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mode, setMode] = useState('login');  // 'login' or 'signup'

    const handleLogin = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Successful login actions, e.g., redirecting or updating UI
                console.log("Logged in user:", userCredential.user);
            })
            .catch((error) => {
                // Handle login errors
                console.error("Error logging in:", error.message);
                alert("Login failed: " + error.message);
            });
    };

    
    const handleSignup = (event) => {
        event.preventDefault();
        // Use the function directly, passing auth as the first argument
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Account created:", userCredential.user);
                // Additional logic after successful signup
            })
            .catch((error) => {
                console.error("Error creating account:", error.message);
                alert("Signup failed: " + error.message);
            });
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-12 col-lg-4">
                        <div className="card mt-5">
                            <div className="card-body">
                                <form className="mt-4" onSubmit={mode === 'login' ? handleLogin : handleSignup}>
                                    <label htmlFor="email" className="nowrap">
                                        <img src="img/profile_girl.png" alt="Email Icon" className="profile-icon" /> Email
                                    </label>
                                    <input 
                                        type="email" 
                                        className="form-control mt-3" 
                                        id="email" 
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <label htmlFor="password" className="mt-4">
                                        <img src="img/profile_boy.png" alt="Password Icon" className="profile-icon" /> Password
                                    </label>
                                    <input 
                                        type="password" 
                                        className="form-control mt-3" 
                                        id="password" 
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                    <div className="text-center">
                                        <button type="submit" className="btn mt-4 w-100 btn-outline-primary">
                                            {mode === 'login' ? 'Login' : 'Sign Up'}
                                        </button>
                                        <button type="button" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="btn mt-2 w-100 btn-outline-secondary">
                                            {mode === 'login' ? 'New? Create Account' : 'Have an Account? Login'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login;