"use client";
import React, { useState } from 'react';
import styles from './Footer.module.scss';
import Image from "next/image";
import Logo from "@/components/Images/Radhe-Krupa-Gold.png";
import Payment from "@/components/Images/Payment.png";

const Footer: React.FC = () => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        if (typeof window !== 'undefined' && window.innerWidth <= 600) {
            setOpenSection(openSection === section ? null : section);
        }
    };

    const isSectionOpen = (section: string) => openSection === section;

    // Native SVG Chevron to avoid "Module not found" errors
    const ChevronIcon = () => (
        <svg
            className={styles.chevron}
            width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* About Section */}
                    <div className={`${styles.column} ${isSectionOpen('about') ? styles.active : ''}`}>
                        <h3 onClick={() => toggleSection('about')}>
                            ABOUT Radhe Krupa <ChevronIcon />
                        </h3>
                        <div className={styles.collapsibleContent}>
                            <p>
                                Radhe Krupa is a gold production and development company. Our core
                                philosophy of creating world-class products in a world-class way
                                reflects in the quality of our precious metals and the trust our
                                customers place in us.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className={`${styles.column} ${isSectionOpen('links') ? styles.active : ''}`}>
                        <h3 onClick={() => toggleSection('links')}>
                            QUICK LINKS <ChevronIcon />
                        </h3>
                        <ul className={styles.collapsibleContent}>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/bulk-orders">Bulk Orders</a></li>
                            <li><a href="/jewellery-store-tie-ups">Jewellery Store Tie-ups</a></li>
                        </ul>
                    </div>

                    {/* Policies Section */}
                    <div className={`${styles.column} ${isSectionOpen('policies') ? styles.active : ''}`}>
                        <h3 onClick={() => toggleSection('policies')}>
                            POLICIES <ChevronIcon />
                        </h3>
                        <ul className={styles.collapsibleContent}>
                            <li><a href="/policies/refund-policy">Refund Policy</a></li>
                            <li><a href="/policies/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/policies/shipping-policy">Shipping Policy</a></li>
                            <li><a href="/policies/terms-of-service">Terms of Service</a></li>
                            <li><a href="/policies/faq">FAQ's</a></li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className={`${styles.column} ${isSectionOpen('contact') ? styles.active : ''}`}>
                        <h3 onClick={() => toggleSection('contact')}>
                            CONTACT US <ChevronIcon />
                        </h3>
                        <div className={styles.collapsibleContent}>
                            <p>+91 9510886655</p>
                            <p>sales@earthmint.in</p>
                            <p>B5 samrat complex, near choice restaurant,</p>
                            <p>c g road, Ahmedabad 380009</p>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className={styles.newsletterColumn}>
                        <h3>Follow us</h3>
                        <p>Never miss any news.</p>
                        <div className={styles.newsletter}>
                            <input type="email" placeholder="Email" aria-label="Email" />
                            <button type="submit">
                                <span className={styles.btnText}>Subscribe</span>
                                <span className={styles.btnArrow}>&gt;</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.bottomBar}>
                    <div className={styles.copyright}>
                        <Image src={Logo} alt="Radhe Krupa Logo" className={styles.logo} />
                        <p>© 2025 Radhe Krupa Gold, Designed By Radhe Krupa</p>
                    </div>
                    <div className={styles.paymentIcons}>
                        <Image src={Payment} alt="Payment" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;