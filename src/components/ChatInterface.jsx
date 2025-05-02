import React, { useEffect, useState } from 'react';
import OutputBox from './chatInterfaceComponents/OutputBox';
import InputBox from './chatInterfaceComponents/InputBox';
import Loader from './chatInterfaceComponents/Loader';
import { useTheme } from '../contexts/themeContext';

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [inputbox, setInputbox] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [response, setResponse] = useState("Welcome to GenAi!! Please let me know what I can do for you!!");
  const [loader, setLoader] = useState(false);
  const [isTypingFromOutputBox, setIsTypingFromOutputBox] = useState(false);

  const sendRequest = () => {
    if (!input.trim()) return;
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setResponse(input);
      setInput('');
    }, 2000);
  };

  const handleChange = (text) => setInput(text);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendRequest();
    }
  };

  useEffect(() => {
    setShowButton(input.trim() !== '');
  }, [input]);

  return (
    <div className="h-full w-full flex justify-center items-start p-4 md:p-6 transition-colors duration-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-xl">
      <div className="w-full md:w-[40vw] space-y-4">
        {loader ? (
          <Loader />
        ) : (
          <>
            <OutputBox
              response={response}
              onTypingStatusChange={setIsTypingFromOutputBox}
              value={input}
            />
            {!isTypingFromOutputBox && inputbox && (
              <div className="flex flex-col border border-gray-300 dark:border-gray-500 rounded-xl shadow-md transition-colors duration-300 bg-gray-50 dark:bg-gray-700">
                <div className="flex-1 overflow-y-auto max-h-[50vh] px-4 pt-4">
                  <InputBox
                    handleChange={handleChange}
                    values={input}
                    onKeyDown={handleKeyDown}
                  />
                </div>
                {showButton && !loader && (
                  <div className="flex justify-start px-4 pb-4">
                    <button
                      onClick={sendRequest}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full text-sm transition-colors"
                    >
                      Send
                    </button>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatInterface;
