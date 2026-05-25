import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import './Skills.css';

const skills = [
  { name: 'Python', size: 'lg' },
  { name: 'SQL', size: 'lg' },
  { name: 'JavaScript', size: 'lg' },
  { name: 'HTML & CSS', size: 'md' },
  { name: 'Supabase', size: 'md' },
  { name: 'PostgreSQL', size: 'md' },
  { name: 'VS Code', size: 'md' },
  { name: 'Office 365', size: 'md' },
  { name: 'Strategic Planning', size: 'sm' },
  { name: 'Team Leadership', size: 'sm' },
  { name: 'Process Optimization', size: 'sm' },
  { name: 'Technical Documentation', size: 'sm' },
  { name: 'Project Management', size: 'sm' },
  { name: 'Data Visualization', size: 'sm' },
  { name: 'Event Operations', size: 'sm' },
];

export default function Skills() {
  const [ref, inView] = useInView();
  const [hovered, setHovered] = useState(null);

  return (
    <section className="section section--alt skills" id="skills" ref={ref}>
      <div className={`skills-inner ${inView ? 'skills-inner--visible' : ''}`}>
        <div className="section-label">Skills</div>
        <p className="section-sub" style={{ textAlign: 'center' }}>tools i actually know how to use</p>

        <div className="skills-cloud">
          {skills.map((skill, i) => (
            <span
              key={skill.name}
              className={`skill-pill skill-pill--${skill.size} ${hovered === i ? 'skill-pill--hovered' : ''}`}
              style={{ transitionDelay: `${i * 45}ms` }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {skill.name}
            </span>
          ))}
        </div>

        <p className="skills-note">
          ✦ always learning, always adding to this list ✦
        </p>
      </div>
    </section>
  );
}
