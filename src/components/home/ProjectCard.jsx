// src/components/home/ProjectCard.jsx
import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  const { title, date, stack } = project;
  const stackLabel = Array.isArray(stack) ? stack.join(" ") : stack;

  return (
// src/components/home/ProjectCard.jsx
<article className="project-card">
  <div className="project-card__image-wrap">
    <img
      src={project.thumbnail}
      alt={project.title}
      className="project-card__image"
    />
  </div>

  <div className="project-card__top">
    <span className="project-card__date">{date}</span>
  </div>

  <div className="project-card__bottom">
    <h3 className="project-card__title">{title}</h3>
    <p className="project-card__stack">{stackLabel}</p>
  </div>
</article>

  );
}
