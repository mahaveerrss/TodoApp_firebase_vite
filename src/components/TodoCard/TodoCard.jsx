import { useState } from "react";
import { UserContext } from "../../context/contex";

export default function TodoCard({ todo, onEdit, onDelete }) {
  const [isEditOn, setIsEditOn] = useState(false);
  const [title, setTitle] = useState(todo?.title);
  const [desc, setDesc] = useState(todo?.desc);
  const { currentWindow } = UserContext();
  return (
    <div
      className="
       max-w-xs sm:max-w-sm 
      mx-auto

      p-4 sm:p-5
      rounded-2xl border shadow-md

      bg-yellow-100 border-yellow-300 rotate-[0.5deg]
      dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900

      transition
      hover:rotate-0 hover:scale-[1.01]
    "
    >
      {/* Pin dot */}
      <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 shadow"></span>

      {/* Tag Badge */}
      {todo?.tag && (
        <span
          className="
          inline-block px-2 py-1 text-xs font-medium rounded-full mb-2
          bg-indigo-200 text-indigo-800
          dark:bg-indigo-700 dark:text-white
        "
        >
          {todo.tag}
        </span>
      )}

      <div className="flex items-center w-full mb-4 gap-4justify-center flex-col">
        {/* Title */}
        <div className="flex flex-col">
          {isEditOn && (
            <label
              className="
        text-base sm:text-sm font-semibold
        text-gray-900 dark:text-gray-100
        
      "
              htmlFor="editTitle"
            >
              Title:
            </label>
          )}
          <input
            id="editTitle"
            onChange={(e) => setTitle(e.currentTarget.value)}
            className={`
              ${
                isEditOn ? "outline outline-indigo-400 border border-white" : ""
              }
        text-base sm:text-lg font-semibold rounded-md pl-2
        text-gray-900 dark:text-gray-100
        `}
            type="text"
            disabled={!isEditOn}
            value={title}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          {" "}
          {isEditOn && (
            <label
              className="
        text-base sm:text-sm font-semibold
        text-gray-900 dark:text-gray-100
        
      "
              htmlFor="editDesc"
            >
              Description:
            </label>
          )}
          <input
            id="editDesc"
            className={`
              ${
                isEditOn ? "outline outline-indigo-400 border border-white" : ""
              }
        text-base sm:text-lg font-semibold rounded-md pl-2
        text-gray-900 dark:text-gray-100
        `}
            onChange={(e) => setDesc(e.currentTarget.value)}
            type="text"
            disabled={!isEditOn}
            value={desc}
          />
        </div>
      </div>

      {/* Buttons Row */}
      <div className="flex flex-wrap justify-evenly gap-2">
        {currentWindow == "Dashboard" ? (
          <button
            onClick={() => {
              if (isEditOn) {
                if ([title, desc].some((e) => e.trim() == "")) {
                  alert("Input Can't Be Empty");
                } else {
                  onEdit(title, desc);
                  setIsEditOn((prev) => !prev);
                }
              } else {
                setIsEditOn((prev) => !prev);
              }
            }}
            className={`  px-3 py-1 text-sm rounded-lg border
            bg-white hover:bg-gray-100
            ${isEditOn ? "!bg-green-600 text-white" : ""}
            dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600`}
          >
            {isEditOn ? "Save" : "✏️ Edit"}
          </button>
        ) : (
           null
        )}
        <button
          onClick={() => onDelete?.(todo)}
          className="
            px-3 py-1 text-sm rounded-lg
            bg-red-500 text-white hover:bg-red-600
            dark:bg-red-600 dark:hover:bg-red-700
          "
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
