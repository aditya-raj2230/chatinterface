import ChatInterface from "./components/ChatInterface";
import { ReactComponent as Logo } from "./assets/Logo.svg";
import { useTheme } from "./contexts/themeContext";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500 flex flex-col  ">
      
      {/* Navbar */}
      <nav className="w-full h-16 px-8 bg-white dark:bg-gray-900 shadow-md flex items-center justify-between transition-colors duration-500">
        <Logo className="h-10 w-auto text-black dark:text-white transition-colors duration-500" />
        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded-md  font-medium text-3xl bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {isDark ? "🌞" : "🌚"}
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 items-center justify-center p-8 gap-12">
        
        {/* Left: Chat Interface */}
        <div className="min-w-[50vw] min-h-[80vh] bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-2xl rounded-2xl p-6 transition-colors duration-500 absolute top-20 left-10">
          <ChatInterface />
        </div>

        {/* Right: Genoshi image with glow */}
        <div className="absolute top-36 right-20 flex items-center justify-center">
          
          {/* Cloud-like glow for light mode */}
          {!isDark && (
            <div className="absolute w-[20vw] -inset-12 bg-blue-400 rounded-full blur-3xl opacity-60"></div>
          )}

          {/* Image Box */}
          <div className="relative z-10 w-72 h-72 rounded-2xl flex items-center justify-center bg-white dark:bg-gray-700 shadow-lg dark:shadow-xl transition-shadow">
            <div className="w-64 h-64 rounded-xl p-4 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 transition-colors">
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
        </div>
      </div>
    </div>
  );
}

export default App;
