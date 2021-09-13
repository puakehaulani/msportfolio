// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Parallax } from 'react-parallax';
import { Element } from 'react-scroll';

import Navigation from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Footer from "../components/Footer";
import Background from "../assets/images/bkg.jpg";
import Parallax3 from "../assets/images/parallax3.jpg";

const Home = () => {
    return (
        <>
            <Navigation />
            <Parallax
                bgImage={Background}
                strength={550}>
                <Element name="header" className="Element"><Header /></Element>
            </Parallax>

            <Parallax
                bgImage={Parallax3}
                strength={550}>
                <Element name="about" className="Element"><About /></Element>
                <Element name="projects" className="Element"><Projects /></Element>
                <Element name="resume" className="Element"><Resume /></Element>
            </Parallax>
            <Element name="contact"><Footer /></Element>
        </>
    )
}

export default Home