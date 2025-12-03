import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(true);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      const dark = savedTheme === 'dark';
      setIsDark(dark);
      applyTheme(dark);
    } else {
      applyTheme(true);
    }
  }, []);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    if (dark) {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.setAttribute('data-theme', 'light');
    }
  };

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    applyTheme(newIsDark);
    localStorage.setItem('portfolio-theme', newIsDark ? 'dark' : 'light');
  };

  return { isDark, toggleTheme };
};
