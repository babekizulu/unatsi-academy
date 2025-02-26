import { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Topbar from "./Topbar";

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
        <>
            {/* Topbar on top */}
            <header className="headertop">
                <Topbar />
            </header>

            {/* Logo and navigation */}
            <header className="header">
                <Logo />
                {showNav && <Navigation />}
            </header>
        </>
    );
}

export default Header;
