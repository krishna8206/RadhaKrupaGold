"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./TestimonialSlider.module.scss";

interface Testimonial {
    id: number;
    title: string;
    quote: string;
    author: string;
    location: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        title: "Perfect for my daughter’s wedding.",
        quote: "We gave EarthMint gold coins as return gifts at my daughter’s wedding, and everyone loved them. The designs were elegant, and the quality was amazing. It really added a special touch.",
        author: "Meena Agarwal",
        location: "Mumbai",
        rating: 5
    },
    {
        id: 2,
        title: "Felt safe buying gold online.",
        quote: "It was my first time buying gold online, but EarthMint made it easy. The coin came with proper certification and exact weight. I really liked that they offer a 100% buyback guarantee.",
        author: "Priya Deshpande",
        location: "Pune",
        rating: 5
    },
    {
        id: 3,
        title: "Exactly what I was looking for.",
        quote: "I wanted a unique and premium gift for my parents’ anniversary. The gold frame from EarthMint was just perfect - meaningful, and beautifully crafted.",
        author: "Sonal Verma",
        location: "Jaipur",
        rating: 5
    },
    {
        id: 4,
        title: "Felt proud gifting something so meaningful.",
        quote: "I ordered a gold coin from Earth Mint for my father’s 60th birthday. The look on his face when he opened it was priceless. It wasn’t just a gift—it felt like a memory made in gold.",
        author: "Neha Rathi",
        location: "Hyderabad",
        rating: 5
    }
];

// Split into slides of 2
const slides = [
    testimonials.slice(0, 2),
    testimonials.slice(2, 4)
];

// Clone first slide for infinite loop
const infiniteSlides = [...slides, slides[0]];

const TestimonialSlider: React.FC = () => {
    const [index, setIndex] = useState(0);
    const [transition, setTransition] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setIndex((prev) => prev + 1);
        setTransition(true);
    };

    const prevSlide = () => {
        if (index === 0) return;
        setIndex((prev) => prev - 1);
        setTransition(true);
    };

    // Auto slide
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    // Seamless reset after cloned slide
    useEffect(() => {
        if (index === slides.length) {
            timeoutRef.current = setTimeout(() => {
                setTransition(false);
                setIndex(0);
            }, 500);
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [index]);

    // Page number logic (IMPORTANT)
    const displayIndex = index === slides.length ? 1 : index + 1;

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2>Testimonials</h2>
                <p>Trusted by Families, Celebrated Across Occasions</p>
            </div>

            <div className={styles.sliderWrapper}>
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: transition ? "transform 0.5s ease" : "none"
                    }}
                >
                    {infiniteSlides.map((group, slideIndex) => (
                        <div className={styles.slide} key={slideIndex}>
                            {group.map((item) => (
                                <div key={item.id} className={styles.card}>
                                    <h3>{item.title}</h3>
                                    <p className={styles.quote}>{item.quote}</p>
                                    <div className={styles.cardFooter}>
                                        <div className={styles.stars}>
                                            {"★".repeat(item.rating)}
                                        </div>
                                        <span className={styles.author}>
                      {item.author}, {item.location}
                    </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTROLS WITH PAGE NUMBER */}
            <div className={styles.controls}>
                <button onClick={prevSlide}>&lt;</button>

                <span className={styles.pageNumber}>
          {displayIndex} / {slides.length}
        </span>

                <button onClick={nextSlide}>&gt;</button>
            </div>
        </section>
    );
};

export default TestimonialSlider;
