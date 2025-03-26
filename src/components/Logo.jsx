//components
import Link from "./Link";
//icons
import logo from './icons/ua_white.svg';

function Logo() {
    return (
        <Link href="/" className="logo">
            <img src={logo} alt="Unatsi Academy" />
        </Link>
    );
};

export default Logo;
