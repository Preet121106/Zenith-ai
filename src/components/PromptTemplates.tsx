import React from 'react';
import { useZenith } from '../context/ZenithContext';
import { educationTemplates } from '../utils/templates';

const PromptTemplates: React.FC = () => {
  const { sendMessage } = useZenith();

  const handleTemplateClick = (prompt: string) => {
    sendMessage(prompt);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {educationTemplates.map((template) => (
        <button
          key={template.id}
          onClick={() => handleTemplateClick(template.prompt)}
          className="text-left p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-indigo-500 dark:hover:border-indigo-400 bg-white dark:bg-gray-800 transition-all duration-200 hover:shadow-md"
        >
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">
            {template.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {template.description}
          </p>
        </button>
      ))}
    </div>
  );
};

export default PromptTemplates;