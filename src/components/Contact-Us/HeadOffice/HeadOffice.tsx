import styles from "./HeadOffice.module.scss";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const HeadOffice = () => {
    return (
        <section className={styles.headOffice}>
            <div className={styles.container}>
                <div className={styles.textSection}>
                    <h2>Head Office</h2>
                    <p>
                        B5 samrat complex, near choice restaurant,c g road, Ahmedabad 380009
                    </p>
                </div>

                <div className={styles.actions}>
                    <a href="tel:+919510886655" className={styles.actionCard}>
                        <FaPhoneAlt />
                        <span>9510886655</span>
                    </a>

                    <a
                        href="mailto:orders@radhekrupagold.com"
                        className={styles.actionCard}
                    >
                        <FaEnvelope />
                        <span>orders@radhekrupagold.com</span>
                    </a>

                    <a
                        href="https://api.whatsapp.com/send/?phone=919510886655&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.actionCard}
                    >
                        <FaWhatsapp />
                        <span>Ask your questions on WhatsApp</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeadOffice;
