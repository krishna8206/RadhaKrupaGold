'use client';


import styles from './JewelleryTieUps.module.scss';


const JewelleryTieUps = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay} />
            <div className={styles.content}>
                <h1>Jewellery Store Tie-ups</h1>
                <p>
                    Highlight a new collection and share details about products related
                    to this image
                </p>
            </div>
        </section>
    );
};


export default JewelleryTieUps;