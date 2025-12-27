"use client";

import { useEffect, useState } from "react";
import styles from "./PhilosophySlider.module.scss";
import Image from "next/image";
import ourPhilosophy from "@/components/Images/Our-Philosophy.png";
import ourVision from "@/components/Images/Our-Vision.png";
import ourMission from "@/components/Images/Our-Mission.png";


const slides = [
    {
        title: "Our Philosophy",
        text: `At Earth Mint, excellence isn't just a standard, it's our core philosophy.
Every step we take reflects a commitment to quality. We are dedicated to
serving global markets by producing gold products that embody superior craftsmanship.`,
        icon: ourPhilosophy,
    },
    {
        title: "Our Vision",
        text: `We aim to make gold more than a symbol of wealth – by transforming it
into a source of inspiration, security, and connection for people all across the world.`,
        icon: ourVision,
    },
    {
        title: "Our Mission",
        text: `We are committed to delivering pure, certified gold products with integrity
and excellence—empowering customers and supporting artisans worldwide.`,
        icon: ourMission,
    },
];

// 👇 clone first slide
const extendedSlides = [...slides, slides[0]];

export default function PhilosophySlider() {
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Handle seamless loop
    useEffect(() => {
        if (index === slides.length) {
            setTimeout(() => {
                setAnimate(false);
                setIndex(0);
            }, 600); // must match CSS transition duration
        } else {
            setAnimate(true);
        }
    }, [index]);

    return (
        <section className={styles.container}>
            {/* DESKTOP / TABLET */}
            <div className={styles.grid}>
                {slides.map((slide, i) => (
                    <div className={styles.card} key={i}>
                        <Image src={slide.icon} alt={slide.title} width={60} height={60} />
                        <h3>{slide.title}</h3>
                        <p>{slide.text}</p>
                    </div>
                ))}
            </div>

            {/* MOBILE SLIDER */}
            <div className={styles.mobileSlider}>
                <div
                    className={`${styles.sliderTrack} ${
                        !animate ? styles.noTransition : ""
                    }`}
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {extendedSlides.map((slide, i) => (
                        <div className={styles.slide} key={i}>
                            <Image
                                src={slide.icon}
                                alt={slide.title}
                                width={60}
                                height={60}
                                className={styles.icon}
                            />
                            <h3>{slide.title}</h3>
                            <p>{slide.text}</p>
                        </div>
                    ))}
                </div>

                {/* PAGINATION */}
                <div className={styles.pagination}>
  <span
      onClick={() =>
          setIndex((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
          )
      }
  >
    &lt;
  </span>

                    <span className={styles.count}>
    {(index % slides.length) + 1} / {slides.length}
  </span>

                    <span onClick={() => setIndex((prev) => prev + 1)}>
    &gt;
  </span>
                </div>

            </div>
        </section>
    );
}
