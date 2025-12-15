// src/pages/HomePage.jsx
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./HomePage.scss";
import ProjectSection from "../components/home/ProjectSection";

const HERO_LINES = ["Where Ideas", "Turn", "Into Experiences"];

// ✅ 새로고침 전까지(한 페이지 로드 동안)만 유지되는 메모리 플래그
let heroCompleted = false;           // 인터랙션 "끝까지" 봤는지
let heroDisabledUntilRefresh = false; // 프로젝트 갔다온 뒤엔 새로고침 전까지 끄기

const isReload = () => {
  const nav = performance.getEntriesByType("navigation")[0];
  return nav?.type === "reload";
};

export default function HomePage({ viewMode }) {
  const [visibleLines, setVisibleLines] = useState(["", "", ""]);
  const [metaVisible, setMetaVisible] = useState(false);

  const projectsRef = useRef(null);
  const [projectsInView, setProjectsInView] = useState(false);

  const location = useLocation();

  // ✅ 프로젝트에서 "돌아온 경우"만 인터랙션 OFF (단, 새로고침이면 무시)
  useEffect(() => {
    const fromProject = location.state?.fromProject === true;

    if (fromProject) {
      // history.state가 새로고침에도 남는 경우가 있어서, 일단 지워버림
      window.history.replaceState(null, "", window.location.href);

      // 새로고침이면: 인터랙션 다시 보여야 하니까 disable 안 건다
      if (!isReload()) {
        heroDisabledUntilRefresh = true;
        heroCompleted = true; // 돌아온 뒤엔 바로 완성 상태로
        setVisibleLines([...HERO_LINES, ""]);
        setMetaVisible(true);
      }
    }
  }, [location.state]);

  // ✅ 히어로 타이핑: (1) 처음 1회만, (2) 프로젝트 갔다오면 끄기, (3) 새로고침은 다시 가능
  useEffect(() => {
    // 이미 끝까지 봤거나(완성), 프로젝트 갔다와서 disable이면 즉시 완성 상태
    if (heroCompleted || heroDisabledUntilRefresh) {
      setVisibleLines([...HERO_LINES, ""]);
      setMetaVisible(true);
      return;
    }

    let lineIndex = 0;
    let charIndex = 0;
    const typingSpeed = 70;
    const linePause = 250;
    const startDelay = 200;

    let timerId;

    const typeNext = () => {
      if (lineIndex >= HERO_LINES.length) {
        setMetaVisible(true);
        heroCompleted = true; // ✅ "끝난 뒤"에만 완료 처리 (StrictMode 안전)
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

    return () => clearTimeout(timerId);
  }, []);

  // 프로젝트 섹션 관찰
  useEffect(() => {
    if (!metaVisible) return;
    if (!projectsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(projectsRef.current);
    return () => observer.disconnect();
  }, [metaVisible]);

  return (
    <div className="home">
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
