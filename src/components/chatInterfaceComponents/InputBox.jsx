import React, { useEffect, useState, useRef } from 'react';

const InputBox = ({ handleChange, values, onKeyDown }) => {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);

  const handleText = (e) => {
    const newText = e.target.value;
    setText(newText);
    handleChange(newText);
  };

  useEffect(() => {
    setText(values);
  }, [values]);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const maxHeight = window.innerHeight * 0.3
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  }, [text]);

  return (
    <textarea
      ref={textareaRef}
      rows={1}

      className="w-full bg-transparent p-4 resize-none text-lg font-sans overflow-y-auto max-h-[30vh] text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none transition-colors duration-300"

      onChange={handleText}
      onKeyDown={onKeyDown}
      placeholder="Type here..."
    />
  );
};

export default InputBox;
