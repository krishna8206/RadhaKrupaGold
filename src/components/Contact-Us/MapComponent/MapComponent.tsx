import React from 'react';
import styles from './MapComponent.module.scss';

const MapComponent: React.FC = () => {
    // Direct Google Maps embed link for the specific location in your image
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6141019943593!2d72.55979567477064!3d23.037937115755717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f4aee68999%3A0xbb563c8b8d3549b0!2sPerfect%20Multi!5e0!3m2!1sen!2sin!4v1765965260713!5m2!1sen!2sin\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade";

    return (
        <section className={styles.mapContainer}>
            <h2 className={styles.mapTitle}>Find Us</h2>
            <div className={styles.mapWrapper}>
                <iframe
                    title="Earth Mint Location"
                    src={mapSrc}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default MapComponent;