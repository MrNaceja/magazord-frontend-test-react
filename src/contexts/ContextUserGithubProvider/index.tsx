import { createContext, useContext, useEffect, useState } from "react";
import ApiGithub from "../../api/ApiGithub";
import { IUser } from "./Interfaces/user";
import { IContextUserGithubProps, IContextUserGithubValues } from "./Interfaces/context";
import { IRepository } from "./Interfaces/repository";

export const ContextUserGithub = createContext({} as IContextUserGithubValues)

/** Mudar aqui para ver outros perfis */
const USER_TO_PROFILE_INTERFACE = 'MrNaceja';

export default function ContextUserGithubProvider({ children } : IContextUserGithubProps) {
    const [user, setUser] = useState<IUser>({} as IUser)
    const [repositories, setRepositories] = useState<IRepository[]>([])

    async function fetchUser() {
        setUser(await ApiGithub(USER_TO_PROFILE_INTERFACE).fetchUser())
    }
    useEffect(() => {
        fetchUser()
    })

    return (
        <ContextUserGithub.Provider value={{
            user, 
            repositories
        }}>
            { children }
        </ContextUserGithub.Provider>
    )
}