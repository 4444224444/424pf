// src/pages/AboutPage.jsx
import { useState, useEffect } from "react";
import "./AboutPage.scss";

//이미지
import HTML from "../assets/HTML.jpg";
import SCSS from "../assets/SCSS.jpg";
import JAVASCRIPT from "../assets/JAVASCRIPT.jpg";
import REACT from "../assets/REACT.jpg";
import THREEJS from "../assets/THREEJS.png";
import EJS from "../assets/EJS.jpg";

import NODEJS from "../assets/NODEJS.jpg";
import MONGODB from "../assets/MONGODB.jpg";

import GITHUB from "../assets/GITHUB.jpg";

import FIGMA from "../assets/FIGMA.jpg";
import PS from "../assets/PS.jpg";

const PROFILE = {
  name: "정혜진",
  age: "2003.04.24",
  role: "Front-end",
  intro: `안녕하세요, 창의적인 프론트엔드 개발자 정혜진입니다. 새로운 방식으로 화면을 풀어내고, 기존에 없던 흐름을 만들어보는 일을 좋아합니다. 작은 디테일 하나라도 더 나은 방향이 있다면 과감히 바꿔보고, 새로운 시도를 통해 더 자연스러운 사용자 경험을 찾고 싶습니다. 정해진 틀에 머무르기보다, 아이디어를 실험하고 확장해 서비스에 새로운 감각을 더하는 것을 강점으로 삼고 있는 저는, 앞으로도 계속 도전하며 한 단계 더 완성도 높은 웹을 만드는 개발자가 되고자 합니다.`,
};

const CONTACT = [
  { label: "TEL.", value: "010-0000-0000" },
  { label: "E-mail", value: "jh0424@naver.com" },
  { label: "INS", value: "@4444.242.4444" },
];

const EDUCATION = [
  { year: "2026", month: "02", text: "게임&소프트웨어과 졸업" },
  { year: "2023", month: "03", text: "OO대학교 편입" },
  { year: "2022", month: "02", text: "OO디자인고등학교 졸업" },
  { year: "2019", month: "03", text: "OO디자인고등학교 입학" },
];

const AWARDS = [
  { year: "2025", month: "11", text: "졸업 작품 최우수상" },
  { year: "2025", month: "06", text: "2-1 웹 프로그래밍 연합 PT" },
];

const WORKS = [
  { year: "2025", month: "Ing", text: "쇼핑몰 MELTA" },
  { year: "2023", month: "09", text: "CU광진구청점" },
  { year: "2022", month: "02", text: "하루돈까스 건대점" },
];

const SKILL_TABS = ["ALL", "FRONT", "BACK", "DEPLOYMENT", "DESIGN"];

const SKILLS = [
  // 프론트
  {
    name: "HTML",
    category: "FRONT",
    image: HTML,
    desc: "시멘틱 구조로 마크업하고, 접근성을 고려해 레이아웃을 설계할 수 있다.",
  },
  {
    name: "CSS/SCSS",
    category: "FRONT",
    image: SCSS,
    desc: "SCSS 변수·믹스인·중첩을 활용해 컴포넌트 단위 스타일을 정리할 수 있다.",
  },
  {
    name: "JAVASCRIPT",
    category: "FRONT",
    image: JAVASCRIPT,
    desc: "DOM 조작, 이벤트 처리, fetch 비동기 통신까지 웹 인터랙션을 구현할 수 있다.",
  },
  {
    name: "REACT",
    category: "FRONT",
    image: REACT,
    desc: "컴포넌트 구조 설계, 상태 관리, 라우팅으로 SPA를 구성할 수 있다.",
  },
  {
    name: "THREE.JS",
    category: "FRONT",
    image: THREEJS,
    desc: "기본 씬·카메라·메시 구성을 통해 3D 요소를 웹에 연출할 수 있다.",
  },
  {
    name: "EJS",
    category: "FRONT",
    image: EJS,
    desc: "서버 사이드 렌더링으로 동적 페이지를 구성한 경험이 있다.",
  },

  // 백엔드
  {
    name: "NODE.JS",
    category: "BACK",
    image: NODEJS,
    desc: "간단한 API 서버와 라우팅을 구성하고, 기본적인 서버 로직을 작성할 수 있다.",
  },
  {
    name: "MONGODB",
    category: "BACK",
    image: MONGODB,
    desc: "Mongoose로 스키마와 모델을 정의하고 CRUD를 구현해본 경험이 있다.",
  },

  // 배포
  {
    name: "GIT HUB",
    category: "DEPLOYMENT",
    image: GITHUB,
    desc: "버전 관리와 협업을 위한 브랜치 전략, 기본적인 Git 플로우를 사용한다.",
  },

  // 디자인
  {
    name: "FIGMA",
    category: "DESIGN",
    image: FIGMA,
    desc: "와이어프레임, UI 컴포넌트, 프로토타입까지 한 흐름으로 정리할 수 있다.",
  },
  {
    name: "PHOTOSHOP",
    category: "DESIGN",
    image: PS,
    desc: "보정·합성·썸네일 디자인 등 그래픽 작업을 웹에 맞게 조정할 수 있다.",
  },
];

