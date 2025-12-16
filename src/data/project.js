// src/data/project.js
import OKImg from "../assets/O.Kimg.svg";
import OKhero from "../assets/OKhero.svg";
import OK1 from "../assets/OK1.svg";
import OK2 from "../assets/OK2.svg";
import OK3 from "../assets/OK3.svg";
import okMarqueeCode from "../code/ok-marquee.txt?raw";
import okColorPicker from "../code/ok-color.txt?raw";
import okInmate from "../code/ok-inmate.txt?raw";

import BaroEatThum from "../assets/BaroEatThum.svg";
import BaroEatHero from "../assets/BaroEatHero.svg";
import BaroEat1 from "../assets/BaroEat1.svg";
import BaroEat2 from "../assets/BaroEat2.svg";
import BEfallbox from "../code/be-fallbox.txt?raw";
import BEtxt from "../code/be-txt.txt?raw";
import BEclicktxt from "../code/be-clicktxt.txt?raw";

import Neuroverse from "../assets/Neuroverse.svg";
import NeuroHero from "../assets/NeuroHero.svg";
import Neuro1 from "../assets/Neuro1.svg";
import Neuro2 from "../assets/NEURO2.svg";
import Neuro3 from "../assets/NEURO3.svg";
import Neuro4 from "../assets/NEURO4.svg";
import Neuro5 from "../assets/NEURO5.svg";
import Neuro6 from "../assets/NEURO6.svg";

import NeuMemory from "../code/Neu-Memory.txt?raw";
import NeuWASD from "../code/Neu-WASD.txt?raw";
import NeuScript from "../code/Neu-script.txt?raw";

import MyWeather from "../assets/MyWeather.svg";
import WeatherHero from "../assets/WeatherHero.svg";
import Weather1 from "../assets/Weather1.svg";
import Weather2 from "../assets/Weather2.svg";
import WeatherHook from "../code/WeatherHook.txt?raw";

