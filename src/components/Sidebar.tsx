import React from 'react';
import { PlusCircle, MessageSquare } from 'lucide-react';
import { useZenith } from '../context/ZenithContext';

interface SidebarProps {
  isOpen: boolean;
  closeSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
  const { conversations, activeConversationId, createNewConversation, setActiveConversation } = useZenith();

  const handleConversationSelect = (id: string) => {
    setActiveConversation(id);
    closeSidebar();
  };

  const handleNewConversation = () => {
    createNewConversation();
    closeSidebar();
  };

  // Format date to readable string
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <>
      {/* Overlay - only visible on mobile when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-30 pt-14 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          <button
            onClick={handleNewConversation}
            className="flex items-center justify-center w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-200 space-x-2"
          >
            <PlusCircle size={18} />
            <span>New Conversation</span>
          </button>
        </div>

        <div className="flex-1 overflow-auto">
          <div className="px-2 space-y-1">
            {conversations.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 dark:text-gray-400 text-sm">
                No conversations yet.
              </div>
            ) : (
              conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  onClick={() => handleConversationSelect(conversation.id)}
                  className={`w-full flex items-start py-3 px-3 rounded-md text-left transition-colors duration-150 group ${
                    activeConversationId === conversation.id
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  <MessageSquare size={18} className="mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{conversation.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formatDate(conversation.updatedAt)}
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;