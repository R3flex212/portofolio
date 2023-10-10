import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

export default function Hero() {
    window.addEventListener("load", () => {
        const parallax_el = document.querySelectorAll(".parallax");
        let xValue = 0,
            yValue = 0;
        window.addEventListener("mousemove", (e) => {
            xValue = e.clientX - window.innerWidth / 2;
            yValue = e.clientY - window.innerHeight / 2;

            parallax_el.forEach((el) => {
                let speedx = el.getAttribute("data-speedx");
                let speedy = el.getAttribute("data-speedy");
                el.style.transform = `translateX(calc(-50% + ${
                    -xValue * speedx
                }px)) translateY(calc(-50% + ${yValue * speedy}px))`;
            });
        });
    });

    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0,
        yValue = 0,
        rotateDegree = 0;
    window.addEventListener("mousemove", (e) => {
        xValue = e.clientX - window.innerWidth / 2;
        yValue = e.clientY - window.innerHeight / 2;

        rotateDegree = (xValue / (window.innerWidth / 2)) * 20;
        parallax_el.forEach((el) => {
            let speedx = el.getAttribute("data-speedx");
            let speedy = el.getAttribute("data-speedy");
            el.style.transform = `translateX(calc(-50% + ${
                (-xValue * speedx) / 2
            }px)) translateY(calc(-50% + ${(yValue * speedy) / 2}px))`;
        });
    });

    //GSAP
    const bg = useRef();
    const mnt1 = useRef();
    const mnt2 = useRef();
    const job = useRef();
    const name = useRef();

    useEffect(() => {
        gsap.from(bg.current, {
            top: `800px`,
            duration: 5.5,
            ease: "power3.out",
        });
        gsap.to(bg.current, {
            top: `calc(50% - 250px)`,
            duration: 5.5,
            ease: "power3.out",
        });

        gsap.from(mnt1.current, {
            top: `1300px`,
            duration: 6,
            ease: "power3.out",
        });
        gsap.to(mnt1.current, {
            top: `calc(50% + 210px)`,
            duration: 6,
            ease: "power3.out",
        });

        gsap.from(mnt2.current, {
            top: `1500px`,
            duration: 5.5,
            ease: "power3.out",
        });
        gsap.to(mnt2.current, {
            top: `calc(50% + 260px)`,
            duration: 5.5,
            ease: "power3.out",
        });

        gsap.from(
            job.current,
            {
                y: "1000px",
                duration: 4.9,
                ease: "power3.out",
            },
            "1.5"
        );
        gsap.to(
            job.current,
            {
                y: "0",
                duration: 4.9,
                ease: "power3.out",
            },
            "1.5"
        );

        gsap.from(
            name.current,
            {
                y: "-1000px",
                opacity: 0,
                duration: 3.9,
                ease: "power3.out",
            },
            "1.7"
        );
        gsap.to(
            name.current,
            {
                y: "0",
                opacity: 1,
                duration: 3.9,
                ease: "power3.out",
            },
            "1.7"
        );
    }, []);

    //TODO make mnt1/2 bigger and add speedx to them && make parallax elements not move while animation is loading
    return (
        <main>
            <div className="vigniette"></div>
            <img
                src="../Images/bg-2.png"
                alt=""
                className="parallax bg-img"
                data-speedx="0.15"
                data-speedy="0.25"
                ref={bg}
            />
            <div className="text parallax" data-speedx="0.2" data-speedy="0.19">
                <h2 ref={name}>Neamtu Matei</h2>
                <h1 ref={job}>Web Developer</h1>
            </div>
            <img
                src="../Images/Mountain1.png"
                alt=""
                className="parallax mountain1"
                data-speedx="0.0"
                data-speedy="0.2"
                ref={mnt1}
            />
            <img
                src="../Images/Mountain2.png"
                alt=""
                className="parallax mountain2"
                data-speedx="0.0"
                data-speedy="0.1"
                ref={mnt2}
            />
            <img
                src="../Images/BlackShadow.png"
                alt=""
                className="bottom-shadow"
            />
        </main>
    );
}
