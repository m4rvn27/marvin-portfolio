import React from 'react';
import { useInView } from '../hooks/useInView';
import './About.css';

const facts = [
  { tape: '📍 location', label: 'Based in', value: 'Southern California → Irvine, CA' },
  { tape: '🎓 school', label: 'University', value: 'UC Irvine · BIM (ICS) · Class of 2028' },
  { tape: '☕ fuel', label: 'Powered by', value: 'Thai tea, always' },
  { tape: '🎮 off-hours', label: 'Currently playing', value: 'Fortnite · Minecraft · Overwatch · Roblox' },
  { tape: '🎨 culture', label: 'Also into', value: 'Museum days, cafes & exploring the city' },
  { tape: '✉️ contact', label: 'Email', value: 'mocampo0027@gmail.com' },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section className="section about" id="about" ref={ref}>
      <div className={`about-inner ${inView ? 'about-inner--visible' : ''}`}>
        <div className="section-label">About me</div>
        <p className="section-sub">the person behind the projects</p>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Marvin — a first-gen college student at UC Irvine studying Computer Science,
              currently making the move into Business Information Management in the School of ICS.
              I care about building technology that actually makes a difference for real people.
            </p>
            <p>
              As VP of La Unidad Latina, Lambda Upsilon Lambda Fraternity at UCI, I've learned
              that great leadership is really just consistent service — showing up, managing the
              chaos so others can thrive, and making sure nobody gets left behind.
            </p>
            <p>
              Outside of tech you'll find me exploring restaurants and cafes with friends, admiring
              art at museums, or deep in a Fortnite lobby. I'm the kind of person who remembers
              names, asks how you're <em>really</em> doing, and means it. I genuinely believe
              connection is a superpower.
            </p>
          </div>

          <div className="about-facts">
            {facts.map((f, i) => (
              <div
                className="fact-card"
                key={f.label}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="fact-tape">{f.tape}</span>
                <p className="fact-label">{f.label}</p>
                <p className="fact-value">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
