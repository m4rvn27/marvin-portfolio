import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const TITLES = [
  'CS Student @ UC Irvine',
  'Full-Stack Builder',
  'Future BIM Major',
  'Thai Tea Enthusiast ☕',
  'Community Builder',
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(i => i + 1);
      }, charIdx === current.length ? pause : speed);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx(i => i - 1);
      }, speed / 2);
    }

    if (!deleting && charIdx > current.length) {
      setDeleting(true);
    }
    if (deleting && charIdx < 0) {
      setDeleting(false);
      setWordIdx(i => (i + 1) % words.length);
      setCharIdx(0);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function FloatingSticker({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    let x = 0, y = 0;
    let vx = (Math.random() - 0.5) * 0.4;
    let vy = (Math.random() - 0.5) * 0.4;
    let raf;

    const animate = () => {
      x += vx;
      y += vy;
      if (Math.abs(x) > 12) vx *= -1;
      if (Math.abs(y) > 12) vy *= -1;
      if (el) el.style.transform = `translate(${x}px, ${y}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <span ref={ref} className={`floating-sticker ${className}`}>
      {children}
    </span>
  );
}

export default function Hero() {
  const title = useTypewriter(TITLES);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero" id="home">
      <div className={`hero-left ${visible ? 'hero-left--visible' : ''}`}>
        <div className="hero-tag">✦ open to opportunities</div>

        <h1 className="hero-name">
          Hi, I'm<br />
          <em>Marvin.</em>
        </h1>

        <p className="hero-typewriter">
          <span>{title}</span>
          <span className="cursor">|</span>
        </p>

        <p className="hero-bio">
          A chill but ambitious builder who believes in the power of genuine human connection.
          I make things that are actually useful — and I always do it with a thai tea in hand.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn btn--primary">See my work →</a>
          <a href="mailto:mocampo0027@gmail.com" className="btn btn--outline">Say hi →</a>
        </div>

        <div className="hero-scroll-hint">
          <span className="scroll-line" />
          <span>scroll</span>
          <span className="scroll-line" />
        </div>
      </div>

      <div className={`hero-right ${visible ? 'hero-right--visible' : ''}`}>
        <div className="journal-wrap">
          <FloatingSticker className="sticker sticker--star">🌟</FloatingSticker>
          <FloatingSticker className="sticker sticker--tea">🍵</FloatingSticker>
          <FloatingSticker className="sticker sticker--pin">📎</FloatingSticker>
          <FloatingSticker className="sticker sticker--game">🎮</FloatingSticker>

          <div className="journal-card">
            <div className="journal-tape journal-tape--top" />
            <div className="ruled-lines" />

            <div className="journal-rings">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="ring" />
              ))}
            </div>

            <div className="polaroid">
            <img src="/Marvin-headshot.jpg" alt="Marvin" className="polaroid-img" />
            <p className="polaroid-caption">marvin ✦</p>
            </div>

            <p className="journal-hi">hi!</p>
            <div className="journal-divider" />
            <p className="journal-text">
              CS student at UC Irvine, making the move into Business Information Management.
              I build full-stack apps that actually get used, lead my fraternity chapter as VP,
              and explore cities with friends on weekends.
              <br /><br />
              I genuinely believe that the ability to connect with people is a superpower —
              and I bring that into everything I build and every team I join.
            </p>

            <div className="journal-footer">
              <span className="journal-footer-tag">— Marvin, Spring 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background doodles */}
      <div className="hero-doodle hero-doodle--1">✦</div>
      <div className="hero-doodle hero-doodle--2">· · ·</div>
      <div className="hero-doodle hero-doodle--3">✦</div>
    </section>
  );
}
