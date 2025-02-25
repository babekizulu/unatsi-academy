import Link from "./Link";

function Logo() {
    return (
        <Link
            href="/"
            className="logo"
            style={{
                display: "flex",
                alignItems: "center", // Aligns image and text vertically
                flexDirection: "row-reverse", // Reverses the order (image on the right)
                textDecoration: "none",
            }}
        >
            <img
                src="https://i.ibb.co/Ds8QdbV/324927416-1797086837334568-8246797397037440777-n.jpg"
                alt="UNATSI ACADEMY Logo"
                style={{
                    width: "100px",
                    height: "auto",
                }}
            />
            <p
                style={{
                    margin: "0 10px 0 0", // Adds spacing to the right of the text
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    color: "white",
                }}
            >
                UNATSI ACADEMY PRIVATE<br></br> SCHOOL
            </p>
        </Link>
    );
}

export default Logo;
