import React, { useState, useEffect } from 'react';
import './Nav.css';

const links = ['About', 'Projects', 'Experience', 'Skills'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#home" className="nav-logo">marvin.</a>

      {/* Desktop links */}
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}>{l}</a>
          </li>
        ))}
        <li>
          <a
            href="mailto:mocampo0027@gmail.com"
            className="nav-cta"
          >
            Say hi →
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className={`nav-burger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`nav-drawer ${menuOpen ? 'nav-drawer--open' : ''}`}>
        {links.map(l => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </a>
        ))}
        <a href="mailto:mocampo0027@gmail.com" onClick={() => setMenuOpen(false)}>
          Say hi →
        </a>
      </div>
    </nav>
  );
}
