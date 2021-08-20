import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer id="contact" className="footer mt-auto pb-2 ">
            <div className="text-center">

                <a className="px-4" href="https://github.com/michaelscales88" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithubAlt} size="2x" /></a>
                <a className="px-4" href="https://www.linkedin.com/in/michael-scales/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
                <a className="px-4" href="https://www.instagram.com/ladyaliceandmike/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a className="px-4" href="http://localhost:3000/login" target="_self" rel="noreferrer"><FontAwesomeIcon icon={faUserAstronaut} size="2x" /></a>
                {/* above is the link to the admin login */}
            </div>
        </footer>
    );
}

export default Footer;