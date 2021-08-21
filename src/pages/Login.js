import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// refresh token
// import { refreshTokenSetup } from '../utils/refreshToken';

const clientId =
    '707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com';

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
            `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
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
        <Container><Button onClick={signIn} variant="light" size="lg">
            <span className="buttonText"><FcGoogle /> Sign in with Google</span>
        </Button>
        </Container>
    );
}

export default Login;