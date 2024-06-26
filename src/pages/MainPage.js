import React from 'react';
import { Link } from 'react-router-dom';


function MainPage() {
  return (
    <div>
    <main className="container">
      <section>
        <h2>Welcome to SeoulTalk <img src="img/palace.png" alt="Welcome Icon" className="welcome-icon" style={{ verticalAlign: 'middle' }} /></h2>
        <p>SeoulTalk is your gateway to mastering the Korean language! Whether you're a beginner or looking to enhance your skills, SeoulTalk offers an immersive learning experience tailored to your needs. Dive into our interactive quizzes, track your progress, and practice writing and listening with engaging exercises. Start your journey to fluency today and explore the rich culture and language of Korea with SeoulTalk!</p>
      </section>

      <section>
        <h2>Explore</h2>
        <div className="card-container">
          <div className="card">
            <img src="img/quizzes.png" alt="Quizzes" />
            <div className="card-content">
              <h3>Quizzes</h3>
              <p>Test your knowledge with interactive quizzes.</p>
              <Link to="/quizzes" className="btn">Explore</Link>
            </div>
          </div>
          <div className="card">
            <img src="img/progress.png" alt="Progress" />
            <div className="card-content">
              <h3>Progress</h3>
              <p>Track your learning progress and achievements.</p>
              <Link to="/profile" className="btn">Explore</Link>
            </div>
          </div>
          <div className="card">
            <img src="img/writing_practice.png" alt="Writing Practice" />
            <div className="card-content">
              <h3>Writing Practice</h3>
              <p>Practice writing Korean characters and sentences.</p>
              <Link to="/words" className="btn">Explore</Link>
            </div>
          </div>
          <div className="card">
            <img src="img/listening_practice.png" alt="Listening Practice" />
            <div className="card-content">
              <h3>Listening Practice</h3>
              <p>Enhance your listening skills with audio exercises.</p>
              <Link to="/words" className="btn">Explore</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  );
}

export default MainPage;
