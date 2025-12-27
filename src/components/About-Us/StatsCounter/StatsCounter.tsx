"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./StatsCounter.module.scss";

type StatItem = {
    value: number;
    suffix?: string;
    label: string;
};

const stats: StatItem[] = [
    { value: 2021, label: "Company Founded" },
    { value: 500, suffix: "+", label: "Customers" },
    { value: 100000, suffix: "+", label: "Coins Sold" },
    { value: 9.9, suffix: "+", label: "Rating" },
];

const StatsCounter: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);   // start animation
                } else {
                    setStart(false);  // reset when leaving
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className={styles.wrapper} ref={sectionRef}>
            <h2 className={styles.heading}>Some Impressive Numbers</h2>

            <div className={styles.grid}>
                {stats.map((stat, index) => (
                    <CounterCard key={index} stat={stat} start={start} />
                ))}
            </div>
        </section>
    );
};

export default StatsCounter;

/* ---------------- Counter Card ---------------- */

const CounterCard = ({
                         stat,
                         start,
                     }: {
    stat: StatItem;
    start: boolean;
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) {
            setCount(0); // reset when section leaves viewport
            return;
        }

        let startTime: number | null = null;
        const duration = 1500;

        const animate = (time: number) => {
            if (!startTime) startTime = time;
            const progress = Math.min((time - startTime) / duration, 1);

            const currentValue =
                stat.value % 1 === 0
                    ? Math.floor(progress * stat.value)
                    : Number((progress * stat.value).toFixed(1));

            setCount(currentValue);

            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }, [start, stat.value]);

    return (
        <div className={styles.card}>
      <span className={styles.number}>
        {count}
          {stat.suffix}
      </span>
            <span className={styles.label}>{stat.label}</span>
        </div>
    );
};
