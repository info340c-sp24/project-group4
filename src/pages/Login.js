import React, { useState, useEffect } from 'react';
import { auth, database, createUserWithEmailAndPassword, signInWithEmailAndPassword, ref, set, onValue } from '../firebase';
import '../css/login.css'; // Make sure your CSS path is correct

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [user, setUser] = useState(null);
    const [mode, setMode] = useState('login'); // Toggle between 'login' and 'signup'

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                const userRef = ref(database, 'users/' + user.uid);
                onValue(userRef, (snapshot) => {
                    const userData = snapshot.val();
                    setUser({ ...user, ...userData });
                }, { onlyOnce: true });
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe(); // Cleanup subscription on unmount
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .catch((error) => {
                console.error("Login failed:", error);
                alert("Login failed: " + error.message);
            });
    };

    const handleSignup = (event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                set(ref(database, 'users/' + userCredential.user.uid), {
                    name,
                    age,
                    phone
                });
                console.log("Account created:", userCredential.user);
            })
            .catch((error) => {
                console.error("Error creating account:", error.message);
                alert("Signup failed: " + error.message);
            });
    };

    if (user) {
        return (
            <div>
                <h1>Welcome, {user.email}</h1>
                <p>Name: {user.name || 'Not specified'}</p>
                <p>Age: {user.age || 'Not specified'}</p>
                <p>Phone: {user.phone || 'Not specified'}</p>
                <button onClick={() => auth.signOut()}>Log out</button>
            </div>
        );
    }

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-12 col-lg-4">
                        <div className="card mt-5">
                            <div className="card-body">
                                <form onSubmit={mode === 'login' ? handleLogin : handleSignup} className="mt-4">
                                    <label htmlFor="email" className="nowrap">
                                        <img src="img/profile_girl.png" alt="Email Icon" className="profile-icon" /> Email
                                    </label>
                                    <input type="email" className="form-control mt-3" id="email" placeholder="Email"
                                           value={email} onChange={(e) => setEmail(e.target.value)} required/>

                                    <label htmlFor="password" className="mt-4">
                                        <img src="img/profile_boy.png" alt="Password Icon" className="profile-icon" /> Password
                                    </label>
                                    <input type="password" className="form-control mt-3" id="password"
                                           placeholder="Password" value={password}
                                           onChange={(e) => setPassword(e.target.value)} required/>

                                    {mode === 'signup' && (
                                        <>
                                            <input type="text" className="form-control mt-3" placeholder="Name"
                                                   value={name} onChange={(e) => setName(e.target.value)} />
                                            <input type="number" className="form-control mt-3" placeholder="Age"
                                                   value={age} onChange={(e) => setAge(e.target.value)} />
                                            <input type="text" className="form-control mt-3" placeholder="Phone"
                                                   value={phone} onChange={(e) => setPhone(e.target.value)} />
                                        </>
                                    )}

                                    <div className="text-center">
                                        <button type="submit" className="btn mt-4 w-100 btn-outline-primary">
                                            {mode === 'login' ? 'Login' : 'Sign Up'}
                                        </button>
                                        <button type="button" onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                                                className="btn mt-2 w-100 btn-outline-secondary">
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
