import { useEffect, useState } from "react";
import Signin_comp from "../../components/SigninCard/Signin_comp";
import Navbar_component from "../../components/Navbar/Navbar_component";

export default function Signin() {
  const [darkMode, setDarkMode] = useState(true);

  // apply dark mode class to html
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex items-center flex-col gap-32   bg-gray-100 dark:bg-gray-900 transition-colors">
      <Navbar_component props={{ darkMode, setDarkMode, isLogInPage: false }} />
      <Signin_comp />
    </div>
  );
}
