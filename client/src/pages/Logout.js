import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import Button from 'react-bootstrap/Button';
import Background from '../assets/images/bkg.jpg';


const clientId =
    window.env.GOOGLE_CLIENT_ID


function Logout() {
    const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
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

            <Button onClick={signOut} variant="light" size="lg">
                <span className="buttonText"><FcGoogle /> Logout</span>
            </Button>
        </div>
    );
}

export default Logout;