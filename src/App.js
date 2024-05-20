import React from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import WordPage from './pages/WordPage';

function App() {
  return (
    <div>
      <Header />
      <MainPage />
      {/* <WordPage /> */}
      <Footer />
    </div>
  );
}

export default App;
