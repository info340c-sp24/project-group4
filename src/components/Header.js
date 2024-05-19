import React from 'react';

function Header() {
  return (
    <header>
      <a href="#" className="hamburger"><span className="material-icons" aria-label="Menu">menu</span></a>
      <h1><img src="img/seoul.png" alt="Logo" style={{verticalAlign: 'center'}} /> Home</h1>
      <nav>
        <ul>
          <li><img src="img/seoul.png" alt="Logo" style={{verticalAlign: 'center'}} /> SeoulTalk</li>
          <li><a href="/">HOME</a></li>
          <li><a href="/words">WORDS</a></li>
          <li><a href="/study">STUDY GUIDE</a></li>
          <li><a href="/profile">PROFILE</a></li>
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
