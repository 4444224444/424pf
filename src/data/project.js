// src/data/project.js
import OKImg from "../assets/O.Kimg.svg";
import OKhero from "../assets/OKhero.svg";

import BaroEatThum from "../assets/BaroEatThum.svg";
import Neuroverse from "../assets/Neuroverse.svg";
import MyWeather from "../assets/MyWeather.svg";
import BackToTheWeb from "../assets/BackToTheWeb.svg";


const projects = [
  {
    id: 1,
    indexLabel: "01", // 왼쪽 고정 영역에 쓸 번호
    title: "O.K",
    date: "2025 09-11",
    stack: ["REACT", "SCSS"],
    liveUrl: "https://mnmnlilimnmnlil.github.io/OK/main",
    githubUrl: "https://github.com/mnmnlilimnmnlil/OK",

    thumbnail: OKImg,
    heroImage: OKhero,
    gallery: [
      "/images/baro-1.png",
      "/images/baro-2.png",
      "/images/baro-3.png",
    ],

    overview: [
      "2025 03-06 Team Project",
      "시니어를 위한 키오스크 어플 바로잇 웹 구현"
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현"
    ],

    introduce: [
      "디자인 시안을 바탕으로 반응형 구조와 접근성을 고려한 화면을 직접 코딩하며, HTML, CSS, JavaScript의 구조적 역할을 체계적으로 이해하게 되었습니다. 첫 협업 프로젝트였던 만큼, 디자이너·기획자와의 커뮤니케이션을 통해 퍼블리셔로서의 조율 능력과 프로젝트 전반의 흐름을 함께 배울 수 있던 경험이었습니다."
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "01 djW어쩌고저쩌고",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다."
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다."
      }
    ]
  },

    {
    id: 2,
    indexLabel: "02", // 왼쪽 고정 영역에 쓸 번호
    title: "BARO-EAT",
    date: "2025 03-06",
    stack: ["HTML", "CSS", "JAVASCRIPT"],
    liveUrl: "https://4444224444.github.io/BaroEat/",
    githubUrl: "https://github.com/4444224444/BaroEat",

    thumbnail: BaroEatThum,
    heroImage: "/images/baro-hero.png",
    gallery: [
      "/images/baro-1.png",
      "/images/baro-2.png",
      "/images/baro-3.png",
    ],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함."
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현"
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다."
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다."
      }
    ]
  },

    {
    id: 3,
    indexLabel: "03", // 왼쪽 고정 영역에 쓸 번호
    title: "NEUROVERSE",
    date: "2025 09-12",
    stack: ["HTML", "CSS", "THREE.JS", "JAVASCRIPT"],
    liveUrl: "https://4444224444.github.io/javalast/",
    githubUrl: "https://github.com/4444224444/javalast",

    thumbnail: Neuroverse,
    heroImage: "/images/baro-hero.png",
    gallery: [
      "/images/baro-1.png",
      "/images/baro-2.png",
      "/images/baro-3.png",
    ],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함."
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현"
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다."
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다."
      }
    ]
  },

    {
    id: 4,
    indexLabel: "04", // 왼쪽 고정 영역에 쓸 번호
    title: "My-Weather",
    date: "2025 04-06",
    stack: ["REACT", "CSS", "OPEN API"],
    liveUrl: "https://weatherweb424.netlify.app/",
    githubUrl: "https://github.com/4444224444/weather-react-app",

    thumbnail: MyWeather,
    heroImage: "/images/baro-hero.png",
    gallery: [
      "/images/baro-1.png",
      "/images/baro-2.png",
      "/images/baro-3.png",
    ],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함."
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현"
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다."
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다."
      }
    ]
  },

      {
    id: 5,
    indexLabel: "05", // 왼쪽 고정 영역에 쓸 번호
    title: "Back to the Web",
    date: "2025 03-04",
    stack: ["REACT", "CSS", "JAVASCRIPT", "THREE.JS"],
    liveUrl: "https://4444224444.github.io/backtotheweb/",
    githubUrl: "https://github.com/4444224444/backtotheweb",

    thumbnail: BackToTheWeb,
    heroImage: "/images/baro-hero.png",
    gallery: [
      "/images/baro-1.png",
      "/images/baro-2.png",
      "/images/baro-3.png",
    ],

    overview: [
      "모바일 환경에서 빠르게 주문할 수 있는 푸드 오더링 웹 서비스.",
      "메인 화면에서 카테고리, 추천 메뉴, 최근 주문을 한 번에 확인하도록 정보 구조를 설계함."
    ],

    techSummary: [
      "React 기반 SPA",
      "SCSS 모듈로 컴포넌트 단위 스타일링",
      "반응형 레이아웃 구현"
    ],

    introduce: [
      "사용자가 '주문 과정이 길지 않을 것'이라는 확신을 가질 수 있도록 화면 전환을 최소화했다.",
      "CTA 버튼의 위치, 색 대비를 조정해 첫 진입 화면에서 바로 주문 플로우가 보이도록 구성했다.",
    ],

    codeReview: [
      {
        image: "/images/baro-code-1.png",
        title: "상태 관리 구조 리팩토링",
        text: "초기에는 페이지별로 중복 상태가 많았으나, 공통 훅과 컨텍스트를 도입해 주문 플로우 상태를 한 곳에서 관리하도록 리팩토링했다."
      },
      {
        image: "/images/baro-code-2.png",
        title: "컴포넌트 분리 기준",
        text: "UI 조각 단위가 아닌, 실제 사용자 액션 단위로 컴포넌트를 분리해 재사용성과 가독성을 함께 챙겼다."
      }
    ]
  },
];

export default projects;

