import React, { useState, useEffect, createContext } from "react";
import { getAuth } from "firebase/auth"

export const UserContext = createContext({ user: null })

const UserProvider = (props) => {
    const [user, setuser] = useState(null)
    useEffect(() => {
        const auth = getAuth()
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email } = user;
                setuser({
                    displayName,
                    email
                })
                console.log("userprovider", user)
            }

        })

    }, [])
    return (
        <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
    )
}
export default UserProvider