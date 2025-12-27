import Image from "next/image";
import styles from "./LetsConnect.module.scss";
import letsConnect from "@/components/Images/contsct-us-bg.png";

const LetsConnect = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>Let’s Connect</h1>
                <p>
                    We’re here to help you celebrate life’s milestones with timeless
                    elegance.
                </p>
            </div>

            <div className={styles.imageWrapper}>
                <Image
                    src={letsConnect}
                    alt="Traditional greeting"
                    className={styles.image}
                />
            </div>
        </section>
    );
};

export default LetsConnect;
