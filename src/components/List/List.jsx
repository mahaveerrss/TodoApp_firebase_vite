import React, { useEffect, useState } from "react";
import TodoCard from "../TodoCard/TodoCard";
import SortButton from "../SortButton/SortButton";
import { UserContext } from "../../context/contex";
import { updateComplete, updateTodo } from "../../firebase/firestore";
function List({ isCompletePage = false }) {
  // global context ;
  const {
    userTodos: todos,
    setUserTodos: setTodos,
    user,
    
  } = UserContext();
  // const todos = [];

  const [completedTodos, setCompletedTodos] = useState(
    todos.filter((e) => e?.isCompleted)
  );
  const [notCompletedTodos, setNotCompletedTodos] = useState(
    todos.filter((e) => !e?.isCompleted)
  );
  const [sortBy, setSortBy] = useState("Alphabets");
  const [sortByTag, setSortByTag] = useState("Default:All");
  const [sortedArray, setSortedArray] = useState(() => {
    const localTodos = isCompletePage ? completedTodos : todos;
    return localTodos.toSorted((a, b) => a.title.localeCompare(b.title));
  });
  const [resArray, setResArray] = useState(sortedArray);
  const Tags = Array.from(new Set(sortedArray.map((e) => e?.tag)));

  useEffect(() => {


    if (isCompletePage) {
      setCompletedTodos(( ) => {
        const res = todos.filter((e) => e?.isCompleted);

        return res;
      });
      
    } else {
     
      setNotCompletedTodos(( ) => {
        const res = todos.filter((e) => !e?.isCompleted);

        return res;
      });
       
    }

    let localTodos;
    if (isCompletePage) {
      localTodos = todos.filter((e) => {
        return e.isCompleted;
      });
    } else {
      localTodos = todos.filter((e) => {
        return !e.isCompleted;
      });
     
    }
    if (sortBy == "Alphabets") {
      const alphOrder = localTodos.toSorted((a, b) =>
        a.title.localeCompare(b.title)
      );
      setSortedArray(alphOrder);
    }
    if (sortBy == "Date") {
      const dateOrder = localTodos.toSorted((a, b) => {
        return a.createdAt - b.createdAt;
      });

      setSortedArray(dateOrder);
    }
  }, [sortBy, todos]);

  useEffect(() => {
    setResArray(sortedArray);

    return () => {};
  }, [sortedArray, todos]);

  //  trigger when the sorts happen both ::
  useEffect(() => {
    
    if (sortByTag !== "Default:All") {
      const sortByTagArr = sortedArray.filter((e) => e.tag === sortByTag);
      setResArray(sortByTagArr);
    } else {
      setResArray(sortedArray);
    }
  }, [sortByTag, sortedArray, todos, completedTodos, notCompletedTodos]);

  return (
    <div
      className="
  flex flex-wrap max-w-full gap-8 
  w-[92%] sm:w-11/12 mx-auto flex-col
   
   py-12
    
   
"
    >
      <SortButton
        setSortBy={setSortBy}
        setSortByTag={setSortByTag}
        tags={Tags}
      />
      <div className="flex flex-wrap gap-8">
        {  resArray.map((todo) => (
          
          <TodoCard
            key={todo?.createdAt}
            todo={todo}
            onEdit={(title, desc) => {
              setTodos((prev) => {
                return prev.map((e) => {
                  if (e.createdAt === todo?.createdAt) {
                    e.title = title;
                    e.desc = desc;
                    return e;
                  } else {
                    return e;
                  }
                });
              });
              updateTodo(user?.uid,todo);
            }}
            onDelete={() => {
              setTodos((prev) => {
                

                if (!isCompletePage) {
                  const res = prev.map((e) => {
                    if (e.createdAt == todo.createdAt) {
                      e.isCompleted = true;
                    }

                    return e;
                  });
                  updateComplete(user.uid, res);
                  return res;
                }
               

                const res = prev.filter((e) => {
                  
                  return e.createdAt != todo.createdAt;
                });
                updateComplete(user.uid, res);
                return res;
              });

              setNotCompletedTodos(todos.filter((e) => !e?.isCompleted));
              if (!isCompletePage) {
                setNotCompletedTodos((prev) => {
                  return prev.filter((e) => e.createdAt != todo.createdAt);
                });
              } else {
               

                setCompletedTodos((prev) => {
                  if (!isCompletePage) {
                    return prev.map((e) => {
                      if (e.createdAt == todo.createdAt) {
                        e.isCompleted = true;
                      }
                      return e;
                    });
                  } else {
                    return prev.filter((e) => {
                      return e.createdAt !== todo.createdAt;
                    });
                  }
                });
              }
              
            }}
          />
        ))}
        {resArray.length > 0 ? (
          ""
        ) : (
          <h1 className="dark:text-white  text-black flex justify-center items-center w-full">
            No Todos
          </h1>
        )}
      </div>
    </div>
  );
}

export default List;
