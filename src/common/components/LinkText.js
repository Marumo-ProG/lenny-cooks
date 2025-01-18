// Next Components
import Link from "next/link";

const LinkText = ({ href, children }) => {
    return (
        <Link
            href={href}
            style={{
                textDecoration: "none",
                color: "inherit",
            }}
        >
            {children}
        </Link>
    );
};

export default LinkText;
