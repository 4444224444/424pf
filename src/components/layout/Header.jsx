import "./Header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header({ viewMode, setViewMode, theme, toggleTheme }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";

  // ✅ 프로젝트 페이지에서 홈으로 돌아갈 때만 fromProject 상태 전달
  const handleBack = () => {
    const fromProject = pathname.startsWith("/projects/");
    navigate("/", { state: { fromProject } });
  };

  const handleViewChange = (mode) => {
    if (viewMode !== mode) setViewMode(mode);
  };

  const modeLabel = theme === "light" ? "L.M" : "D.M";

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        4O2TFOLIO
      </Link>

      <div className="header__right">
        <nav className="header__nav">
          <Link to="/about" className="header__nav-link">
            ABOUT
          </Link>
          <a
            href="https://github.com/4444224444"
            target="_blank"
            rel="noreferrer"
            className="header__nav-link"
          >
            GITHUB
          </a>
          <Link to="/contact" className="header__nav-link">
            CONTACT
          </Link>
        </nav>

        <div className="header__controls">
          <div className="header__primary">
            {isHome ? (
              <div
                className={
                  "header__view-toggle" +
                  (viewMode === "list" ? " header__view-toggle--list" : "")
                }
              >
                <button
                  className={
                    "header__btn header__view-option" +
                    (viewMode === "grid" ? " header__view-option--active" : "")
                  }
                  onClick={() => handleViewChange("grid")}
                >
                  GRID
                </button>
                <button
                  className={
                    "header__btn header__view-option" +
                    (viewMode === "list" ? " header__view-option--active" : "")
                  }
                  onClick={() => handleViewChange("list")}
                >
                  LIST
                </button>
              </div>
            ) : (
              <button
                className="header__btn header__btn--back"
                onClick={handleBack}
              >
                BACK
              </button>
            )}
          </div>

          <button className="header__btn" onClick={toggleTheme}>
            {modeLabel}
          </button>
        </div>
      </div>
    </header>
  );
}
