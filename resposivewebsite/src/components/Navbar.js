import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar" >
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i className="fas fa-book-reader"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu actiive' : 'nav-menu'}>
                        <li>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li> 
                        <li>
                            <Link to="/services" className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>   
                        <li>
                            <Link to="/products" className='nav-links' onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-up" className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar











