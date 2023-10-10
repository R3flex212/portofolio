import Logo from "./Logo";
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export default function Navbar() {
    const el = useRef();
    window.addEventListener("load", () => {
        gsap.from(
            el.current,
            {
                opacity: 0,
                duration: 4,
                ease: "power3.out",
            },
            "3"
        ),
            gsap.to(
                el.current,
                {
                    opacity: 1,
                    duration: 4,
                    ease: "power3.out",
                },
                "7"
            );
    });

    return (
        <header ref={el}>
            <nav>
                <Logo />
                <ul className="nav-links-list">
                    <li>
                        <a className="nav-link" href="">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="">
                            Testimonials
                        </a>
                    </li>
                    <li>
                        <a className="nav-link" href="">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
