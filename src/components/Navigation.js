import { useState, useEffect } from "react";

function Navigation() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

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
        // { name: "Academics", href: "#academics" },
        // { name: "School Life", href: "#school-life" },
        // { name: "Parents and Community", href: "#parents-and-community" },
        // { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav className="navigation">
            <ul>
                {navItems.map(item => (
                    <li
                        key={item.href}
                        className={`nav-item ${currentPath === item.href ? "highlighted" : ""}`}
                    >
                        <a href={item.href}>{item.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navigation;