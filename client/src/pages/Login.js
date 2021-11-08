import React, { useState, useEffect, useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Background from '../assets/images/bkg.jpg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Redirect } from 'react-router-dom';
import { query, collection, getDocs, where, setDoc, doc } from 'firebase/firestore';


import { UserContext } from '../providers/UserProvider';
import { db } from '../base';

// const clientId =
//     window.env.GOOGLE_CLIENT_ID

function Login() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [registered, setRegistered] = useState(false)

    const user = useContext(UserContext);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;

            // get all registered users
            const qUsers = query(collection(db, "users"))
            const querySnapshotUsers = await getDocs(qUsers)

            // see if any registered users match the user logging in
            const qExists = query(collection(db, "users"), where("uid", "==", user.uid))
            const querySnapshotExists = await getDocs(qExists);

            // first, if querySnapshotExists docs are length of 1, the user is registered. log them in!
            if (querySnapshotExists.docs.length === 1) {
                console.log("user exists!")
                setRegistered(true)
                // Login here
            }
            // then, if there are less than 2 users, create a user, then log them in.
            else if (querySnapshotUsers.docs.length < 2) {
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });
                console.log("created user")
                setRegistered(true)
                // Login here
            }
            // finally, if there are 2+ users (and the qse length is 0), the user isnt registered and cannot register. kick them out.
            else {
                console.log("kick them out")
                // Todo: redirect user to main page with note about admin access only
                alert("Access Denied")
            }

        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleSignIn = () => {
        signInWithGoogle()
        // if (user) {
        //     return (
        //         // <Redirect to="/dashboard" />
        //         setIsLoggedIn(true)
        //     )
        // }

    }

    // if (user) {
    //     return (
    //         // <Redirect to="/dashboard" />
    //         // setIsLoggedIn(true)
    //     )
    // }

    return (

        <div>
            {user !== undefined && registered ?
                <Redirect to="/dashboard" />
                :
                <div style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${Background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

                    <Button onClick={handleSignIn} variant="light" size="lg">
                        <span className="buttonText"><FcGoogle /> Login to Admin Dashboard</span>
                    </Button>

                </div>
            }

        </div>

    );

}

export default Login;