export default function AboutPage() {
  const [heroPlay, setHeroPlay] = useState(false);
  const [activeTab, setActiveTab] = useState("ALL");

  // HERO 텍스트 애니메이션
  useEffect(() => {
    const timer = setTimeout(() => setHeroPlay(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // 섹션 스크롤 인터랙션 (hero 제외 .about-page__section만)
  useEffect(() => {
    const sections = document.querySelectorAll(".about-page__section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("about-page__section--visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const filteredSkills =
    activeTab === "ALL"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeTab);

  return (
    <main className="about-page">
      {/* HERO */}
      <section
        className={"about-hero" + (heroPlay ? " about-hero--play" : "")}
      >
        <div className="about-hero__row about-hero__row--first title">
          <span className="about-hero__iam">I am</span>
          <span className="about-hero__creating">CREATING</span>
        </div>

        <div className="about-hero__row about-hero__row--big title">
          <span className="about-hero__big-1">INTUITIVE DIGITAL</span>
        </div>

        <div className="about-hero__row about-hero__row--big title">
          <span className="about-hero__big-2">EXPERIENCES FOR THE</span>
        </div>

        <div className="about-hero__row about-hero__row--last title">
          <span className="about-hero__web">WEB</span>

          <span className="about-hero__roles title">
            <span>FRONT END</span>
            <span>BACK END</span>
            <span>DEVELOPER</span>
          </span>
        </div>
      </section>

      {/* INFO */}
      <section className="about-page__section">
        <h2 className="about-page__section-title">INFO</h2>

        <div className="about-page__info-row">
          <div className="about-page__photo-placeholder" />

          <div className="about-page__info-text">
            <dl className="about-page__basic-table">
              <div className="about-page__basic-row">
                <dt>Name</dt>
                <dd>{PROFILE.name}</dd>
              </div>
              <div className="about-page__basic-row">
                <dt>Age</dt>
                <dd>{PROFILE.age}</dd>
              </div>
              <div className="about-page__basic-row">
                <dt>Role</dt>
                <dd>{PROFILE.role}</dd>
              </div>
            </dl>

            <p className="about-page__intro">{PROFILE.intro}</p>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH + EDUCATION */}
      <section className="about-page__section about-page__section--split">
        <div className="about-page__col">
          <h3 className="about-page__sub-title">GET IN TOUCH</h3>
          <dl className="about-page__list">
            {CONTACT.map((item) => (
              <div key={item.label} className="about-page__list-row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="about-page__col">
          <h3 className="about-page__sub-title">EDUCATION</h3>
          <ul className="about-page__timeline">
            {EDUCATION.map((edu, idx) => (
              <li key={idx} className="about-page__timeline-row">
                <span className="about-page__timeline-year">{edu.year}</span>
                <span className="about-page__timeline-month">{edu.month}</span>
                <span className="about-page__timeline-text">{edu.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AWARDS + WORKS */}
      <section className="about-page__section about-page__section--split">
        <div className="about-page__col">
          <h3 className="about-page__sub-title">AWARDS</h3>
          <ul className="about-page__timeline">
            {AWARDS.map((award, idx) => (
              <li key={idx} className="about-page__timeline-row">
                <span className="about-page__timeline-year">{award.year}</span>
                <span className="about-page__timeline-month">
                  {award.month}
                </span>
                <span className="about-page__timeline-text">
                  {award.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-page__col">
          <h3 className="about-page__sub-title">WORKS</h3>
          <ul className="about-page__timeline">
            {WORKS.map((work, idx) => (
              <li key={idx} className="about-page__timeline-row">
                <span className="about-page__timeline-year">{work.year}</span>
                <span className="about-page__timeline-month">
                  {work.month}
                </span>
                <span className="about-page__timeline-text">
                  {work.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SKILLS */}
      <section className="about-page__section">
        <h2 className="about-page__section-title">SKILLS</h2>

        <div className="about-page__skill-tabs">
          {SKILL_TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              className={
                "about-page__skill-tab" +
                (activeTab === tab ? " about-page__skill-tab--active" : "")
              }
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="about-page__skill-grid">
          {filteredSkills.map((skill) => (
            <div key={skill.name} className="about-page__skill-card">
              {/* 이미지 배경 */}
              <div
                className="about-page__skill-bg"
                style={{ backgroundImage: `url(${skill.image})` }}
              />

              {/* 호버할 때 보일 내용 */}
              <div className="about-page__skill-content">
                <div>{skill.name}</div>
                <div className="about-page__skill-category">
                  {skill.category}
                </div>
                <div className="about-page__skill-desc">{skill.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
