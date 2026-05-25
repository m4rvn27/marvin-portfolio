import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import './Projects.css';

const projects = [
  {
    num: '01',
    name: 'Hirono Collectors Log',
    role: 'Independent Developer · Mar 2026 – Present',
    desc: 'A full-stack web app for Pop Mart\'s Hirono series — built end-to-end from database schema to deployment. Features real-time collection tracking, rarity filtering, and dynamic data visualization backed by a PostgreSQL/Supabase architecture with sub-200ms queries.',
    tags: ['JavaScript', 'HTML/CSS', 'PostgreSQL', 'Supabase', 'SQL'],
    link: null,
    wip: false,
  },
  {
    num: '02',
    name: 'More coming soon...',
    role: 'Always building',
    desc: 'I\'m always working on something new. Got a cool idea or want to collaborate? Shoot me a message — I love building things that solve real problems.',
    tags: ['TBD'],
    link: 'mailto:mocampo0027@gmail.com',
    wip: true,
  },
];

function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotate(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-4px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
  };

  return (
    <div
      ref={cardRef}
      className={`project-card tape ${project.wip ? 'project-card--wip' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="project-num">{project.num}</span>

      <p className="project-role">{project.role}</p>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-desc">{project.desc}</p>

      <div className="project-tags">
        {project.tags.map(t => (
          <span className="tag" key={t}>{t}</span>
        ))}
      </div>

      {project.link && (
        <a href={project.link} className="project-link">
          Get in touch →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView();

  return (
    <section className="section section--alt projects" id="projects" ref={ref}>
      <div className={`projects-inner ${inView ? 'projects-inner--visible' : ''}`}>
        <div className="section-label">Projects</div>
        <p className="section-sub">things i've built from scratch</p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
