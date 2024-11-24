import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user
    await updateProfile(user, {displayName: name})
    await sendEmailVerification(user)
    await signOut(auth)
  } catch (error) {
    console.error("Error registerin user: ", error)
  }
};

export {registerWithEmailAndPassword}
