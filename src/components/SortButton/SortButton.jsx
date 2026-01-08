import React from "react";

function SortButton({ setSortBy, tags, setSortByTag }) {
  return (
    <div className="w-full flex justify-center gap-2 dark:text-white items-center">
      <label htmlFor="Sort">SortBy:</label>
      <select
        defaultValue={"Alphabets"}
        id="Sort"
        onChange={(e) => {
          setSortBy(e.currentTarget.value);
        }}
        className={` flex   w-[12% ]  bg-blue-700 text-white rounded-md dark:bg-white justify-center items-center dark:text-black text`}
      >
        <option value="" disabled>
          Select Sort
        </option>
        <option value="Alphabets">Default: A-Z</option>
        <option value="Date">Date</option>
        
      </select>

      <label htmlFor="Sort">Tag:</label>
      <select
        defaultValue={null}
        id="SortTag"
        onChange={(e) => {
          setSortByTag(e.currentTarget.value);
        }}
        className={` flex   w-[12% ]  bg-blue-700 text-white rounded-md dark:bg-white justify-center items-center dark:text-black text`}
      >
        <option value="" disabled>
          Select Sort
        </option>
        <option value={null}>Default:All</option>
        {tags.map((e, id) => {
          return (
            <option key={id} id={id} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortButton;
