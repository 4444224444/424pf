// src/data/project.js
import OKImg from "../assets/O.Kimg.svg";
import OKhero from "../assets/OKhero.svg";
import OK1 from "../assets/OK1.svg";
import OK2 from "../assets/OK2.svg";
import OK3 from "../assets/OK3.svg";

import BaroEatThum from "../assets/BaroEatThum.svg";
import Neuroverse from "../assets/Neuroverse.svg";
import MyWeather from "../assets/MyWeather.svg";
import BackToTheWeb from "../assets/BackToTheWeb.svg";

const projects = [
  {
    id: 1,
    indexLabel: "01",
    title: "O.K",
    date: "2025 09-11",
    stack: ["REACT", "SCSS"],
    liveUrl: "https://mnmnlilimnmnlil.github.io/OK/main",
    githubUrl: "https://github.com/mnmnlilimnmnlil/OK",

    thumbnail: OKImg,
    heroImage: OKhero,
    gallery: [OK1, OK2, OK3],

    overview: [
      "2025 09-11 Team Project",
      "2025년 계원예술대학교 팀 콩밥 졸업 작품",
    ],

    techSummary: ["React", "SCSS"],

    introduce: [
      "2025년 계원예술대학교 팀 ‘콩밥’ 졸업 작품으로, 인원 6명이 협업하여 진행한 프로젝트입니다. 팀원이 디자인을 담당하고, React와 SCSS를 기반으로 한 웹 구현을 담당했습니다. GitHub를 활용한 버전 관리와 코드 병합을 통해 협업 환경을 효율적으로 유지하며, 프로젝트를 통해 실무에 가까운 협업 개발 프로세스와 코드 관리 체계를 익혔습니다.",
    ],

    codeReview: [
      {
        title: "키워드 무한 루프 마키 구현",
        text: "키워드 이미지를 requestAnimationFrame과 DOM 조작으로 제어해, 복제 없이 자연스럽게 반복되는 마키 인터랙션을 구현했다.",
        code: `
const kwWrapRef = useRef(null);
const kwTrackRef = useRef(null);

useEffect(() => {
  const wrap = kwWrapRef.current;
  const track = kwTrackRef.current;
  if (!wrap || !track) return;

  let x = 0;
  let raf = 0;
  let last = 0;
  const speed = 80; // px/sec

  const getGap = () => {
    const first = track.firstElementChild;
    if (!first) return 0;
    const mr = parseFloat(getComputedStyle(first).marginRight || '0');
    return isNaN(mr) ? 0 : mr;
  };

  const loop = (t) => {
    if (!last) last = t;
    const dt = (t - last) / 1000;
    last = t;

    x -= speed * dt;
    track.style.transform = 'translateX(' + x + 'px)';

    const wrapLeft = wrap.getBoundingClientRect().left;
    const first = track.firstElementChild;
    if (first) {
      const firstRect = first.getBoundingClientRect();
      if (firstRect.right <= wrapLeft) {
        const w = first.offsetWidth + getGap();
        x += w; // 보정
        track.style.transform = 'translateX(' + x + 'px)';
        track.appendChild(first); // 맨 뒤로 이동
      }
    }

    raf = requestAnimationFrame(loop);
  };

  const onResize = () => {
    x = 0;
    last = 0;
    track.style.transform = 'translateX(0px)';
  };

  raf = requestAnimationFrame(loop);
  window.addEventListener('resize', onResize);
  return () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', onResize);
  };
}, []);
        `,
      },
    ],
  },

  {
    id: 2,
    indexLabel: "02",
    title: "BARO-EAT",
    date: "2025 03-06",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    liveUrl: "https://4444224444.github.io/BaroEat/",
    githubUrl: "https://github.com/4444224444/BaroEat",

    thumbnail: BaroEatThum,
    heroImage: "/images/baro-hero.png",
    gallery: ["/images/baro-1.png", "/images/baro-2.png", "/images/baro-3.png"],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함.",
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현",
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다.",
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다.",
      },
    ],
  },

  {
    id: 3,
    indexLabel: "03",
    title: "NEUROVERSE",
    date: "2025 09-12",
    stack: ["HTML", "CSS", "THREE.JS", "JAVASCRIPT"],
    liveUrl: "https://4444224444.github.io/javalast/",
    githubUrl: "https://github.com/4444224444/javalast",

    thumbnail: Neuroverse,
    heroImage: "/images/baro-hero.png",
    gallery: ["/images/baro-1.png", "/images/baro-2.png", "/images/baro-3.png"],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함.",
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현",
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다.",
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다.",
      },
    ],
  },

  {
    id: 4,
    indexLabel: "04",
    title: "My-Weather",
    date: "2025 04-06",
    stack: ["REACT", "CSS", "OPEN API"],
    liveUrl: "https://weatherweb424.netlify.app/",
    githubUrl: "https://github.com/4444224444/weather-react-app",

    thumbnail: MyWeather,
    heroImage: "/images/baro-hero.png",
    gallery: ["/images/baro-1.png", "/images/baro-2.png", "/images/baro-3.png"],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함.",
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현",
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다.",
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다.",
      },
    ],
  },

  {
    id: 5,
    indexLabel: "05",
    title: "Back to the Web",
    date: "2025 03-04",
    stack: ["REACT", "CSS", "JAVASCRIPT", "THREE.JS"],
    liveUrl: "https://4444224444.github.io/backtotheweb/",
    githubUrl: "https://github.com/4444224444/backtotheweb",

    thumbnail: BackToTheWeb,
    heroImage: "/images/baro-hero.png",
    gallery: ["/images/baro-1.png", "/images/baro-2.png", "/images/baro-3.png"],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함.",
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현",
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다.",
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다.",
      },
    ],
  },
];

export default projects;

