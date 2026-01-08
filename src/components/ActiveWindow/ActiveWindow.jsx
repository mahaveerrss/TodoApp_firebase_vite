import React, { useEffect, useState } from "react";
import { UserContext } from "../../context/contex";
import UserDashboard from "../Windows/UserDashboard/UserDashboard";
import Settings from "../Windows/Settings/Settings";
 
import Completed from "../Windows/Completed/Completed";

function ActiveWindow() {
  const { currentWindow } = UserContext();
  const [activeWindow, setActiveWindow] = useState(<UserDashboard />);

  useEffect(() => {
    const windows = {
      Dashboard: <UserDashboard />,
      Settings: <Settings />,
      
      Completed: <Completed />,
    };

    setActiveWindow(windows[currentWindow]);
    return () => {};
  }, [currentWindow]);

  return <div className=" flex flex-row no-scrollbar  overflow-y-auto  justify-start items-start w-full">{activeWindow}</div>;
}

export default ActiveWindow;
