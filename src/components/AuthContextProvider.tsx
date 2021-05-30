import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([false, ()=>{}]);
export const UserContext = React.createContext<[User | undefined, React.Dispatch<React.SetStateAction<User | undefined>>]>([undefined, () => {}]);


type User = {
    userId: string;
} 

export const AuthContextProvider:React.FC<{}> = (props) => {
    const [auth, setAuth] = useState<boolean>(false);
    const [user, setUser] = useState<User|undefined>();

    useEffect(() => {
        console.log(user);
        if(user?.userId){
            console.log("a");
            setAuth(true);
        }else{
            setAuth(false);
        }
    },[user]);

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            <UserContext.Provider value={[user, setUser]}>
            {props.children}
            </UserContext.Provider>
        </AuthContext.Provider>
    )
}