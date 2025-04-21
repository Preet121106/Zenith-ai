import React, { useState } from 'react';
import { BrainCircuit, Menu, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface HeaderProps {
  toggleSidebar: () => void;
  openSettings: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, openSettings }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isThemeHovered, setIsThemeHovered] = useState(false);
  const [isSettingsHovered, setIsSettingsHovered] = useState(false);

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onMouseEnter={() => setIsMenuHovered(true)}
        onMouseLeave={() => setIsMenuHovered(false)}
        aria-label="Toggle Sidebar"
      >
        <Menu 
          size={20} 
          className={`transition-transform duration-200 ${isMenuHovered ? 'scale-110' : 'scale-100'}`} 
        />
      </button>
      
      <div className="flex items-center">
        <BrainCircuit size={28} className="text-indigo-600 dark:text-indigo-400 mr-2" />
        <h1 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-teal-500 bg-clip-text text-transparent">
          Zenith
        </h1>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onMouseEnter={() => setIsThemeHovered(true)}
          onMouseLeave={() => setIsThemeHovered(false)}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <Moon 
              size={20} 
              className={`transition-all duration-200 ${isThemeHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`} 
            />
          ) : (
            <Sun 
              size={20} 
              className={`transition-all duration-200 ${isThemeHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`} 
            />
          )}
        </button>
        
        <button
          onClick={openSettings}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onMouseEnter={() => setIsSettingsHovered(true)}
          onMouseLeave={() => setIsSettingsHovered(false)}
          aria-label="Settings"
        >
          <Settings 
            size={20} 
            className={`transition-transform duration-200 ${isSettingsHovered ? 'scale-110 rotate-45' : 'scale-100 rotate-0'}`} 
          />
        </button>
      </div>
    </header>
  );
};

export default Header;