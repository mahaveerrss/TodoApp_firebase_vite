import { app } from "./index";
import {
  arrayUnion,
  getDoc,
  getFirestore,
  updateDoc,
} from "firebase/firestore";
import { setDoc, doc } from "firebase/firestore";
import { getAuth, updateProfile } from "firebase/auth";

const db = getFirestore(app);
const auth = getAuth();

const createUserData = async (fullName, uid) => {
  try {
    await setDoc(doc(db, "users", uid), {
      fullName,
      todos: [],
    });
    // const docRef = await addDoc(collection(db, "users",uid), {
    //   fullName,
    //   todos: {}

    // });
   
  } catch (e) {
    console.error("Error CreateUserData : ", e);
  }
};

const addTodo = async (todo, uid) => {
  
  const todosRef = doc(db, "users", uid);

  try {
    await setDoc(
      todosRef,
      {
        todos: arrayUnion(todo),
      },
      { merge: true }
    );
  } catch (error) {
    console.log("Error at AddTodo Firebase:: ", error);
  }
};

const getTodos = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const UserTodos = await getDoc(docRef);

   
    return UserTodos.data().todos;
  } catch (error) {
    console.log("getting todos ::", error);
  }
};

const updateComplete = async (uid, todos) => {
  const docRef = doc(db, "users", uid);
  
  await updateDoc(docRef, { todos: todos });
};
const updateTodo = async (uid, todos) => {
  const docRef = doc(db, "users", uid);
 
  await updateDoc(docRef, { todos: todos });
};

const updateUserName = async (userName) => {
  updateProfile(auth.currentUser, {
    displayName: userName,
  })
    .then(() => {
      // Profile updated successfully
      console.log("User profile updated with name!");
    })
    .catch((error) => {
      // Handle errors during creation or profile update
      console.error("Error adding user name:", error);
    });
};

export {
  createUserData,
  addTodo,
  getTodos,
  updateComplete,
  updateTodo,
  updateUserName,
};
