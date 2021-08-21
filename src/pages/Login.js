import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
    // process.env.GOOGLE_CLIENT_ID
    '1447611280-t0b9r21g88chllee8v4aqnvorah29808.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj);
        alert(
            `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
        );
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
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <Container style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray"
        }}>
            <Button onClick={signIn} variant="light" size="lg">
                <span className="buttonText"><FcGoogle /> Sign in with Google</span>
            </Button>


        </Container>


    );
}

export default Login;