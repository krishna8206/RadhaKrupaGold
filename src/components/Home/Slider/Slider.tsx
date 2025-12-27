"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Slider.module.scss";

interface SliderProps {
    children: React.ReactNode[];
    autoplay?: boolean;
    interval?: number;
}

export default function Slider({
                                   children,
                                   autoplay = true,
                                   interval = 5000,
                               }: SliderProps) {
    const slides = [...children, children[0]]; // clone first slide
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (!autoplay) return;

        timeoutRef.current = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, interval);

        return () => {
            if (timeoutRef.current) clearInterval(timeoutRef.current);
        };
    }, [autoplay, interval]);

    // Handle seamless loop
    useEffect(() => {
        if (index === slides.length - 1) {
            setTimeout(() => {
                setTransition(false);
                setIndex(0);
            }, 500);
        } else {
            setTransition(true);
        }
    }, [index, slides.length]);

    return (
        <div className={styles.slider}>
            <div
                className={styles.track}
                style={{
                    transform: `translateX(-${index * 100}%)`,
                    transition: transition ? "transform 0.5s ease-in-out" : "none",
                }}
            >
                {slides.map((slide, i) => (
                    <div className={styles.slide} key={i}>
                        {slide}
                    </div>
                ))}
            </div>
        </div>
    );
}
