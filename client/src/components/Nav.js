import React from "react";
import Sidebar from "react-sidebar";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-scroll";

const mql = window.matchMedia(`(min-width: 500px)`);

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
        return (
            <Sidebar
                children={<></>}
                sidebar={
                    <ul className="flex-column">
                        <li>
                            <Navbar.Brand href="#">
                                <img src="../images/logo.png" width="120" height="80" alt="michael scales logo" style={{ background: "radial-gradient(closest-corner at 40px 16px, rgba(0, 0, 0, .2), transparent)", borderRadius: 100 }} />
                            </Navbar.Brand>
                        </li>
                        <li className="navbar-nav">
                            <Nav>
                                <Link to="projects" className="Link">Projects</Link>
                                <Link to="about" className="Link">About</Link>
                                <Link to="resume" className="Link">Resume</Link>
                                <Link to="contact" className="Link">Contact</Link>
                            </Nav>
                        </li>
                    </ul>
                }
                open={this.state.sidebarOpen}
                docked={true}
                onSetOpen={this.onSetSidebarOpen}
                shadow={false}
                styles={{
                    sidebar: {
                        position: "fixed"
                    }
                }}
            >
            </Sidebar>
        );
    }
}

export default Navigation;