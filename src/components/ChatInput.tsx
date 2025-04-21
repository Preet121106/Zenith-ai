import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { useZenith } from '../context/ZenithContext';

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState('');
  const { sendMessage, loading } = useZenith();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // Auto-resize textarea as content grows
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || loading) return;
    
    const trimmedMessage = message.trim();
    setMessage('');
    
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
    
    await sendMessage(trimmedMessage);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <form onSubmit={handleSubmit} className="flex items-end space-x-2">
        <div className="relative flex-1">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="w-full p-3 pr-12 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 resize-none min-h-[48px] max-h-[200px] focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
            disabled={loading}
            rows={1}
          />
        </div>
        <button
          type="submit"
          disabled={!message.trim() || loading}
          className={`p-3 rounded-full ${
            message.trim() && !loading
              ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
              : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          } transition-colors duration-200 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          <Send 
            size={20} 
            className={`transition-transform duration-200 ${isButtonHovered && message.trim() && !loading ? 'translate-x-0.5 -translate-y-0.5' : ''}`} 
          />
        </button>
      </form>
      {loading && (
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center">
          <div className="mr-2 flex space-x-1">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
          Zenith is thinking...
        </div>
      )}
    </div>
  );
};

export default ChatInput;