import React from 'react';
import './Header.css';

import logo from '../images/netflix_logo.png';
import userLogo from '../images/user_logo.png';

const Header = ({ black }) => (
  <header className={black ? 'black' : ''}>
    <div className="header--logo">
      <a href="/">
        <img src={logo} alt="Netflix logo" />
      </a>
    </div>

    <div className="header--user">
      <a href="/">
        <img src={userLogo} alt="Usuário" />
      </a>
    </div>
  </header>
);

export default Header;
