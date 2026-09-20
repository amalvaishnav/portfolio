import { projects, links } from '../../data/content.js';
import { GitHubIcon } from '../Icons/Icons.jsx';
import styles from './Projects.module.scss';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects} aria-labelledby="projects-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Projects</p>
        <h2 id="projects-title" className={styles.title}>
          Things I've <em>made</em>
        </h2>

        {projects.length > 0 ? (
          <ul className={styles.grid}>
            {projects.map((project) => (
              <li key={project.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.summary}>{project.summary}</p>
                {project.tags?.length > 0 && (
                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                )}
                {project.href && (
                  <a className={styles.link} href={project.href} target="_blank" rel="noopener noreferrer">
                    View project
                  </a>
                )}
              </li>
            ))}
          </ul>
        ) : (
          // TODO: Amal to add real projects in src/data/content.js. Nothing is invented here.
          <div className={styles.empty}>
            <div className={styles.frame} aria-hidden="true">
              <span className={styles.spark} />
              <span className={styles.bar} />
              <span className={`${styles.bar} ${styles.short}`} />
            </div>
            <div>
              <p className={styles.soon}>Case studies coming soon</p>
              <p className={styles.note}>In the meantime, my GitHub is the best place to look around.</p>
              <a className={styles.link} href={links.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon size={20} /> Visit GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
