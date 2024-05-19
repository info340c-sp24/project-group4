import React from 'react';

function Header() {
  return (
    <header>
      <a href="#" className="hamburger"><span className="material-icons" aria-label="Menu">menu</span></a>
      <h1><img src="img/seoul.png" alt="Logo" style="vertical-align: middle;" /> Home</h1>
      <nav>
        <ul>
          <li><img src="img/seoul.png" alt="Logo" style="vertical-align: middle;" /> SeoulTalk</li>
          <li><a href="/">HOME</a></li>
          <li><a href="/words">WORDS</a></li>
          <li><a href="/study">STUDY GUIDE</a></li>
          <li><a href="/profile">PROFILE</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
