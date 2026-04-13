import React, { useState } from 'react';
const Header = ({ profile }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-content">
        <a href="/" className="logo">
          {profile.name.split(' ')[0]}
          <span className="logo-dot">.</span>
        </a>
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacts</a>
        </nav>
      </div>
    </header>
  );
};
export default Header;