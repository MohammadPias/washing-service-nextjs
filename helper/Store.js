import { createContext, useReducer } from "react";
import Cookies from 'js-cookie'

export const Store = createContext();

const initialState = {
    theme: Cookies.get("theme") ? Cookies.get("theme") : "light",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "DARK_MODE_ON":
            return { ...state, theme: "dark" };
        case "DARK_MODE_OFF":
            return { ...state, theme: "light" };
        default: return state;
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    let value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            {children}
        </Store.Provider>
    )

}

