//components
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="header flex items-center justify-between px-4 md:px-6 py-4">
            <div className="flex items-center">
                <Logo />
            </div>
            <Navigation />
        </header>
    );
};

export default Header;