import NP from "../assets/NP.svg";
import NPhero from "../assets/NPhero.svg";
import NP1 from "../assets/NP1.svg";
import NP2 from "../assets/NP2.svg";
import npspotify from "../code/npspoti.txt?raw";
import np2 from "../code/np2.txt?raw";
import np3 from "../code/np3.txt?raw";
import np4 from "../code/np4.txt?raw";


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
        title: "01 키워드 무한 루프 마키 구현",
        summary: "무한 슬라이드를 위해 애니메이션 반복, 요소 이동 판별, 간격 계산, 반응형 처리 등을 통합적으로 구현하였습니다.",
        list: [
    "- requestAnimationFrame을 사용하여 일정 속도의 애니메이션 구현",
    "- getComputedStyle을 이용해 margin을 포함한 요소 간격 계산.",
    "- getBoundingClientRect로 요소의 화면 이탈 여부를 판별",
    "- resize 이벤트를 적용하여 위치값을 초기화",
    "- 언마운트 시 cancelAnimationFrame과 removeEventListener로 자원 정리",
  ],
        code: okMarqueeCode,
      },

      {
        title: "02 컬러피커 인터랙션 (오프스크린 캔버스 + 마우스 위치 추적 + 포털 툴팁)",
        summary: "이미지를 캔버스에 그려 픽셀 색상을 실시간으로 추출하고, 마우스 위치를 따라다니는 툴팁을 포털로 렌더링하여 선택한 색상의 HEX 값을 보여주는 컬러 피커 기능을 구현하였습니다.",
        list: [

    "- useRef와 오프스크린 <canvas>를 사용하여 이미지 픽셀 정보 구현",
    "- onMouseMove와 getBoundingClientRect로 마우스 위치를 계산하고, 캔버스 해상도에 맞게 좌표를 스케일링",
    "- getImageData로 해당 좌표 픽셀의 RGB 값을 읽고, rgbToHex 함수로 HEX 컬러 코드로 변환",
    "- hover 상태와 커서 좌표를 상태로 관리하여, 마우스를 따라다니는 색상 미리보기 툴팁을 구현",
    "- createPortal과 document 존재 여부 판별을 통해 툴팁을 document.body에 포탈 렌더링하고, SSR 환경에서도 안전하게 동작하도록 처리",
  ],
        code: okColorPicker,
      },

      {
        title: "03 점 네비 기반 영상 슬라이더 인터랙션",
        summary: "고정된 배경 위에 마스크 영역을 두고, 점 네비게이션과 트랙 이동을 통해 여러 개의 영상을 가로 슬라이드 형식으로 전환하는 UI를 구현하였습니다.",
        list: [

    "- 점 네비 클릭 시 인덱스를 갱신하고 translateX로 해당 슬라이드를 표시",
    "- 터치 드래그 이동량을 계산해 임계값을 넘으면 이전·다음 슬라이드로 전환",
    "- 활성 슬라이드의 영상만 재생하고 나머지는 정지·초기화",
    "- 고정 배경 + 마스크 구조로 트랙 이동과 점 네비가 안정적으로 동작하도록 구성",
  ],
        code: okInmate,
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
    heroImage: BaroEatHero,
    gallery: [BaroEat1, BaroEat2 ],

    overview: [
      "2025 03-06 Team Project",
      "시니어를 위한 키오스크 어플 바로잇 웹 구현",
    ],

    techSummary: [
      "HTML",
      "CSS",
      "JAVASCRIPT",
    ],

    introduce: [
      "디자인 시안을 바탕으로 반응형 구조와 접근성을 고려한 화면을 직접 코딩하며, HTML, CSS, JavaScript의 구조적 역할을 체계적으로 이해하게 되었습니다. 첫 협업 프로젝트였던 만큼, 디자이너·기획자와의 커뮤니케이션을 통해 퍼블리셔로서의 조율 능력과 프로젝트 전반의 흐름을 함께 배울 수 있던 경험이었습니다.",
    ],

    codeReview: [
      {
        title: "01 클릭 트리거 타이핑",
        summary: "레이블 클릭 시 흐린 배경 텍스트 위로 선명한 텍스트가 한 글자씩 타이핑되며 나타나는 인터랙션입니다.",
        list: [
    "- 라벨 클릭 이벤트로 타이핑 애니메이션 단발성 실행",
    "- ghost-text(희미한 텍스트) + typewriter-text(실제 출력) 이중 레이어 구조",
    "- 문자 단위 setInterval 기반 타이핑 로직",
    "- 한 번 실행 후 재클릭 방지 플래그(typed) 적용",
    "- 인라인 포지션 스타일로 두 텍스트를 정확히 겹쳐 자연스럽게 연출",
  ],
        code: BEclicktxt,
      },

      {
        title: "02 박스 스크롤 애니메이션",
        summary: "CSS 변수 기반 위치 값을 읽어 요소를 정렬한 뒤, 화면 진입 시 아래 박스부터 순차적으로 등장시키는 스크롤 인터랙션입니다.",
        list: [
    "- CSS 커스텀 변수(--y)를 읽어 박스의 시작 위치(--startY)를 동적으로 설정",
    "- ntersectionObserver로 .fall-group 진입 시점을 감지",
    "- 요소의 --y 값을 기준으로 아래 → 위 순서로 등장하도록 정렬",
    "- setTimeout을 이용해 일정 간격으로 순차 등장 애니메이션 실행",
    "- 화면에서 벗어날 때 active 클래스를 제거해 재스크롤 시 반복 재생 가능",
  ],
        code: BEfallbox,
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
    heroImage: NeuroHero,
    gallery: [Neuro1, Neuro2, Neuro3, Neuro4, Neuro5, Neuro6],

    overview: [
      "2025 09-12 Personal Project",
      "이 사람은 무엇을 생각하며 사는가? 타인(나)의 뇌내 우주를 유영하며 소개하는 웹사이트",
    ],

    techSummary: [
      "HTML",
      "CSS",
      "Three.js",
      "JAVASCRIPT",
    ],

    introduce: [
      "Neuroverse는 나의 사고 구조를 시각화한 3D 인터랙티브 자기소개 웹사이트입니다. 인간의 뇌 뉴런 네트워크와 우주의 구조적 유사성에서 출발해, 생각의 연결과 창의적 확장을 Three.js 기반의 그래픽으로 표현했습니다. HTML, CSS, JavaScript, Three.js로 구현하며, 사용자 움직임이나 마우스 인터랙션에 반응하는 3D 공간 속에서 나를 탐색하는 새로운 웹 경험을 제공합니다.",
    ],

    codeReview: [
      {
        title: "01 뇌 메모리 노드 Raycasting과 대시보드 전환 인터랙션",
        summary: "Three.js Raycaster를 활용해 뇌 안의 기억 노드를 호버·클릭하면 이미지 프리뷰와 대시보드가 단계적으로 전환되는 인터랙션을 구현하였습니다.",
        list: [
    "- THREE.Raycaster와 THREE.Vector2를 사용해 마우스 위치 기반 Raycasting을 구현",
    "- clickableNodes 배열에 등록된 노드만 교차 검사하여 성능을 관리",
    "- 호버 시 updateNodePreview로 노드 위치를 스크린 좌표로 투영해 이미지 프리뷰 띄우기",
    "- 클릭 시 선택된 노드를 openDashboardWithAnimation에 전달해 GSAP 타임라인 기반 UI 전환",
  ],
        code: NeuMemory,
      },

      {
        title: "02 WASD 기반 뇌 내부 3D 탐색과 카메라 타깃 동기화",
        summary: "WASD 입력을 이용해 뇌 내부를 1인칭에 가까운 관점으로 이동하면서, OrbitControls의 타깃을 함께 이동시켜 자연스러운 카메라 탐색 경험을 구현하였습니다.",
        list: [
    "- keydown/keyup 이벤트와 keyState 맵으로 WASD 입력 상태를 관리",
    "- camera.getWorldDirection으로 전방 벡터를 계산하고, crossVectors로 우측 벡터를 도출",
    "- 이동 벡터를 정규화 후 moveSpeed를 곱해 프레임 독립적인 이동 속도를 유지",
    "- THREE.MathUtils.clamp를 사용해 뇌 내부 박스(BOUNDS) 밖으로 카메라가 벗어나지 않도록 제한",
    "- 카메라 위치 변경에 맞춰 controls.target도 동일한 Delta를 더해 시점과 회전 중심이 어긋나지 않도록 동기화",
  ],
        code: NeuWASD,
      },

      {
        title: "03 DEV Console 기반 가짜 스크립트 파서와 실시간 파라미터 조정",
        summary: "텍스트 영역에 입력한 scene.bg(), player.speed() 같은 단순 스크립트 문법을 직접 파싱하여, Three.js 장면과 인터랙션 파라미터를 실시간으로 제어하는 내부용 Param Lab을 구현하였습니다.",
        list: [
    "- dev-input textarea의 내용을 줄 단위로 읽고, 공백·주석(//) 라인은 무시하도록 전처리",
    "- 인자 문자열을 split(",") 후 숫자/문자열 여부를 판별해 적절한 타입으로 캐스팅",
    "- 잘못된 토큰이나 정의되지 않은 명령은 조용히 무시해, 실험적 입력에도 런타임 에러 없이 동작",
    "- scene.bg, brain.moveTo, player.speed, stars.spin, bounds.cage 등 사전에 정의된 “가짜 API”를 통해 배경색, 뇌 위치, 이동 속도, 별 회전 속도, 이동 가능 범위를 실시간으로 변경",
  ],
        code: NeuScript,
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
    heroImage: WeatherHero,
    gallery: [ Weather1, Weather2 ],

    overview: [
      "2025 04-06 Personal Project",
      "날씨별 맞춤 큐레이션 웹 ",
    ],

    techSummary: [
      "React",
      "css",
      "Open Weather API",
    ],

    introduce: [
      "OpenWeather API를 활용하여 실시간 날씨에 맞춰 영화, 음악, 도서를 추천하는 큐레이션 웹입니다. 사용자가 접속한 지역의 날씨 데이터를 기반으로 배경 화면이 변화하도록 구현해, 시각적으로 날씨의 분위기를 느낄 수 있는 감각적인 웹 경험을 제공합니다. 또한 로컬 스토리지를 활용한 로그인 접근 제한 기능을 통해 로그인한 사용자만 콘텐츠를 이용할 수 있도록 설정하며, 프론트엔드에서의 데이터 연동과 접근 제어 흐름을 깊이 이해할 수 있었습니다. API 데이터 처리와 사용자 인증, UI 반응을 함께 다루며 웹이 가진 실시간성과 몰입형 인터랙션의 가능성을 경험한 프로젝트입니다.",
    ],

    codeReview: [
      {
        title: "01 사용자 위치 기반 OpenWeatherMap 커스텀 훅",
        summary: "사용자의 현재 GPS 좌표를 가져와 OpenWeatherMap API를 호출하고, 응답 값에서 날씨 상태·기온·풍속·강수량만 추려 UI에서 바로 사용할 수 있도록 정제해 주는 커스텀 React Hook이다. 복잡한 날씨 데이터를 clear / clouds / rain / snow 네 가지 카테고리로 단순화해 날씨 UI를 쉽게 렌더링할 수 있도록 설계했다.",
        list: [
    "- navigator.geolocation을 사용해 위도/경도를 가져와 해당 지역의 날씨만 조회",
    "- OpenWeatherMap의 상세 코드를 clear / clouds / rain / snow로 매핑해 UI에서 쉽게 사용하도록 정리",
    "- 온도(°C), 풍속, 강수량, 날씨 타입을 각각 state로 관리해 상위 컴포넌트에서 즉시 활용 가능",
    "- API 요청 전후에 loading을 관리하여 스켈레톤/로딩 UI 렌더링이 용이하도록 구성",
  ],
        code: WeatherHook,
      },


    ],
  },


  {
    id: 5,
    indexLabel: "05",
    title: "NOW-PLAYING",
    date: "2025 09-12",
    stack: ["EJS", "JS", "MONGODB", "SPOTIFY API"],
    liveUrl: "https://musicfeed.onrender.com/",
    githubUrl: "https://github.com/4444224444/musicfeed",

    thumbnail: NP,
    heroImage: NPhero,
    gallery: [NP1, NP2],
    video: { src: "/assets/NPvideo.mp4", poster: NP1 },

    overview: [
      "2025 09-12 Personal Project",
      "Spotify API 연동 음악 서비스 웹사이트",
    ],

    techSummary: [
      "EJS",
      "node.js",
      "MONGODB",
      "Spotify API",
    ],

    introduce: [
      "Spotify 개발자 대시보드 API를 활용하여 실시간으로 사용자의 현재 재생 중인 음악을 표시하고, 웹 내에서 친구의 음악 기록까지 조회할 수 있는 음악 공유형 웹사이트입니다. 서버는 미들웨어와 컨트롤러 구조로 분리 설계하였으며, Thunder Client를 통해 API 요청 및 응답 과정을 직접 검증하며 데이터 흐름을 이해했습니다. 또한 MongoDB를 이용한 사용자 데이터 관리를 구현하면서 프론트엔드와 백엔드 간의 연결 구조와 API 통신 과정을 체계적으로 익혔습니다. 이번 프로젝트를 통해 실제 서비스형 웹의 구조와 데이터 처리 방식을 경험하며, 백엔드 연동과 API 활용 능력을 한 단계 발전시킬 수 있었습니다.",
    ],

    codeReview: [
      {
        title: "01 OAuth 콜백에서 토큰 발급 + DB 저장",
        summary: "이 프로젝트의 서비스 계정과 Spotify 계정 연동”을 완료하는 구간",
        list: [
    "- loginWithSpotify에서 넘어온 code를 이용해 Spotify에 요청하고, access_token / refresh_token을 발급",
    "- 발급받은 토큰을 해당 유저(User) 문서에 저장",
    "- 저장 후 서비스 메인(/)으로 리다이렉트",
    "- 서비스 계정과 스포티파이 계정 연동 완료",
  ],
        code: npspotify,
      },

      {
        title: "02 getRecentTracks: 최근 재생 목록 가져오기",
        summary: "Spotify의 recently-played API를 호출해 최근 들은 곡 목록을 만들었습니다 웹페이지에서 최근 재생한 곡 20곡을 recent 페이지에서 확인할 수 있습니다",
        list: [
    "- 응답을 그대로 넘기지 않고, 프론트에 필요한 형태로 map 해서 id/name/artists/albumCover 같은 가벼운 데이터 구조로 정리해 내려주기"
  ],
        code: np2,
      },

      {
        title: "03 getCurrentlyPlaying: 현재 재생 중인 곡 가져오기",
        summary: "지금 재생 중인 트랙을 가져오는 구간",
        list: [
    "- 재생 중이 아니면 is_playing:false로 내려서 “현재 재생 없음” UI를 띄움",
    "- 재생 중이면 곡명/아티스트/앨범커버만 골라 내려주기"
  ],
        code: np3,
      },

      {
        title: "04 생성된 추천을 실제 Spotify 플레이리스트로 발행하기",
        summary: "서버에 저장해둔 추천 결과를 가져와서 진짜 Spotify 플레이리스트로 발행",
        list: [
    "- 내 Spotify 사용자 id 조회",
    "- Spotify 플레이리스트 생성",
    "- 트랙 uri들을 플레이리스트에 추가",
    "- 생성된 Spotify 플레이리스트 id/url을 DB에 저장",
  ],
        code: np4,
      },

    ],
  },

];

export default projects;

