import React, { useState, useEffect, createContext, useMemo } from "react";
import { getAuth } from "firebase/auth"

export const UserContext = createContext({
    user: '',
    setUser: () => { }
})

const auth = getAuth()

const UserProvider = (props) => {
    const [user, setUser] = useState()
    console.log("user", user)
    // const value = useMemo(
    //     () => ({ user, setUser }),
    //     [user]
    // );
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email } = user;
                setUser({
                    displayName,
                    email
                })
                console.log("userprovider", user)
            } else {
                console.log("no userprovider")
            }
        })

    }, [])
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}
export default UserProvider


export const logOut = () => {
    auth.signOut().then(() => {
        console.log('logged out')
    }).catch((error) => {
        console.log(error.message)
    }
    )
}

