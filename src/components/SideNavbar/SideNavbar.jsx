import React, { useState } from "react";

import { UserContext } from "../../context/contex";
// work todo on sidebar nav !!!!
function SideNavbar() {
  const [toggleWidth, setToggleWidth] = useState(true);
  const { currentWindow, setCurrentWindow: setUserWindow } = UserContext();
  return (
    <div
      className={` ${
        toggleWidth ? "w-[12%]  sm:w-[8%] " : "w-[8%]  sm:w-[4%]   "
      } transition-all shadow-md flex flex-col  max-h-[90vh] min-h-[90vh] overflow-hidden  justify-start items-center gap-y-24 dark:bg-gray-700 bg-white`}
    >
      <div
        onClick={() => {
          console.log(toggleWidth);
          setToggleWidth((prev) => !prev);
        }}
        className="flex  select-none justify-center w-8 h-6  text-center items-center mt-5 mx-2.5 cursor-pointer dark:bg-amber-50 bg-gray-700 rounded-xl "
      >
        🗒
      </div>

      <div
        className={` transition-all flex text-[100%]   flex-col h-full overflow-hidden  justify-start items-center gap-y-5 dark:bg-gray-700 `}
      >
        <button
          onClick={(e) => {
            setUserWindow(e.currentTarget.id);
          }}
          id="Dashboard"
          className={`sideNavbarButton mt-2 ${
            currentWindow === "Dashboard"
              ? "bg-blue-700 outline-2 outline-white"
              : ""
          } `}
        >
          {!toggleWidth ? "📝" : "Dashboard"}
        </button>
        <button
          onClick={(e) => {
            setUserWindow(e.currentTarget.id);
          }}
          id="Completed"
          className={`sideNavbarButton     ${
            !toggleWidth ? "text-green-400 border-white " : ""
          }
           ${
             currentWindow === "Completed"
               ? "bg-blue-700 outline-2 outline-white"
               : ""
           }
          `}
        >
          {!toggleWidth ? "✔" : "Completed"}
        </button>
        {/* <button
          onClick={(e) => {
            setUserWindow(e.currentTarget.id);
          }}
          id="Trash"
          className={`sideNavbarButton ${!toggleWidth ? "  " : ""}  ${
            currentWindow === "Trash"
              ? "bg-blue-700 outline-2 outline-white"
              : ""
          }`}
        >
          {!toggleWidth ? "📠" : "Trash"}
        </button> */}
        <button
          onClick={(e) => {
            setUserWindow(e.currentTarget.id);
          }}
          id="Settings"
          className={`sideNavbarButton ${!toggleWidth ? "text-xl " : ""}  ${
            currentWindow === "Settings"
              ? "bg-blue-700 outline-2 outline-white"
              : ""
          }`}
        >
          {!toggleWidth ? "⚙" : "Settings"}
        </button>
      </div>
    </div>
  );
}

export default SideNavbar;
