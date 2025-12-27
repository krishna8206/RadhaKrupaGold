import React from 'react';
import styles from './OrderNote.module.scss';

const OrderNote: React.FC = () => {
    return (
        <section className={styles.container}>
            <h1 className={styles.title}>NOTE:</h1>

            <div className={styles.contentSection}>
                <p>
                    *customization/ No customization <br />
                    <span className={styles.bold}>Note:</span> Customization cost is Rs.3000 for each item (Card, Box, Bag)
                </p>

                <p>
                    <span className={styles.bold}>*Minimum Order Quantity (MOQ) -</span>
                </p>

                <ul className={styles.subList}>
                    <li>i) min 100 with customized card only</li>
                    <li>ii) min 500 with customized card, box, bag</li>
                </ul>
            </div>
        </section>
    );
};

export default OrderNote;