import React from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';

function NavTabs() {
    const location = useLocation();

    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark ">
            <HashLink to="#top" className="navbar-brand">LOGO</HashLink>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav justify-content-end">
                    <li className="nav-item">
                        <NavHashLink
                            to="/#projects"
                            className={location.pathname === "/#projects" ? "nav-link active" : "nav-link"}
                        >
                            Projects
                        </NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink
                            to="/#about"
                            className={location.pathname === "/#about" ? "nav-link active" : "nav-link"}
                        >
                            About
                        </NavHashLink>
                    </li>
                    <li className="nav-item">
                        <NavHashLink
                            to="/#resume"
                            className={location.pathname === "/#resume" ? "nav-link active" : "nav-link"}
                        >
                            Resume
                        </NavHashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavTabs;