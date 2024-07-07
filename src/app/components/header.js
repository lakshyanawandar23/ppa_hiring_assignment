// components/Header.js
import { useEffect,useState } from 'react';
export default function Header() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <header className="p-4 flex justify-between items-center bg-gray-200 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Nexcent</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-800 dark:text-gray-200">Home</a></li>
          <li><a href="#" className="text-gray-800 dark:text-gray-200">Features</a></li>
          <li><a href="#" className="text-gray-800 dark:text-gray-200">Community</a></li>
          <li><a href="#" className="text-gray-800 dark:text-gray-200">Blog</a></li>
          <li><a href="#" className="text-gray-800 dark:text-gray-200">Pricing</a></li>
        </ul>
      </nav>
      <button
        onClick={toggleTheme}
        className="p-2 mt-2  bg-gray-300 dark:bg-gray-700 rounded"
      >
      {theme.toUpperCase()}
      </button>
    </header>
  );
}

