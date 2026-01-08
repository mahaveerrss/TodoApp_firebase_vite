import React from "react";
import TodoForm from "../../TodoForm/TodoForm";
import List from "../../List/List";
 

function UserDashboard() {
 
  return (
    <div className=" flex flex-wrap flex-row max-h-full h-full px-auto sm:px-0  relative  w-full p-24 gap-16 items-center">
    
    
        <>
          <TodoForm />
          <List />
        </>
    
    </div>
  );
}

export default UserDashboard;
