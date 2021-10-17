import { createContext } from "react";


export const AuthConext = createContext( { 
    isLoggedIn: false, 
    login: () => {}, 
    logout: () => {} });
