import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePassword
} from "firebase/auth";
import { app } from ".";
import { UserContext } from "../context/contex";
import { createUserData } from "./firestore";

const auth = getAuth(app);

const createNewUser = async function (fullName, email, password) {
  console.log(auth);
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      console.log(user);
      const uid = String(user.uid);
      createUserData(fullName, uid);
      return updateProfile(user, {
        displayName: fullName,
      })
        .then(() => {
          // Profile updated successfully
          console.log("User profile updated with name!");
        })
        .catch((error) => {
          // Handle errors during creation or profile update
          console.error("Error adding user name:", error);
        });
    })

    // ...

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      throw { errorCode, errorMessage };
    });
};

const logInUser = async function (email, password) {
  console.log(auth);
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      throw { errorCode, errorMessage };
    });
};

const logOut = async function () {
  signOut(auth)
    .then((userCredential) => {
      // Signed up

      return userCredential;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      throw { errorCode, errorMessage };
    });
};

const updateUserPassword = async function (newPassword) {
  await updatePassword(auth.currentUser, newPassword)
    .then(() => {
      alert("password Updated !!!");
    })
    .catch(() => {
      alert("error on saving new password");
    });
};

export { createNewUser, logInUser, logOut, auth, updateUserPassword };
