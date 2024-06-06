import React from 'react';
import { auth } from '../firebase';

function UserProfile({ user }) {
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

export default UserProfile;