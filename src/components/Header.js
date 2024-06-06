import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); 
  const [pageTitle, setPageTitle] = useState("Home");

  const handleNavClick = () => {
    setShowMobileNav(!showMobileNav);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (selectedCategory) {
      navigate(`/${selectedCategory}`);
    }
  };

  useEffect(() => {
    // Update page title on location change
    const path = location.pathname;
    switch (path) {
      case "/":
        setPageTitle("Home");
        break;
      case "/words":
        setPageTitle("Words");
        break;
      case "/quizzes":
        setPageTitle("Quizzes");
        break;
      case "/writing":
        setPageTitle("Writing");
        break;
      case "/study":
        setPageTitle("Study Guide");
        break;
      case "/profile":
        setPageTitle("Profile");
        break;
      default:
        setPageTitle("SeoulTalk"); // For unknown pages
    }
  }, [location]);

  return (
    <header>
      <a href="#" className="hamburger" onClick={handleNavClick}><span className="material-icons" aria-label="Menu">menu</span></a>
      <h1>
        <img src="img/seoul.png" alt="Logo" style={{verticalAlign: 'center'}} /> 
        <span id="pageTitle">{pageTitle}</span>
      </h1>
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

      <form onSubmit={handleFormSubmit}>
          <label htmlFor="category">Search:</label>
          <select id="category" name="category" onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="quizzes">Quizzes</option>
            <option value="words">Words</option>
            <option value="writing">Writing</option>
            <option value="study">Study Guide</option>
          </select>
          <button type="submit">Submit</button>
          <hr />
      </form>
    </header>
  );
}

export default Header;