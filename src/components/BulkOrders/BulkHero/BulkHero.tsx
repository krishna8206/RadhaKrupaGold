import Image from "next/image";
import styles from "./BulkHero.module.scss";
import goldCard from "@/components/Images/Gold.jpg";


const BulkHero = () => {
    return (
        <section className={styles.heroContainer}>
            {/* Ribbon */}
            <div className={styles.ribbon}>
                ORDER <span>NOW</span>
            </div>

            {/* Left content */}
            <div className={styles.content}>
                <h1>Bulk Orders</h1>
                <p>
                    Bulk Orders for Weddings, Events, and Corporate Gifting!
                </p>
            </div>

            {/* Right image */}
            <div className={styles.imageWrapper}>
                <Image
                    src={goldCard}
                    alt="Bulk Orders"
                    width={700}
                    height={530}
                    priority
                />
            </div>
        </section>
    );
};

export default BulkHero;
