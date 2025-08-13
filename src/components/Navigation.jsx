//components
import Link from './Link';
import NavLink from './NavLink';
import { useState } from 'react';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavItems = ({ onItemClick }) => (
        <ul>
            <li>
                <NavLink href="/" onNavigate={onItemClick}>Home</NavLink>
            </li>
            <li>
                <NavLink href="/about-us" onNavigate={onItemClick}>About</NavLink>
            </li>
            <li>
                <NavLink href="/academics" onNavigate={onItemClick}>Academics</NavLink>
            </li>
            <li>
                <NavLink href="/admissions" onNavigate={onItemClick}>Admissions</NavLink>
            </li>
            {/* <li>
                <NavLink href="/news-and-events" onNavigate={onItemClick}>News</NavLink>    
            </li> */}
            <li>
                <NavLink href="/gallery" onNavigate={onItemClick}>Gallery</NavLink>
            </li>
            {/* <li>
                <NavLink href="/stem-initiatives" onNavigate={onItemClick}>STEM</NavLink>
            </li>
            <li>
                <NavLink href="/parents-corner" onNavigate={onItemClick}>Parents</NavLink>
            </li> */}
            <li>
                <NavLink href="/contact-us" onNavigate={onItemClick}>Contact</NavLink>
            </li>
            {/* <li>
                <NavLink href="/partnerships" onNavigate={onItemClick}>Partnerships</NavLink>
            </li>*/}
            {/* <li>
                <NavLink href="/student-portal" onNavigate={onItemClick}>Student Portal</NavLink>
            </li> */}
            {/* <li>
                <NavLink href="/staff-portal" onNavigate={onItemClick}>Staff Portal</NavLink>
            </li> */}
        </ul>
    );

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="navigation">
                <NavItems onItemClick={() => {}} />
            </nav>

            {/* Mobile Navigation */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                <div className="close-button" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
                <NavItems onItemClick={toggleMenu} />
            </div>
        </>
    );
}

export default Navigation;
