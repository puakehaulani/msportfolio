import React, { useState, useEffect, createContext } from "react";
import { getAuth } from "firebase/auth"
import { Redirect } from 'react-router';


export const UserContext = createContext({ user: null })
const auth = getAuth()

const UserProvider = (props) => {
    const [user, setuser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                const { displayName, email } = user;
                setuser({
                    displayName,
                    email
                })
                console.log("userprovider", user)
            } else {
                console.log("no user")
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
    })
}

