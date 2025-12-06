// src/components/home/ProjectSection.jsx
import "./ProjectSection.scss";
import ProjectGrid from "./ProjectGrid";
import ProjectList from "./ProjectList";

export default function ProjectSection({ viewMode }) {
  const isGrid = viewMode === "grid";

  return (
    <section className="projects">
      {isGrid ? <ProjectGrid /> : <ProjectList />}
    </section>
  );
}
