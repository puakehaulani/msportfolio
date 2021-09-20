import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Background from '../assets/images/bkg.jpg';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
    window.env.GOOGLE_CLIENT_ID

function Login() {

    const provider = new GoogleAuthProvider();

    const auth = getAuth();

    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(credential)
                console.log(token)
                console.log(user)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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