import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <nav className='navbar'>
            <div className="nav-wrapper">
                <Link to='/' className="brand-logo">React</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">REPO</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;