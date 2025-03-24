import { IoArrowBack } from "react-icons/io5";
import Link from './Link';

function BackButton({href, prevPage}) {
    return (
        <Link href={href} className="back-button">
            <IoArrowBack />
            Back to {prevPage}
        </Link>
    );
}

export default BackButton; 