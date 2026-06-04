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
              I'm Marvin, a first-gen student at UC Irvine transitioning from Computer Science to Business 
              Information Management. Right now, I'm focused on mastering data and problem-solving—like building 
              SQL databases—with the ultimate goal of learning how to design technology that addresses real-world 
              human needs.
            </p>
            <p>
              As VP of La Unidad Latina, Lambda Upsilon Lambda Fraternity, Inc. at UCI, I've learned that
               leadership is a collaborative effort of consistent service; working with my chapter to manage 
               the logistics so our community can move forward together. This role has allowed me to sharpen 
               my professional skills in operations and project management while collectively working to uplift 
               Latino students and champion higher education.
            </p>
            <p>
              Away from my laptop, I’m usually searching for aesthetic local spots and hidden food gems with 
              friends, or hopping onto Minecraft and Overwatch to unwind and catch up. For me, whether we are 
              analyzing an art exhibit or just debriefing our week in a casual game lobby, it's all about the 
              environment. I place a high value on how I show up for others, aiming to create genuine, comfortable 
              spaces where everyone feels included and heard.
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
