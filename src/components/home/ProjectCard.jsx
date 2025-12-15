// src/components/home/ProjectCard.jsx
import { useNavigate } from "react-router-dom";
import "./ProjectCard.scss";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const { id, title, date, stack, thumbnail } = project;
  const stackLabel = Array.isArray(stack) ? stack.join(" ") : stack;

  const goDetail = () => {
    navigate(`/projects/${id}`);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goDetail();
    }
  };

  return (
    <article
      className="project-card"
      onClick={goDetail}
      onKeyDown={onKeyDown}
      role="button"
      tabIndex={0}
    >
      <div className="project-card__image-wrap">
        <img
          src={thumbnail}
          alt={title}
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
