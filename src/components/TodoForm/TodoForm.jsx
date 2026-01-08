import { useState } from "react";
import { UserContext } from "../../context/contex";
import { addTodo } from "../../firebase/firestore";

export default function TodoForm() {
  const presetTags = ["Work", "Personal", "Study", "Important"];
  const { setUserTodos, user } = UserContext();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tag, setTag] = useState("");
  const [tagType, setTagType] = useState("preset");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const userTodo = {
      title,
      desc,
      tag,
      isCompleted: false,
      createdAt: Date.now(),
    };

    await addTodo(userTodo, user.uid);

    setUserTodos((prev) => [...prev, userTodo]);
    
    setTitle("");
    setDesc("");
    setTag("");
    setTagType("preset");
  };

  const inputClasses =
    "w-full px-3 py-2 rounded-lg border shadow-sm " +
    "border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 " +
    "bg-white text-gray-800 " +
    "dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100 dark:focus:ring-indigo-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-[100vw] sm:w-11/12 max-w-sm sm:max-w-md lg:max-w-xl
        mx-auto 
        bg-white border border-gray-200 shadow-lg rounded-2xl
        p-4 sm:p-6 space-y-4
        dark:bg-gray-900 dark:border-gray-700
      "
    >
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
        Add Todo
      </h3>

      {/* Title */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
          Title
        </label>
        <input
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={inputClasses}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
          Description
        </label>
        <textarea
          placeholder="Add some details..."
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
          rows={3}
          className={inputClasses + " resize-none"}
        />
      </div>

      {/* Tag row (responsive) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
            Select Tag
          </label>

          <select
            required
            value={tagType === "preset" ? tag : "custom"}
            onChange={(e) => {
              if (e.target.value === "custom") {
                setTagType("custom");
                setTag("");
              } else {
                setTagType("preset");
                setTag(e.target.value);
              }
            }}
            className={inputClasses}
          >
            <option value="" disabled>
              Choose a tag
            </option>

            {presetTags.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}

            <option value="custom">➕ Custom Tag</option>
          </select>
        </div>

        {tagType === "custom" && (
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-600 dark:text-gray-300">
              Custom Tag
            </label>
            <input
              type="text"
              placeholder="Enter custom tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className={inputClasses}
            />
          </div>
        )}
      </div>

      <button
        type="submit"
        className="
          w-full py-2.5 sm:py-3 rounded-lg font-medium
          bg-indigo-500 text-white hover:bg-indigo-600
          transition active:scale-[0.98]
          dark:bg-indigo-600 dark:hover:bg-indigo-700
        "
      >
        Add Todo
      </button>
    </form>
  );
}
