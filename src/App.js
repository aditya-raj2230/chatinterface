import ChatInterface from "./components/ChatInterface";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { useTheme } from "./contexts/themeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 flex flex-col">
      
      {/* Navbar */}
      <nav className="w-full h-16 px-8 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between">
        <motion.div initial={{  opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Logo className="h-10 w-auto text-black dark:text-white" />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md font-medium text-3xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          {isDark ? "🌞" : "🌚"}
        </motion.button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 items-center justify-center p-8 gap-12 relative">
        
        {/* Left Panel: Intro or Chat */}
        <AnimatePresence mode="wait">
          {!showChat ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="w-[50vw] min-h-[80vh] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-2xl rounded-2xl p-8 flex flex-col justify-center space-y-6 transition-colors duration-500 absolute left-10"
            >
              <h1 className="text-4xl font-bold">Meet Genoshi</h1>
              <p className="text-lg leading-relaxed">
                Genoshi is your intelligent companion that can chat, assist, and guide you through conversations with ease and empathy. Click the button below to start chatting.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowChat(true)}
                className="self-start px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
              >
                Start Conversation
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="min-w-[50vw] min-h-[80vh] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-2xl rounded-2xl p-6 transition-colors duration-500 absolute  left-10"
            >
              <ChatInterface />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Panel: Genoshi Image */}
        <motion.div
          className="absolute top-36 right-20 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {!isDark && (
            <motion.div
              className="absolute w-[20vw] -inset-12 bg-blue-400 rounded-full blur-3xl opacity-60"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.6, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
          )}

          <div className="relative z-10 w-72 h-72 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-700 shadow-lg dark:shadow-xl transition-shadow">
            <div className="w-64 h-64 rounded-xl p-4 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
              <img
                alt="Genoshi"
                loading="lazy"
                width="200"
                height="200"
                src="/genoshi.png"
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
