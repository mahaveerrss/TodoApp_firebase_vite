import { createContext, useContext, useState } from "react";

const Context = createContext({ isLoginPage: true, user: null });
const todoSample = [
  {
    id: "t1",
    title: "Finish React Todo App",
    desc: "Connect form to Firestore and render todo list",
    tag: "Work",
    createdAt: 1,
    isCompleted: true,
  },
  {
    id: "t2",
    title: "Study JavaScript Closures",
    desc: "Revise lexical scope & closure behavior with examples",
    tag: "Study",
    createdAt: 2,
    isCompleted: false,
  },
  {
    id: "t3",
    title: "Buy Groceries",
    desc: "Milk, bread, eggs, fruits, vegetables",
    tag: "Personal",
    createdAt: 3,
    isCompleted: false,
  },
  {
    id: "t4",
    title: "Workout Session",
    desc: "45 min cardio + stretching",
    tag: "Health",
    createdAt: 4,
    isCompleted: false,
  },
  {
    id: "t5",
    title: "Learn Firebase Security Rules",
    desc: "Understand read/write & auth UID restrictions",
    tag: "Study",
    createdAt: 5,
    isCompleted: false,
  },
  {
    id: "t6",
    title: "UI Polish for Todo Cards",
    desc: "Improve spacing, shadows, hover animation",
    tag: "Design",
    createdAt: 6,
    isCompleted: false,
  },
  {
    id: "t7",
    title: "Call Mom",
    desc: "Ask about weekend plans",
    tag: "Personal",
    createdAt: 7,
    isCompleted: false,
  },
  {
    id: "t8",
    title: "Write Project README",
    desc: "Add setup steps, screenshots, tech stack",
    tag: "Work",
    createdAt: 8,
    isCompleted: false,
  },
  {
    id: "t9",
    title: "Learn Tailwind Dark Mode",
    desc: "Practice dark: and system theme detection",
    tag: "Study",
    createdAt: 9,
    isCompleted: false,
  },
  {
    id: "t10",
    title: "Refactor Components",
    desc: "Split TodoCard & TodoForm into separate files",
    tag: "Work",
    createdAt: 10,
    isCompleted: false,
  },
  {
    id: "t11",
    title: "Prepare for Interview",
    desc: "DSA practice + common React questions",
    tag: "Important",
    createdAt: 11,
    isCompleted: false,
  },
];

const ContextProvider = function ({ children }) {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [user, setUser] = useState(null);
  const [currentWindow, setCurrentWindow] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(true);
  const [userTodos, setUserTodos] = useState([]);
 

  return (
    <Context.Provider
      value={{
        isLoginPage,
        setIsLoginPage,
        user,
        setUser,
        currentWindow,
        setCurrentWindow,
        darkMode,
        setDarkMode,
        userTodos,
        setUserTodos,
        todoSample,
       
      }}
    >
      {children}
    </Context.Provider>
  );
};

const UserContext = function () {
  return useContext(Context);
};

export { ContextProvider, UserContext };
