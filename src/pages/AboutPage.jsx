// src/pages/AboutPage.jsx
import { useState, useEffect } from "react";
import "./AboutPage.scss";



//이미지
import Info from "../assets/Info.svg";

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
  { label: "TEL.", value: "010-9413-5028" },
  { label: "E-mail", value: "jhj030424@kaywon.ac.kr" },
  { label: "INS", value: "@4444.22.4444" },
];

const EDUCATION = [
  { year: "2026", month: "02", text: "계원예술대학교 졸업" },
  { year: "2023", month: "03", text: "계원예술대학교 입학" },
  { year: "2022", month: "02", text: "대원여자고등학교 졸업" },
  { year: "2019", month: "03", text: "대원여자고등학교 입학" },
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
    desc: "기본 구조부터 시맨틱 태그 활용, 레이아웃 구성까지 무리 없이 구현할 수 있으며, 프로젝트 전반을 안정적으로 구축하는 데 자연스럽게 활용할 수 있습니다.",
  },
  {
    name: "CSS/SCSS",
    category: "FRONT",
    image: SCSS,
    desc: "변수, 믹스인, 중첩 규칙 등을 활용해 스타일 구조를 체계적으로 구성할 수 있으며, 반응형 레이아웃과 애니메이션 같은 시각적 표현도 안정적으로 구현이 가능합니다.",
  },
  {
    name: "JAVASCRIPT",
    category: "FRONT",
    image: JAVASCRIPT,
    desc: "DOM 조작, 이벤트 제어, 비동기 처리, 컴포넌트 기반 UI 로직 구현 등 웹 인터랙션 전반을 능숙하게 다룰 수 있으며, 프로젝트 규모에 맞춘 구조 설계와 기능 개발을 수행할 수 있습니다.",
  },
  {
    name: "REACT",
    category: "FRONT",
    image: REACT,
    desc: "상태 관리와 props 기반 구조를 활용해 재사용 가능한 컴포넌트를 설계할 수 있으며, 프로젝트 규모에 맞춘 폴더 구조 정리와 페이지 라우팅, 데이터 흐름 제어 등 전체 UI 로직을 안정적으로 구축이 가능합니다.",
  },
  {
    name: "THREE.JS",
    category: "FRONT",
    image: THREEJS,
    desc: "카메라 제어와 메쉬 변환을 직접 다루며, 3D 오브젝트에 다양한 상호작용을 부여할 수 있습니다. 또한 장면 위에 오버레이 요소를 자연스럽게 얹어 UI와 3D 공간을 함께 구성하는 작업도 원활하게 수행합니다.",
  },
  {
    name: "EJS",
    category: "FRONT",
    image: EJS,
    desc: "템플릿 안에서 데이터 바인딩, 조건 분기, 반복 렌더링 등을 활용해 동적 페이지를 구성할 수 있으며, 레이아웃과 partial 구조를 나눠 실제 서비스 화면을 효율적으로 구축할 수 있습니다.",
  },

  // 백엔드
  {
    name: "NODE.JS",
    category: "BACK",
    image: NODEJS,
    desc: "RESTful API 구축, 라우팅 처리, 미들웨어 구성, 데이터 연동 등을 통해 서버 로직을 구현할 수 있으며, 프로젝트 요구에 맞춰 백엔드 흐름을 설계하고 확장할 수 있습니다.",
  },
  {
    name: "MONGODB",
    category: "BACK",
    image: MONGODB,
    desc: "컬렉션 구조와 스키마를 설계하고, 프로젝트에 맞는 데이터 모델을 정의한 뒤, CRUD 작업과 기본적인 쿼리·인덱싱을 통해 데이터를 관리할 수 있습니다.",
  },

  // 배포
  {
    name: "GIT HUB",
    category: "DEPLOYMENT",
    image: GITHUB,
    desc: "저장소 관리, 브랜치 운영, 버전 기록, 협업용 PR 흐름 등을 활용해 코드 변경 사항을 명확하게 관리하고 프로젝트를 안정적으로 유지할 수 있습니다.",
  },

  // 디자인
  {
    name: "FIGMA",
    category: "DESIGN",
    image: FIGMA,
    desc: "레이아웃 구성, 컴포넌트 설계, 프로토타이핑, 스타일 가이드 제작 등을 통해 UI를 구조적으로 설계하고 실제 개발에 바로 반영 가능한 디자인 시스템을 만들 수 있습니다.",
  },
  {
    name: "PHOTOSHOP",
    category: "DESIGN",
    image: PS,
    desc: "사진 보정, 합성, 레이어 기반 편집, 색 보정, 마스크 작업 등을 활용해 디지털 이미지를 원하는 스타일로 정교하게 가공하고, 웹·브랜딩 작업에 적합한 시각 자료를 제작할 수 있습니다.",
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
          <div className="about-page__photo-placeholder">
  <img
    src={Info}
    alt={`${PROFILE.name} profile`}
    className="about-page__photo"
  />
</div>

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
