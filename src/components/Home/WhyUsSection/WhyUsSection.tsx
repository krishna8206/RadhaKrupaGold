import React from 'react';
import styles from './WhyUsSection.module.scss';

const WhyUsSection: React.FC = () => {
    const features = [
        { icon: 'https://earthmintgold.com/cdn/shop/files/2_7c5ccc8d-f169-4644-931a-44a8dba6b154.png?height=115&v=1749015219', text: 'Lightweight & Affordable' },
        { icon: 'https://earthmintgold.com/cdn/shop/files/1_2c2447bb-65fb-4060-869f-352702789b25.png?height=115&v=1749015224', text: 'Unmatched Purity' },
        { icon: 'https://earthmintgold.com/cdn/shop/files/3_fca8111b-c989-4cbe-a631-5728aa6feee0.png?height=115&v=1749015235', text: 'Superior Craftsmanship' },
        { icon: 'https://earthmintgold.com/cdn/shop/files/4_593161b9-b5f1-4bee-a3b1-236c104a6304.png?height=115&v=1749015243', text: '100% Transparency.' },
    ];

    return (
        <section className={styles.mainContainer}>
            {/* Why Us Header */}
            <div className={styles.header}>
                <h2>Why Us ?</h2>
                <p>We don&#39;t just sell Gold – We set the Standard</p>
            </div>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                        <div className={styles.iconWrapper}>
                            <img src={feature.icon} alt={feature.text} />
                        </div>
                        <h3>{feature.text}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyUsSection;