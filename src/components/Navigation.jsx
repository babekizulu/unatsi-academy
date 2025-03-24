//components
import Link from './Link';
import { useState } from 'react';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavItems = ({ onItemClick }) => (
        <ul>
            <li>
                <Link href="/" onClick={onItemClick}>Home</Link>
            </li>
            <li>
                <Link href="/about-us" onClick={onItemClick}>About</Link>
            </li>
            <li>
                <Link href="/academics" onClick={onItemClick}>Academics</Link>
            </li>
            <li>
                <Link href="/admissions" onClick={onItemClick}>Admissions</Link>
            </li>
            {/* <li>
                <Link href="/news-and-events" onClick={onItemClick}>News</Link>    
            </li> */}
            <li>
                <Link href="/gallery" onClick={onItemClick}>Gallery</Link>
            </li>
            {/* <li>
                <Link href="/stem-initiatives" onClick={onItemClick}>STEM</Link>
            </li>
            <li>
                <Link href="/parents-corner" onClick={onItemClick}>Parents</Link>
            </li> */}
            <li>
                <Link href="/contact-us" onClick={onItemClick}>Contact</Link>
            </li>
            {/* <li>
                <Link href="/partnerships" onClick={onItemClick}>Partnerships</Link>
            </li>
            <li>
                <Link href="/student-portal" onClick={onItemClick}>Student Portal</Link>
            </li>
            <li>
                <Link href="/staff-portal" onClick={onItemClick}>Staff Portal</Link>
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
