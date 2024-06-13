import React, { createContext, useReducer } from "react";

// GlobalContext ni yaratish
export const GlobalContext = createContext();

const changeState = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOG_IN":
            return { ...state, user: payload };
        case "LOG_OUT":
            return { ...state, user: null };
        default:
            return state;
    }
};

// GlobalContextProvider komponenti
function GlobalContextProvider({ children }) {

    const [state, dispatch] = useReducer(changeState, {
        user: null,
        product: [],
        total: 10, 
    });

    return (
        <GlobalContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;
