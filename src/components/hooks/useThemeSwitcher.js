import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)";
  const [mode, setMode] = useState("");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const userPref = window.localStorage.getItem("theme");

    const handleChange = () => {
      const newMode = userPref ? userPref : (mediaQuery.matches ? "dark" : "light");
      setMode(newMode);
      document.documentElement.classList.toggle("dark", newMode === "dark");
      updateThemeColorMeta(newMode);
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
      updateThemeColorMeta(mode);
    }
  }, [mode]);

  const updateThemeColorMeta = (theme) => {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMeta) {
      themeColorMeta = document.createElement('meta');
      themeColorMeta.name = "theme-color";
      document.head.appendChild(themeColorMeta);
    }
    themeColorMeta.setAttribute("content", theme === "dark" ? "#58E6D9" : "#B63E96");
  };

  return [mode, setMode];
};

export default useThemeSwitcher;
