import React from 'react';
import { useInView } from '../hooks/useInView';
import './Experience.css';

const experiences = [
  {
    date: 'Mar 2026 – Present',
    title: 'Vice President',
    org: 'La Unidad Latina, Lambda Upsilon Lambda · UC Irvine',
    bullets: [
      'Oversees a pipeline of 5+ events per quarter, managing all chapter logistics and university compliance',
      'Primary delegate to the UCI MSFC council, representing and building community for a diverse student body',
    ],
    type: 'leadership',
  },
  {
    date: 'Jul 2025 – Present',
    title: 'TELACU Scholar',
    org: 'Telacu College Success Program',
    bullets: [
      'Selected for academic excellence and leadership potential',
      'Active participant in mentorship, career development, and professional growth programs',
    ],
    type: 'award',
  },
  {
    date: 'Mar 2026 – Present',
    title: 'Independent Developer',
    org: 'Hirono Collectors Log · Personal Project',
    bullets: [
      'Architected a relational PostgreSQL database via Supabase with sub-200ms retrieval on 100+ entries',
      'Developed a responsive full-stack interface with real-time tracking, rarity filtering, and data visualization',
    ],
    type: 'project',
  },
  {
    date: 'Feb 2024 – Present',
    title: 'Crew Member (Operations)',
    org: "Carl's Jr. · Bell, CA",
    bullets: [
      'Maintained 100% cash-drawer accuracy through precise POS data entry and financial reconciliation',
      'Achieved sub-3-minute average service time during peak hours through workflow optimization',
    ],
    type: 'work',
  },
  {
    date: 'May 2022 – Sep 2023',
    title: 'Event Striker',
    org: 'Penelope Pots Studio · Long Beach, CA',
    bullets: [
      'Directed teardown and transport for 10+ large-scale events under strict 2-hour deadlines',
      'Maintained organized workflows ensuring 100% project completion and zero inventory loss',
    ],
    type: 'work',
  },
];

const typeColors = {
  leadership: '#A0522D',
  award: '#B8860B',
  project: '#7C5C3E',
  work: '#9B8170',
};

const typeLabels = {
  leadership: 'Leadership',
  award: 'Award',
  project: 'Project',
  work: 'Work',
};

export default function Experience() {
  const [ref, inView] = useInView();

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className={`experience-inner ${inView ? 'experience-inner--visible' : ''}`}>
        <div className="section-label">Experience</div>
        <p className="section-sub">where i've shown up</p>

        <div className="timeline">
          <div className="timeline-line" />

          {experiences.map((exp, i) => (
            <div
              key={i}
              className="timeline-item"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="timeline-dot" style={{ borderColor: typeColors[exp.type] }} />

              <div className="timeline-content">
                <div className="timeline-header">
                  <span className="timeline-date">{exp.date}</span>
                  <span
                    className="timeline-type"
                    style={{
                      color: typeColors[exp.type],
                      borderColor: `${typeColors[exp.type]}55`,
                      background: `${typeColors[exp.type]}12`,
                    }}
                  >
                    {typeLabels[exp.type]}
                  </span>
                </div>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-org">{exp.org}</p>
                <ul className="timeline-bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
