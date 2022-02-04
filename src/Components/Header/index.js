import React from "react";
import ScrollSpy from "../ScrollSpy";
import "./style.css";



function Header() {
    return (
        <header className="fixed-top">
            <nav id="nav-main" className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#"></a>
                <ul className="nav nav-pills">
                    <ScrollSpy className="nav nav-pills" offset={75} anchorOffset={65} scrollSpeed={65}>
                    <li className="nav-item">
                        <a className="nav-link" href="#About" ref={React.createRef()}>
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Resume" ref={React.createRef()}>
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Portfolio" ref={React.createRef()}>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact" ref={React.createRef()}>
                            Contact
                        </a>
                    </li>  
                    </ScrollSpy>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
/*   <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link" href="#About" ref={React.createRef()}>
                            About Me
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Resume" ref={React.createRef()}>
                            Resume
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Portfolio" ref={React.createRef()}>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#Contact" ref={React.createRef()}>
                            Contact
                        </a>
                    </li>
                </ul> 


       <ScrollSpy offsetTop={120}>
                    <a
                        className="nav-link"
                        href="#About"
                        ref={React.createRef()}
                    >
                        About Me
                    </a>

                    <a
                        className="nav-link"
                        href="#Resume"
                        ref={React.createRef()}
                    >
                        Resume
                    </a>

                    <a
                        className="nav-link"
                        href="#Portfolio"
                        ref={React.createRef()}
                    >
                        Portfolio
                    </a>

                    <a
                        className="nav-link"
                        href="#Contact"
                        ref={React.createRef()}
                    >
                        Contact
                    </a>
                </ScrollSpy>



                  <NavButton
                            link="#About"
                            text="About Me"
                            ref={React.createRef()}
                        />
                        <NavButton
                            link="#Resume"
                            text="Resume"
                            ref={React.createRef()}
                        />
                        <NavButton
                            link="#Portfolio"
                            text="Portfolio"
                            ref={React.createRef()}
                        />
                        <NavButton
                            link="#Contact"
                            text="Contact"
                            ref={React.createRef()}
                        />
const NavButton = React.forwardRef(({ href, text }, ref) => (
    <a className="nav-link" href={href} ref={ref}>
        {text}
    </a>
));

                */
