import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleNavClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header>
      <a href="#" className="hamburger" onClick={handleNavClick}><span className="material-icons" aria-label="Menu">menu</span></a>
      <h1><img src="img/seoul.png" alt="Logo" style={{verticalAlign: 'center'}} /> Home</h1>
      <nav>
        <ul>
          <li><img src="img/seoul.png" alt="Logo" style={{verticalAlign: 'center'}} /> SeoulTalk</li>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/words">WORDS</Link></li>
          <li><Link to="/quizzes">QUIZ</Link></li> 
          <li><Link to="/writing">WRITING</Link></li>
          <li><Link to="/study">STUDY GUIDE</Link></li>
          <li><Link to="/profile">PROFILE</Link></li>
        </ul>
      </nav>

      <nav className={`mobile-nav ${showMobileNav ? 'active' : ''}`}>
        <span className="material-icons close-btn" aria-label="Close" onClick={handleNavClick}>close</span>
        <ul>
          <li><Link to="/" onClick={() => setShowMobileNav(false)}>HOME</Link></li>
          <li><Link to="/words" onClick={() => setShowMobileNav(false)}>WORDS</Link></li>
          <li><Link to="/quizzes" onClick={() => setShowMobileNav(false)}>QUIZ</Link></li>
          <li><Link to="/writing" onClick={() => setShowMobileNav(false)}>WRITING</Link></li>
          <li><Link to="/study" onClick={() => setShowMobileNav(false)}>STUDY GUIDE</Link></li>
          <li><Link to="/profile" onClick={() => setShowMobileNav(false)}>PROFILE</Link></li>
        </ul>
      </nav>

      <form>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" name="search" />
          <label htmlFor="filter">Filter:</label>
          <input type="text" id="filter" name="filter" />
          <button type="submit">Submit</button>
          <hr />
      </form>
    </header>
  );
}

export default Header;
