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
      document.documentElement.setAttribute("data-theme", newMode); // ✅ Add this line
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (mode) {
      window.localStorage.setItem("theme", mode);
      document.documentElement.classList.toggle("dark", mode === "dark");
      document.documentElement.setAttribute("data-theme", mode); // ✅ Ensure this is updated
    }
  }, [mode]);

  return [mode, setMode];
};

export default useThemeSwitcher;
