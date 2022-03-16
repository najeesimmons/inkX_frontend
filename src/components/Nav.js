import React from "react";
import { Link } from "react-router-dom";
import "../nav.css";
// import { Navbar, Nav, Container } from 'react-bootstrap';

const Nav = (props) => {
    return (
        <div className="nav">
            <img src="https://media.istockphoto.com/vectors/crossed-tattoo-machines-isolated-on-white-background-design-element-vector-id934818866?k=20&m=934818866&s=612x612&w=0&h=FlUG1lKnzyZTqnvWQypV9K_0b1RmBzVkpkHvAdOU-eQ=" className="inkX-logo" alt="inkX-logo" />
            <Link to="/">
                <div className="link">HOME</div>
            </Link>
            <Link to="/artist">
                <div className="link">ARTISTS</div>
            </Link>
            <Link to="/piece">
                <div className="link">PIECES</div>
            </Link>
        </div>
    );
};

export default Nav;