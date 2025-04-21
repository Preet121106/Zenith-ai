import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { ZenithProvider } from './context/ZenithContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import SettingsModal from './components/SettingsModal';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openSettings = () => {
    setIsSettingsOpen(true);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <ThemeProvider>
      <ZenithProvider>
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
          
          <div className="flex flex-col flex-1 lg:ml-72 relative">
            <Header toggleSidebar={toggleSidebar} openSettings={openSettings} />
            
            <main className="flex flex-col flex-1 overflow-hidden">
              <MessageList />
              <ChatInput />
            </main>
          </div>
          
          <SettingsModal isOpen={isSettingsOpen} onClose={closeSettings} />
        </div>
      </ZenithProvider>
    </ThemeProvider>
  );
}

export default App;