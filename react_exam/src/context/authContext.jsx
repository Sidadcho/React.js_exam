import { createContext, useContext, useEffect, useReducer } from "react";
import AuthReducer from "./authReducer";

const INITAL_STATE = {
    currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

export const AuthContext = createContext(INITAL_STATE);

export const AuthContextProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AuthReducer, INITAL_STATE);
    useEffect(()=>{
        localStorage.setItem( "user", JSON.stringify(state.currentUser))

    }, [state.currentUser])
    return(
        <AuthContext.Provider value={{currentUser: state.currentUser, dispatch}}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}