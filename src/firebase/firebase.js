/* eslint-disable no-useless-catch */
import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/web-extension";

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

// Login with email and password
const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword (auth, email, password);
        return response;
    } catch (error) {
        throw error;
    }
};

// Login with google
const loginWithGoogle = async () => {
    try {
        const response = await signInWithPopup (auth, GoogleAuthProvider);
        return response.user;
    } catch (error) {
        throw error;
    }
};

// Login with github
const loginWithGithub = async () => {
    try{
        const response = await signInWithPopup(auth, GithubAuthProvider);
        return response.user;
    } catch (error) {
        throw error;
    }
};

// Login with Facebook
const loginWihtFacebook = async () => {
    try {
        const res = await signInWithPopup (auth, FacebookAuthProvider);
        const user = res.user;
        return user;
    } catch (error) {
        throw error;
    }
};

// Reset Password
const sendRestPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
    } catch (error) {
        throw error;
    }
};

// Export all functions
export {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    loginWithGoogle,
    loginWithGithub,
    loginWihtFacebook,
    sendPasswordResetEmail
}
