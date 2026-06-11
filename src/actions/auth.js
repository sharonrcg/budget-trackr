import { firebase, googleAuthProvider } from "../firebase/firebase";
import { startSetExpenses } from "./expenses";

export const login = (uid) => ({
    type: "LOGIN",
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () => ({
    type: "LOGOUT"
});

export const startLogout = () => {
    return (dispatch) => {
        if (localStorage.getItem('demoMode') === 'true') {
            localStorage.removeItem('demoMode');
            localStorage.removeItem('demoExpenses');
            dispatch(logout());
            return Promise.resolve();
        }
        return firebase.auth().signOut();
    };
};

export const startDemoLogin = () => {
    return (dispatch) => {
        localStorage.setItem('demoMode', 'true');
        dispatch(login('demo'));
        dispatch(startSetExpenses());
    };
};
