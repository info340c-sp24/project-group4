import React, { useState, useEffect } from 'react';
import { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '../firebase';
import '../css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null); // Add state to track the logged-in user
    const [mode, setMode] = useState('login');  // 'login' or 'signup'

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setUser(user); // Set user if logged in, null otherwise
        });
        return () => unsubscribe(); // Cleanup subscription
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user); // Update user state upon successful login
                console.log("Logged in user:", userCredential.user);
            })
            .catch((error) => {
                console.error("Login failed:", error);
                alert("Login failed: " + error.message);
            });
    };

    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user); // Update user state upon successful signup
                console.log("Account created:", userCredential.user);
            })
            .catch((error) => {
                console.error("Error creating account:", error.message);
                alert("Signup failed: " + error.message);
            });
    };

    if (user) {
        // User is logged in
        return (
            <div>
                <h1>Welcome, {user.email}</h1>
                <p>You are now logged in!</p>
                <button onClick={() => auth.signOut()}>Log out</button>
            </div>
        );
    }

    // User is not logged in
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
