import { useEffect } from "react";
import Navbar_component from "../../components/Navbar/Navbar_component";
import { UserContext } from "../../context/contex";
import SideNavbar from "../../components/SideNavbar/SideNavbar";

import ActiveWindow from "../../components/ActiveWindow/ActiveWindow";

function Dashboard() {
  const { darkMode } = UserContext();

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
    <div className=" flex items-center flex-col  max-h-screen min-h-screen    bg-gray-100 dark:bg-gray-900 transition-colors">
      <Navbar_component />

      <div className="flex flex-row w-full  max-h-[90vh] min-h-[90vh] p-0 m-0 justify-between">
        <SideNavbar />
        <ActiveWindow />
        <div></div>
      </div>
    </div>
  );
}

export default Dashboard;
