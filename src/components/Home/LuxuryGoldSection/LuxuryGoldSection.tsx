import React from 'react';
import styles from './LuxuryGoldSection.module.scss';
import Image from "next/image";
import LightWeight from "@/components/Images/Light-weight.png";

const LuxuryGoldSection: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            {/* Left Section */}
            <section className={styles.textSection}>
                <h1>Lightweight & Affordable Luxury - Gold Coins for Every Budget</h1>
                <p>
                    At Earth Mint, we believe that owning pure gold should be accessible to everyone.
                    Our collection of lightweight gold coins combines affordability with luxury.
                </p>
                <p>
                    Ideal for first-time buyers, passionate gold enthusiasts, and anyone
                    searching for the perfect gift.
                </p>
                <p className={styles.tagline}>
                    Luxury shouldn't weigh heavy on your wallet – Earth Mint
                </p>
            </section>

            {/* Right Section */}
            <section className={styles.imageSection}>
                <Image
                    src={LightWeight}
                    alt="Earth Mint Gold Coins Collection"
                />
            </section>
        </div>
    );
};

export default LuxuryGoldSection;