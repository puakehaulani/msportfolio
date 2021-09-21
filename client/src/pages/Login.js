import React, { useEffect, useContext, useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Background from '../assets/images/bkg.jpg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Redirect } from 'react-router-dom';

import { UserContext } from '../providers/UserProvider';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
    window.env.GOOGLE_CLIENT_ID

function Login() {
    const user = useContext(UserContext);

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((res) => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // // The signed-in user info.
                // const user = result.user;
                // // console.log(user)
                // // ...
                console.log("login", res.user)
            }).catch((error) => {
                console.log(error.message)
            });

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