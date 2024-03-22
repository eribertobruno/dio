import { createContext, useState } from "react";
import { IAuthContext, IAuthContextProviderProps, ILoginData } from "./types";
import { IUsers } from "../types/user";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({children}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUsers>({} as IUsers);

    const navigate = useNavigate();

    const handleLogin = async(loginDate: ILoginData) => {
        try {
            const {data } = await api.get(
                `users?email=${loginDate.email}&password=${loginDate.password}
                `);
            if (data.length === 1){
                setUser(data[0]);
                navigate('/feed');
            } else {
                alert('Email ou senha inválidos')
            }
        } catch{
            alert('Houve um erro, tente novamente.');
        }
    }

    const handleSignOut = () => {
        setUser({} as IUsers)
    }
    
    return(
        <AuthContext.Provider value={{user, handleLogin, handleSignOut}}>
            {children}
        </AuthContext.Provider>
    )
}
