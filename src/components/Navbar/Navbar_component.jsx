import { UserContext } from "../../context/contex";
import { logOut } from "../../firebase/auth.jsx";

export default function Navbar_component() {
  const {
    isLoginPage,
    setIsLoginPage,
    setUser,
    darkMode,
    setDarkMode,
    user: isUserExists,
  } = UserContext();

  return (
    <nav className="w-full px-6 max-h-[10vh] min-h-[10vh] py-4 bg-white  dark:bg-gray-800    shadow-md      transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          TodoAPP
        </h1>

        

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* User Id */}
        <h1 className="text-XL font-bold text-gray-800 dark:text-white">
          ID: {isUserExists?.displayName}
        </h1>
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-sm  !rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 text-white"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Signup/Login/logout Button */}
          {!isUserExists ? (
            <button
              onClick={() => {
                setIsLoginPage((prev) => !prev);
              }}
              className={`hidden md:block w-[120px] px-4 py-1.5  rounded-md bg-blue-600  hover:bg-blue-700 text-white text-sm`}
            >
              {isLoginPage ? "SignIn" : "LogIn"}
            </button>
          ) : (
            <button
              onClick={() => {
                const user = logOut();
                setUser(user);
                window.location.reload();
              }}
              className={`hidden md:block w-[120px] px-4 py-1.5 rounded-md  bg-red-600 hover:bg-red-700 text-white text-sm`}
            >
              {"Logout"}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
