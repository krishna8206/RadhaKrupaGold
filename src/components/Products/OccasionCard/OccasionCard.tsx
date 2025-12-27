"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./OccasionCard.module.scss";
import { OccasionCardData } from "./mock";

export default function OccasionCard({ data }: { data: OccasionCardData }) {
    return (
        <Link href={data.linkUrl} className={styles.card}>
            <div className={styles.wrapper}>
                {/* Background Image */}
                <div className={styles.imageContainer}>
                    <Image
                        src={data.imageUrl}
                        alt={data.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className={styles.image}
                        priority={data.id === 1}
                    />
                    {/* Subtle vignette for text readability */}
                    <div className={styles.scrim} />
                </div>

                {/* Content Overlay */}
                <div className={styles.content}>
                    <span className={styles.category}>Exclusive</span>
                    <h3 className={styles.title}>{data.title}</h3>
                    <div className={styles.cta}>
                        <span>Explore Collection</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}