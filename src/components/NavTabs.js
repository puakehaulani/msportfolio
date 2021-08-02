import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <ul className="nav justify-content-end">
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
    );
}

export default NavTabs;