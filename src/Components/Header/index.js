import React from "react";

import "./style.css";

function Header() {
    return (
        <header>
            <nav id="nav-main" className="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    
                </a>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#About">
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Resume">
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Portfolio">
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
