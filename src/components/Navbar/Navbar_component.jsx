export default function Navbar_component({ props }) {
  const { darkMode, setDarkMode, isLogInPage = true } = props;

  return (
    <nav className="w-full px-6 py-4 bg-white dark:bg-gray-800 shadow-md transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          TodoAPP
        </h1>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 text-gray-600 dark:text-gray-300">
          <li className="hover:text-blue-500 cursor-pointer">Home</li>
          <li className="hover:text-blue-500 cursor-pointer">About</li>
          <li className="hover:text-blue-500 cursor-pointer">Contact</li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-sm  !rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Signup/Login/logout Button */}
          <button
            className={`hidden md:block px-4 py-1.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm`}
          >
            {isLogInPage ? "SignIn" : "LogIn"}
          </button>
        </div>
      </div>
    </nav>
  );
}
