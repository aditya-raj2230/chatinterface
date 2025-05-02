import React, { useEffect, useState } from 'react';
import { useTypewriter } from '../../hooks/useTypewrite';

const OutputBox = ({ response, onTypingStatusChange, value }) => {
  const [text, isTyping, stopTyping] = useTypewriter(response, 50); // <- Ensure stopTyping is returned from the hook
  const [hasInput, setHasInput] = useState(false);

  useEffect(() => {
    onTypingStatusChange(isTyping);
    setHasInput(value.trim() !== '');
  }, [isTyping, onTypingStatusChange, value]);

  return (
    <div
      className={`
        w-full 
        max-w-[40vw]
        max-h-[60vh] 
        overflow-y-auto 
        text-lg 
        font-sans 
        leading-relaxed 
        transition-all 
        duration-300 
        p-4 
        rounded-md 
        bg-white 
        dark:bg-gray-700 
        relative
        ${hasInput ? 'text-gray-500 dark:text-gray-500' : 'text-gray-900 dark:text-white'}
      `}
    >
    {isTyping && response.trim() !== "Welcome to GenAi!! Please let me know what I can do for you!!" && (
  <button
    onClick={stopTyping}
    className="absolute top-2 right-2 text-sm text-red-600 dark:text-red-400 bg-transparent "
  >
    ❌
  </button>
)}

      {text}
    </div>
  );
};

export default OutputBox;
