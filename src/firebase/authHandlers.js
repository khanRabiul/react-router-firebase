import {toast} from "react-toastify";

export const handleSignUp = async (signupFunction, providerName) => {
    try {
        const user = await signupFunction();
        toast.success(`Welcome ${user.displayName || providerName} user!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        })
    } catch (error) {
        toast.error(error.message || `${providerName} sign-up failed`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        })
    }
}