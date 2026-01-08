import React, {   useState } from "react";
import { UserContext } from "../../../context/contex";
import { updateUserName } from "../../../firebase/firestore";

// import { updateUserPassword } from "../../../firebase/auth";

// Simple React settings page using Tailwind + dark mode
// Fields are only shown when the user clicks the Edit button
export default function Settings() {
  // const passwordFormRef = useRef();
  const { user } = UserContext();
  const [name, setName] = useState(user.displayName);
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  // const [isEditingPassword, setIsEditingPassword] = useState(false);

  return (
    <div className="min-h-screen flex  w-full justify-center   p-6 md:p-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="max-w-3xl   mx-auto space-y-6">
        <h1 className="text-3xl flex justify-center items-center font-semibold">
          Settings
        </h1>

        {/* Profile Section */}
        <div className="rounded-2xl shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Profile</h2>

            {!isEditingProfile && (
              <button
                className="rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => setIsEditingProfile(true)}
              >
                Edit
              </button>
            )}
          </div>

          {/* View Mode */}
          {!isEditingProfile && (
            <div className="space-y-2">
              <p>
                <span className="font-medium">Name:</span> {name}
              </p>
            </div>
          )}

          {/* Edit Mode */}
          {isEditingProfile && (
            <form className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-xl px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-indigo-400/50"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => {
                    if (name.trim() !== "") {
                      updateUserName(name);
                      setIsEditingProfile(false);
                    } else {
                      alert("invalid Input");
                    }
                  }}
                >
                  Save
                </button>

                <button
                  type="button"
                  className="rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700"
                  onClick={() => setIsEditingProfile(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

         {/* Password Section */}
        {/* <div className="rounded-2xl shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-950 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium">Change Password</h2>

            {!isEditingPassword && (
              <button
                className="rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                onClick={() => setIsEditingPassword(true)}
              >
                Edit
              </button>
            )}
          </div>

          {/* View Mode */}
          {/* {!isEditingPassword && (
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Password is hidden for security
            </p>
          )} */}

          {/* Edit Mode */}
          {/* {isEditingPassword && (
            <form ref={passwordFormRef} className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="new" className="text-sm">
                  New Password
                </label>
                <input
                  id="new"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.currentTarget.value);
                  }}
                  className="rounded-xl px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-indigo-400/50"
                />
              </div>

              <div className="grid gap-1.5">
                <label htmlFor="confirm" className="text-sm">
                  Confirm Password
                </label>
                <input
                  id="confirm"
                  type="text"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.currentTarget.value);
                  }}
                  className="rounded-xl px-3 py-2 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-indigo-400/50"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  className="rounded-xl px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white"
                  onClick={() => {
                    if (
                      [password, confirmPassword].some((e) => e.trim() !== "")
                      &&
                      password == con
                    ) {
                      updateUserPassword(confirmPassword);
                      setIsEditingProfile(false);
                    } else {
                      alert("invalid Input");
                    }
                  }}
                >
                  Save
                </button>

                <button
                  type="button"
                  className="rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-700"
                  onClick={() => setIsEditingPassword(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div> */}  

        {/* Dark mode note: toggle by adding `dark` class to <html> or <body> */}
      </div>
    </div>
  );
}
