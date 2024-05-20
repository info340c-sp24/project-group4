import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import WordPage from './pages/WordPage';
import Quizzes from './pages/Quizzes'
import Login from './pages/Login';
import StudyGuidePage from './pages/StudyGuidePage';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/words" element={<WordPage />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/study" element={<StudyGuidePage />} />
          <Route path="/profile" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
