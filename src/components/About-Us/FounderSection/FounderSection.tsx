import React from "react";
import Image from "next/image";
import styles from "./FounderSection.module.scss";
import founderImage from "@/components/Images/founder-image.jpg";


const FounderSection: React.FC = () => {
    return (
        <section className={styles.wrapper}>
            {/* Image Section */}
            <div className={styles.imageWrapper}>
                <div className={styles.imageFrame}>
                    <Image
                        src={founderImage} // place image in public/founder.png
                        alt="Chirag Mehta - Founder, Radhe Krupa"
                        fill
                        priority
                    />
                </div>
            </div>

            {/* Text Section */}
            <div className={styles.textSection}>
                <h2>Mr. Gaurang Shah</h2>
                <span className={styles.designation}>Founder & CEO, Radhe Krupa</span>

                <p>
                    Mr. Gaurang Shah is a seasoned entrepreneur and an accomplished leader in the jewelry industry, bringing with him over seven years of extensive experience in the trading and manufacturing of premium gold jewelry and gold coins. His professional journey began at Shree Nakoda Ji Suvaran, where he laid a strong foundation built on craftsmanship, quality, and trust.
                </p>

                <p>
                    As the Founder of Shree Nakoda Ji Suvaran, Mr. Shah successfully established the brand as a respected name in the gold industry, achieving significant milestones through strategic growth, operational excellence, and an unwavering commitment to purity and precision. Under his leadership, the business expanded its capabilities in both manufacturing and trading, catering to a diverse clientele with high-quality gold products that meet the highest industry standards.
                </p>

                <p>
                    Building on this strong legacy, Mr. Shah founded Radhe Krupa with a clear vision to create a brand that seamlessly blends heritage craftsmanship with modern innovation. Radhe Krupa stands as a reflection of his deep industry knowledge, ethical business practices, and passion for excellence. The brand is dedicated to delivering gold products that are not only aesthetically refined but also synonymous with trust, authenticity, and enduring value.
                </p>

                <p>
                    Through Radhe Krupa, Mr. Gaurang Shah continues to redefine excellence in the gold industry, offering products that honor tradition while embracing contemporary design and innovation—ensuring lasting value for customers and partners alike.
                </p>

                <div className={styles.links}>
                    <a href="http://linkedin.com/">LinkedIn →</a>
                    <a href="http://gmail.com/">Email →</a>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
