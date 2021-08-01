import React from 'react';
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="row d-flex justify-content-center entrance">
            <Link
                to="/portfolio-react/about"
                className="text-center"
            >
                aloha e honua
                <br />
                hello world
            </Link>
        </div>
    )
}