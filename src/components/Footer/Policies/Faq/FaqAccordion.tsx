"use client";

import React, { useState } from "react";
import styles from "./FaqAccordion.module.scss";

export interface FaqItem {
    question: string;
    answer: React.ReactNode;
}

interface FaqAccordionProps {
    items: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.faq}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`${styles.item} ${isOpen ? styles.open : ""}`}
                    >
                        <button
                            className={styles.question}
                            onClick={() => toggle(index)}
                        >
                            <span>{item.question}</span>
                            <span className={styles.icon}>
                                {isOpen ? "−" : "+"}
                            </span>
                        </button>

                        {isOpen && (
                            <div className={styles.answer}>
                                {item.answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default FaqAccordion;
