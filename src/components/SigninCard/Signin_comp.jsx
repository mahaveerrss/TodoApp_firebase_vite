import { HarmBlockThreshold } from "firebase/ai";
import { UserContext } from "../../context/contex";
import { createNewUser } from "../../firebase/auth.jsx";

export default function Signin_comp() {
  const { setIsLoginPage, setUser } = UserContext();

  async function onSubmit(e) {
    e.preventDefault();
    const targetValueArr = Array.from(e.target);
    targetValueArr.pop();
    const valuesArray = [];
    targetValueArr.forEach((element) => {
      valuesArray.push(element.value);
    });
    console.log(valuesArray);
    if (valuesArray.some((e) => e.trim() === "")) {
      alert("All fields must be filled!");
      return undefined;
    }
    const fullName = String(valuesArray[0]);
    const email = String(valuesArray[1]);
    const password = String(valuesArray[2]);
    const User = createNewUser(fullName, email, password);
    User.then((data) => {
      setUser(data);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl outline shadow-black   dark:shadow-md dark:outline-0 outline-gray-200 shadow-sm bg-zinc-100 dark:bg-gray-800">
        {/* Header */}
        <h1 className=" text-4xl  whitespace-nowrap text-center font-bold text-gray-800 dark:text-white mb-6">
          Create Account
        </h1>

        {/* Form */}
        <form
          onSubmit={(e) => {
            onSubmit(e);
          }}
          className="space-y-4"
        >
          {/* FullName */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">
              FullName
            </label>
            <input
              type="text"
              placeholder="Jhon Doe"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Email */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
          Already have an account?{" "}
          <span
            onClick={() => {
              setIsLoginPage((prev) => !prev);
            }}
            className="text-blue-500 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </>
  );
}
