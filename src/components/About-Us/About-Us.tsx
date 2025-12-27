import styles from './AboutUs.module.scss';
import Image from 'next/image';
import goldCard from "@/components/Images/Gold-Card.png";


const AboutUs = () => {
    return (
        <section className={styles.about}>
            {/* Hero */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>About Us</h1>
                </div>

                <div className={styles.heroImage}>
                    <Image
                        src={goldCard}
                        alt="Radhe Krupa Gold Coins"
                    />
                </div>
            </div>

            {/* Content */}
            <div className={styles.content}>
                <h2>Radhe Krupa</h2>

                <p>
                    At Radhe Krupa, we are more than just a gold production and development
                    company—we are curators of craftsmanship, trust, and timeless value.
                    Our mission is deeply rooted in the belief that gold is not just a
                    precious metal, but a life enabler.
                </p>

                <p>
                    With every 24K (999) pure gold coin we mint, we aim to bring lasting
                    value, unmatched purity, and elegant design to the hands of investors,
                    collectors, and gift-givers alike.
                </p>

                <button className={styles.cta}>
                    Explore Collection →
                </button>
            </div>
        </section>
    );
};

export default AboutUs;
