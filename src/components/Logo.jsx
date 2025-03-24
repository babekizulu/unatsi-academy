//components
import Link from "./Link";
//icons
import logo from './icons/UNATSI_ACADEMY_59X59.svg';

function Logo() {
    return (
        <Link href="/" className="logo">
            <img src={logo} alt="Unatsi Academy" />
        </Link>
    );
};

export default Logo;
