/* eslint-disable no-useless-catch */
import { createUserWithEmailAndPassword, sendEmailVerification, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";

const registerWithEmailAndPassword = async (name, email, password) => {
try{
const response = await createUserWithEmailAndPassword(auth, email, password);
const user = response.user; // Fetches the user object from the Firebase

// ইউজারের নাম আপডেট এবং ইমেইল ভেরিফিকেশন পাঠানো
await updateProfile(user, {displayName: name});
await sendEmailVerification(user);
await signOut(auth); // ইউজারকে লগআউট করা
} catch (error) {
    throw error;
}
};

export {registerWithEmailAndPassword}
