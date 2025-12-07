import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "../components/layout/Header";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";

export default function AppRouter() {
  const [viewMode, setViewMode] = useState("grid");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <HashRouter>
      <Header
        viewMode={viewMode}
        setViewMode={setViewMode}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="page">
        <Routes>
          <Route path="/" element={<HomePage viewMode={viewMode} />} />
          <Route path="/projects/:id" element={<ProjectDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

