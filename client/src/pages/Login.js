import React, { useEffect, useContext, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Background from '../assets/images/bkg.jpg';
import { getAuth, signInWithPopup, signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { Redirect } from 'react-router-dom';
import { query, collection, getDocs, where, setDoc, doc, deleteDoc, onSnapshot } from 'firebase/firestore';


import { UserContext } from '../providers/UserProvider';
import { db } from '../base';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
    window.env.GOOGLE_CLIENT_ID

function Login() {
    const user = useContext(UserContext);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, googleProvider);
            const user = res.user;

            const qUsers = query(collection(db, "users"))
            const querySnapshotUsers = await getDocs(qUsers)

            const qExists = query(collection(db, "users"), where("uid", "==", user.uid))
            const querySnapshotExists = await getDocs(qExists);

            // check to see if there are more than 2 users which is the max. if there are:
            // verify if the user logging in is one of those users
            // if the user loggin in is not one of those users, kick their ass out
            // if the user loggin in is one of those users, allow them to login
            if (querySnapshotUsers.docs.length > 2) {
                console.log("no")

            }
            // if there are less than 2 users, we can still create users
            // check to see if the user logging in is one of the users in the db
            // if not, create user
            // if yes, allow log in
            else if (querySnapshotExists.docs.length === 0) {
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });
            }
        } catch (err) {
            console.error(err);
            alert(err.message);
        }
    };

    const handleSignIn = () => {
        // signInWithRedirect(auth, provider)
        signInWithGoogle()
        // getRedirectResult(auth)
        //     .then((result) => {
        //         // This gives you a Google Access Token. You can use it to access Google APIs.
        //         const credential = GoogleAuthProvider.credentialFromResult(result);
        //         const token = credential.accessToken;

        //         // The signed-in user info.
        //         const user = result.user;
        //         console.log(user)
        //     }).catch((error) => {
        //         // Handle Errors here.
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         // The email of the user's account used.
        //         const email = error.email;
        //         // The AuthCredential type that was used.
        //         const credential = GoogleAuthProvider.credentialFromError(error);
        //         // ...
        //     });


    }


    // const onSuccess = async googleData => {
    //     // console.log('Login Success: currentUser:', res.profileObj);

    //     // alert(
    //     //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    //     // );

    //     const res = await fetch("/api/auth/google", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             token: googleData.tokenId
    //         }),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     const data = await res.json()
    //     console.log("data", data)
    //     // refreshTokenSetup(res);
    // };

    // const onFailure = (res) => {
    //     console.log('Login failed: res:', res);
    //     alert(
    //         `Access denied. Failed to login.`
    //     );
    // };

    // const { signIn } = useGoogleLogin({
    //     onSuccess,
    //     onFailure,
    //     clientId,
    //     isSignedIn: true,
    //     // accessType: 'offline',
    //     responseType: 'code',
    //     // prompt: 'consent',
    // });
    if (user) {
        return (
            <Redirect to="/dashboard" />
        )
    }
    return (
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


    );

}

export default Login;