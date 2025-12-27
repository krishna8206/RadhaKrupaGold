import React from 'react';
import styles from './RadhekrupaHero.module.scss';
import Image from "next/image";
import LightWeight from "@/components/Images/Light-weight.png";

const RadheKrupaSection: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            {/* Left Section */}
            <section className={styles.textSection}>
                <h1>Radhe Krupa: Pure Gold</h1>
                <p>
                    Welcome to Radhe Krupa, where excellence meets craftsmanship in every gold coin we create.
                </p>
                <p>
                    As a premier gold production and development company, we take pride in delivering 24K (999)
                    pure gold coins—minted with precision, authenticity, and unmatched elegance.
                    Radhe Krupa provides certified, high-quality gold coins you can trust.
                </p>
            </section>

            {/* Right Section */}
            <section className={styles.imageSection}>
                <Image
                    src={LightWeight}
                    alt="Radhe Krupa Gold Coins Collection"
                    width={1400}
                    height={900}
                />

            </section>
        </div>
    );
};

export default RadheKrupaSection;