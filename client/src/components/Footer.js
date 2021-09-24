import React from "react";
import { FaGithubAlt, FaLinkedinIn, FaInstagram, FaUserAstronaut } from 'react-icons/fa'

function Footer() {
    return (
        <footer id="contact" className="footer mt-auto pb-2 ">
            <div className="text-center">

                <a className="px-4" href="https://github.com/michaelscales88" target="_blank" rel="noreferrer"><FaGithubAlt size="2em" /></a>
                <a className="px-4" href="https://www.linkedin.com/in/michael-scales/" target="_blank" rel="noreferrer"><FaLinkedinIn size="2em" /></a>
                <a className="px-4" href="https://www.instagram.com/ladyaliceandmike/" target="_blank" rel="noreferrer"><FaInstagram size="2em" /></a>
                <a className="px-4" href="/login" target="_self" rel="noreferrer"><FaUserAstronaut size="2em" /></a>
                {/* above is the link to the admin login */}
            </div>
        </footer>
    );
}

export default Footer;