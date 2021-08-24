import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Background from '../assets/images/bkg.jpg';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
    window.env.GOOGLE_CLIENT_ID

function Login() {
    const onSuccess = async googleData => {
        // console.log('Login Success: currentUser:', res.profileObj);

        // alert(
        //     `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        // );

        const res = await fetch("/api/auth/google", {
            method: "POST",
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        console.log("data", data)
        // refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
            `Access denied. Failed to login.`
        );
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        // accessType: 'offline',
        responseType: 'code',
        // prompt: 'consent',
    });

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

            <Button onClick={signIn} variant="light" size="lg">
                <span className="buttonText"><FcGoogle /> Login to Admin Dashboard</span>
            </Button>

        </div>


    );
}

export default Login;