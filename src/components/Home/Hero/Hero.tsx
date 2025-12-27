"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import styles from './Hero.module.scss';

// Logic imports from your CoinCard pattern
import { useCart } from "@/context/CartContext";
import Toast from "@/components/Toast/Toast";
import { MOCK_PRODUCTS, CoinProduct } from "@/data/mock";

const Hero: React.FC = () => {
    const heroProducts: CoinProduct[] = MOCK_PRODUCTS.slice(0, 3);
    const { addToCart } = useCart();

    // Toast state
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");

    const handleQuickAdd = (e: React.MouseEvent, product: CoinProduct) => {
        // Prevent clicking the bag from triggering the product page Link
        e.preventDefault();
        e.stopPropagation();

        // Add the first variant (base weight) to cart
        const baseVariant = product.variants[0];

        addToCart({
            id: product.id,
            title: product.title,
            image: product.imageUrls[0],
            weight: baseVariant.weight,
            price: baseVariant.price,
            quantity: 1,
        });

        // Show toast
        setToastMsg(`${product.title} added to cart!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className={styles.container}>
            {/* Toast Notification */}
            <Toast
                isVisible={showToast}
                message={toastMsg}
                onClose={() => setShowToast(false)}
            />

            {/* LEFT HERO SECTION */}
            <section className={styles.heroSection}>
                <div className={styles.backgroundLayer} />
                <div className={styles.contentBox}>
                    <h2>High Finish. Impeccable Detail</h2>
                    <p>
                        At Earth Mint, every gold coin is a masterpiece. Our coins are known for
                        their high-finish quality, with sharp details and clear engravings.
                    </p>
                    <Link href="/products" className={styles.viewBtn}>
                        View Products
                    </Link>
                </div>
            </section>

            {/* RIGHT SIDEBAR LIST */}
            <aside className={styles.productList}>
                {heroProducts.map((item) => (
                    <Link
                        href={`/product/${item.id}`}
                        key={item.id}
                        className={styles.productItem}
                    >
                        <div className={styles.info}>
                            <h3>{item.title}</h3>
                            <p className={styles.priceText}>{item.priceRange}</p>

                            {/* Animated Quick Add Button */}
                            <motion.div
                                className={styles.cartIcon}
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.2, backgroundColor: "#d4af37", color: "#fff" }}
                                onClick={(e) => handleQuickAdd(e, item)}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                                    <path d="M3 6h18" />
                                    <path d="M16 10a4 4 0 0 1-8 0" />
                                </svg>
                            </motion.div>
                        </div>

                        <div className={styles.imageContainer}>
                            <Image
                                src={item.imageUrls[0]}
                                alt={item.title}
                                className={styles.prodImg}
                                width={120}
                                height={120}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </Link>
                ))}
            </aside>
        </div>
    );
};

export default Hero;