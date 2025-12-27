import Image from "next/image";
import styles from "./Features.module.scss";
import bulkOrders from "@/components/Images/Bulk-Orders.png";
import partnerWithUs from "@/components/Images/Partner-With-Us.png";
import buyBack from "@/components/Images/Buyback.png";

const features = [
    {
        icon: bulkOrders,
        title: "Bulk Orders",
        description:
            "Planning a grand celebration or corporate event? Make it unforgettable with Earth Mint’s 24K certified gold coins and custom frames—the ultimate symbol of appreciation and prestige.",
    },
    {
        icon: partnerWithUs,
        title: "Partner With Us",
        description:
            "Join hands with Earth Mint as a trusted distributor or gifting partner. We’re looking to collaborate with like-minded businesses, Jewellery Stores and event planners who share our passion.",
    },
    {
        icon: buyBack,
        title: "100% Buyback",
        description:
            "At Earth Mint, we believe that owning gold should come with complete peace of mind. That’s why we offer a 100% Buyback Guarantee on all our 24K (999) gold coins.",
    },
];

const Features = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                {features.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>
                            <Image src={item.icon} alt={item.title} width={280} height={200} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
