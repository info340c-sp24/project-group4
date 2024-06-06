import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth, onAuthStateChanged } from './firebase';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import WordPage from './pages/WordPage';
import Quizzes from './pages/Quizzes';
import Login from './pages/Login';
import StudyGuidePage from './pages/StudyGuidePage';
import Writing from './pages/Writing';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); 
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/words" element={<WordPage />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/study" element={<StudyGuidePage />} />
          <Route path='/writing' element={<Writing />} />
          <Route path="/profile" element={currentUser ? <UserProfile user={currentUser} /> : <Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;