import { useState, useEffect } from 'react';

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Check the user's theme preference from localStorage or set to 'light' by default
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage
  };

  return {
    theme,
    toggleTheme,
  };
};

export default useThemeSwitcher;
