// src/pages/HomePage.jsx
import { useEffect, useState, useRef } from "react";
import "./HomePage.scss";
import ProjectSection from "../components/home/ProjectSection";

const HERO_LINES = ["Where Ideas", "Turn", "Into Experiences"];

export default function HomePage({ viewMode }) {
  const [visibleLines, setVisibleLines] = useState(["", "", ""]);
  const [metaVisible, setMetaVisible] = useState(false);

  // 🔹 프로젝트 섹션 애니메이션용
  const projectsRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    const typingSpeed = 70;
    const linePause = 250;
    const startDelay = 200;

    let timerId;

    const typeNext = () => {
      if (lineIndex >= HERO_LINES.length) {
        // 모든 줄 다 쳤으면 메타/프로젝트 섹션 띄울 준비
        setMetaVisible(true);
        return;
      }

      const currentLine = HERO_LINES[lineIndex];

      if (charIndex < currentLine.length) {
        setVisibleLines((prev) => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });

        charIndex += 1;
        timerId = setTimeout(typeNext, typingSpeed);
      } else {
        lineIndex += 1;
        charIndex = 0;
        timerId = setTimeout(typeNext, linePause);
      }
    };

    timerId = setTimeout(typeNext, startDelay);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  // 🔹 히어로 텍스트 인터랙션 끝난 후에만, 프로젝트 섹션 관찰 시작
  useEffect(() => {
    if (!metaVisible) return;           // 아직 히어로 텍스트 안 끝났으면 패스
    if (!projectsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsInView(true);      // 한 번 보이면 고정
          observer.disconnect();        // 다시 안 꺼지게
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, [metaVisible]);

  return (
    <div className="home">
      {/* 히어로 타이포그래피 */}
      <section className="home-hero">
        <div className="home-hero__frame">
          <span className="home-hero__bracket home-hero__bracket--left">[</span>

          <div className="home-hero__content">
            <div className="home-hero__lines">
              <span className="home-hero__line home-hero__line--left title">
                {visibleLines[0]}
              </span>
              <span className="home-hero__line home-hero__line--center home-hero__line--emphasis title">
                {visibleLines[1]}
              </span>
              <span className="home-hero__line home-hero__line--right title">
                {visibleLines[2]}
              </span>
            </div>

            <div
              className={
                "home-hero__meta" +
                (metaVisible ? " home-hero__meta--visible" : "")
              }
            >
              <p>Hyejin Jung</p>
              <p>Front-End</p>
              <p>2025 Web Portfolio</p>
            </div>
          </div>

          <span className="home-hero__bracket home-hero__bracket--right">]</span>
        </div>
      </section>

      {/* 🔹 히어로 텍스트 인터랙션이 끝나야, 그 다음에야 로드되는 프로젝트 섹션 */}
      {metaVisible && (
        <section
          ref={projectsRef}
          className={
            "home-projects" +
            (projectsInView ? " home-projects--visible" : "")
          }
        >
          <ProjectSection viewMode={viewMode} />
        </section>
      )}
    </div>
  );
}
