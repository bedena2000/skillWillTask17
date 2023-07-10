import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return <header className="header">
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/facts">Facts</Link>
        </nav>
    </header>
};

export default Header;