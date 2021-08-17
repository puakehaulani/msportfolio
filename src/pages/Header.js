import React from 'react';
import Container from "react-bootstrap/Container";
export default function Header() {
    return (
        <Container>
            <div id="header" className="d-flex justify-content-around">
                <div className="entrance neonText">
                    Hey, I'm Michael.<br />
                    I like dogs.
                </div>
                <img src="./images/self.png" alt="self portrait" height="300rem" width="300rem" />
            </div>

        </Container>
    )
}