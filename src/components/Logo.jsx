export default function Logo() {
    const logoStyles = {
        width: "90px",
        height: "90px",
    };

    return (
        <a style={logoStyles} href="#">
            <img
                style={logoStyles}
                src="../Images/logo-transparent.png"
                alt="logo"
            />
        </a>
    );
}
