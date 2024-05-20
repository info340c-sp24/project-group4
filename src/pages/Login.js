import React, { useState } from 'react';
import '../css/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would typically handle the login logic (e.g., sending data to a server)
        console.log('Email:', email, 'Password:', password); 
    };

    return (
        <main>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-sm-12 col-lg-4">
                        <div className="card mt-5">
                            <div className="card-body">
                                <form className="mt-4" onSubmit={handleSubmit}>
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
                                    />

                                    <div className="text-center">
                                        <button type="submit" className="btn mt-4 w-100 btn-outline-primary" id="submit">
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-center mt-2">New? Create Account</p>
        </main>
    );
}

export default Login;