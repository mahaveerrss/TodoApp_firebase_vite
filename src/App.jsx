import Dashboard from "./pages/DashBoard/Dashboard";
import { auth } from "./firebase/auth.jsx";
import { onAuthStateChanged } from "firebase/auth";
import Register from "./pages/Register/Register";
import { useEffect, useState } from "react";
import { UserContext } from "./context/contex";
import { getTodos } from "./firebase/firestore.js";
function App() {
  const { user, setUser, darkMode, setUserTodos ,todoSample } = UserContext();
  const [isLoading, setIsLoading] = useState(true);

  // apply dark mode class to html
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        const res = await getTodos(user.uid);
        setUserTodos( res ? res : todoSample);
         setIsLoading(false);

        console.log(res)
        setUser(user);
      } else {
        setIsLoading(false);
      }
    });
    return () => unSub();
  }, [user]);

  return (
    <>
      {isLoading ? (
        <div className="flex bg-gray-800 h-full w-full justify-center items-center">
          Loading...
        </div>
      ) : user ? (
        <Dashboard />
      ) : (
        <Register />
      )}
    </>
  );
}

export default App;
