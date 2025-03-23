import { useEffect, useState } from "react";

function Navigation() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChange);
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "#about" },
        { name: "Admissions", href: "#admissions" },
        { name: "Contact", href: "#contact" }
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navigation">
            {/* Hamburger Icon */}
            <div className="hamburger-menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
                {navItems.map(item => (
                    <li
                        key={item.href}
                        className={`nav-item ${currentPath === item.href ? "highlighted" : ""}`}
                    >
                        <a href={item.href} onClick={() => setIsMenuOpen(false)}>
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;
