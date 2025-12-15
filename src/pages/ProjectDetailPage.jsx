import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import projects from "../data/project";
import ProjectCard from "../components/home/ProjectCard";
import "./ProjectDetailPage.scss";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

useEffect(() => {
  window.scrollTo({ top: 0, behavior: "instant" });
}, [id]);

// ✅ Prism 하이라이트: id 바뀔 때마다
useEffect(() => {
  Prism.highlightAll();
}, [id]);

  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="project-detail project-detail--not-found">
        <p>해당 프로젝트를 찾을 수 없다.</p>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  const {
    indexLabel,
    title,
    liveUrl,
    githubUrl,
    heroImage,
    gallery,
    overview,
    techSummary,
    introduce,
    codeReview,
  } = project;


  // 🔹 other project: 현재 프로젝트 제외
  const others = projects.filter((p) => String(p.id) !== String(id));
  const source = others.length > 0 ? others : projects;

  const recommended = [...source]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // 🔹 Other Projects 섹션 애니메이션용
  const othersRef = useRef(null);
  const [othersVisible, setOthersVisible] = useState(false);

  useEffect(() => {
    if (!othersRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOthersVisible(true); // 한 번 보이면 고정
        }
      },
      {
        threshold: 0.15, // 섹션의 15% 정도 보이면 발동
      }
    );

    observer.observe(othersRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="project-detail">
      {/* ===== 디테일 레이아웃 ===== */}
      <div className="project-detail__layout">
        {/* 🔹 왼쪽 고정 영역 */}
        <aside className="project-detail__sidebar">
          <p className="project-detail__index">
            {indexLabel ?? String(project.id).padStart(2, "0")}
          </p>
          <h1 className="project-detail__title title">{title}</h1>

          <div className="project-detail__links">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer">
                Visit Web
              </a>
            )}
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </aside>

        {/* 🔹 오른쪽 스크롤 내용 영역 */}
        <main className="project-detail__content">
          {heroImage && (
            <div className="project-detail__hero">
              <img src={heroImage} alt={title} />
            </div>
          )}

          <section className="project-detail__section">
            <h2>Overview</h2>
            <ul>
              {overview?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="project-detail__section">
            <h2>Tech Stack</h2>
            <ul>
              {techSummary?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </section>

          {gallery?.length > 0 && (
            <section className="project-detail__gallery">
              {gallery.map((src, idx) => (
                <div key={idx} className="project-detail__gallery-item">
                  <img src={src} alt={`${title} screen ${idx + 1}`} />
                </div>
              ))}
            </section>
          )}

          <section className="project-detail__section">
            <h2>Introduce</h2>
            {introduce?.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </section>

{codeReview?.length > 0 && (
  <section className="project-detail__section">
    <h2>Code Review</h2>

    <div className="project-detail__code-list">
      {codeReview.map((block, idx) => (
        <div className="project-detail__code-item-simple" key={idx}>
          
          {/* 제목 */}
{block.title && (
  <h3 className="project-detail__code-title">{block.title}</h3>
)}

{/* 코드 */}
{block.code && (
  <pre className="project-detail__code-snippet">
    <code className="language-js">{block.code}</code>
  </pre>
)}

{block.summary && (
  <p className="project-detail__code-summary">{block.summary}</p>
)}

{/* 설명 (리스트) */}
{block.list && Array.isArray(block.list) && (
  <ul className="project-detail__code-list">
    {block.list.map((item, idx) => (
      <li key={idx}>{item}</li>
    ))}
  </ul>
)}

        </div>
      ))}
    </div>
  </section>
)}

        </main>
      </div>

      {/* ===== 디테일 끝나고, 별도 섹션으로 Other Projects ===== */}
      {recommended.length > 0 && (
        <section
          ref={othersRef}
          className={`project-detail__others-section ${
            othersVisible ? "project-detail__others-section--visible" : ""
          }`}
        >
          <div className="project-detail__others-inner">
            <h2 className="project-detail__others-title title">
              Other Projects
            </h2>
            <div className="project-detail__others-grid">
              {recommended.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
