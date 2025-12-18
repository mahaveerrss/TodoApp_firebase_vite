function LoginCard_component() {
  function onLogin(e) {
    e.preventDefault();
    // ! Todo login the use
    // const email = String(e.target[0].value);
    // const password = String(e.target[1].value);
  }
  return (
    <>
      {/* Card */}
      <div className="w-full max-w-md p-8 rounded-2xl shadow-lg bg-white  shadow-gray-900 dark:bg-gray-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Login
          </h1>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => onLogin(e)}>
          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-4 text-gray-500 dark:text-gray-400">
          Don’t have an account?{" "}
          <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p>
      </div>
    </>
  );
}

export default LoginCard_component;
