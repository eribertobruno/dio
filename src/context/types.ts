import React from "react";
import { IUsers } from "../types/user";

export interface IAuthContext {
    user: IUsers
    handleLogin: (loginDate: ILoginData) => Promise<void>;
    handleSignOut: () => void;
}

export interface IAuthContextProviderProps {
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}