import React from "react";
import { Link } from "react-router-dom";
import "../index.css"


const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div>HOME</div>
            </Link>
            <Link to="/artist">
                <div>ARTISTS</div>
            </Link>
            <Link to="/piece">
                <div>PIECES</div>
            </Link>
        </div>
    );
};

export default Nav;