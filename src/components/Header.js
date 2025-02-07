//components
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

function Header() {
    const [showNav, setShowNav] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setShowNav(window.innerWidth > 412);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <Logo />
            {showNav && <Navigation />}
        </header>
    );
}

export default Header;