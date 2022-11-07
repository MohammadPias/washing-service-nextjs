import { createContext, useReducer } from "react";
import Cookies from 'js-cookie';
import { decodeToken } from "./helper";

export const Store = createContext();

const initialState = {
    darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
    user: Cookies.get("user") ? decodeToken() : null,
    // user: null,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'DARK_MODE_ON':
            return { ...state, darkMode: true };
        case 'DARK_MODE_OFF':
            return { ...state, darkMode: false };
        case "SIGN_IN":
            // console.log(state, action.payload)
            return { ...state, user: action.payload };
        case "SIGN_OUT":
            return { ...state, user: null };

        default:
            return state;
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    // const value = { state, dispatch };
    // console.log(state, "from store")
    return (
        <Store.Provider value={{ state, dispatch }}>
            {children}
        </Store.Provider>
    )

}

