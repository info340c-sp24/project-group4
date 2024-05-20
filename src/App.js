import React from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import WordPage from './pages/WordPage';
import Quizzes from './pages/Quizzes';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      {/* <WordPage /> */}
      {/* <Quizzes /> */}
      <Footer />
    </div>
  );
}

export default App;
