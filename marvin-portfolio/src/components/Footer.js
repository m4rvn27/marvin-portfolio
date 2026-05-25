import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">marvin ocampo gonzalez</p>
        <p className="footer-sub">UC Irvine · Business Information Management · Class of 2028</p>

        <div className="footer-links">
          <a href="mailto:mocampo0027@gmail.com">Email</a>
          <span className="footer-dot">·</span>
          <a href="https://linkedin.com/in/marvin-ocampo-gonzalez" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="footer-dot">·</span>
          <a href="tel:3238473170">(323) 847-3170</a>
        </div>

        <p className="footer-note">made with thai tea & a lot of heart ☕</p>
        <p className="footer-copy">© {year} Marvin Ocampo Gonzalez</p>
      </div>
    </footer>
  );
}
