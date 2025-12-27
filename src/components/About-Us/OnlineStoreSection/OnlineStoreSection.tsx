import Image from "next/image";
import styles from "./OnlineStoreSection.module.scss";
import map from "@/components/Images/map.png";


const OnlineStoreSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Our Online Store</h2>

                <p className={styles.text}>
                    Our digital platform brings world-class gold products directly to your
                    fingertips. Each gold coin offered in our online store is a symbol of
                    authenticity, precision, and luxury.
                </p>

                <p className={styles.text}>
                    Whether you're purchasing for investment, personal collection, or a
                    meaningful gift, Earth Mint ensures a seamless and secure shopping
                    experience with quality you can trust. Through our online store, we
                    continue our commitment to excellence, offering access to pure gold in
                    its most refined form.
                </p>

                <button className={styles.button}>Shop Now</button>
            </div>

            <div className={styles.imageWrapper}>
                <Image
                    src={map}
                    alt="India map coverage"
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default OnlineStoreSection;
