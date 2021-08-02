import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';

function NavTabs() {
    const location = useLocation();

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <ul className="flex-column">
                <HashLink to="#" >
                    <img src="../images/logo.png" width="120" height="80" alt="michael scales logo" />
                </HashLink>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
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
                        <li className="nav-item">
                            <NavHashLink
                                to="/#contact"
                                className={location.pathname === "/#contact" ? "nav-link active" : "nav-link"}
                            >
                                Contact
                            </NavHashLink>
                        </li>
                    </ul>
                </div>
            </ul>
        </nav >
    );
}

export default NavTabs;