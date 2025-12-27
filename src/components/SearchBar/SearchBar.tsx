"use client";

import { useState, useMemo, useEffect } from "react"; // Added useEffect
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CoinProduct } from "@/data/mock";
import CloseIcon from "@/components/Icons/CloseIcon";
import SearchIcon from "@/components/Icons/SearchIcon";
import { FiChevronLeft } from "react-icons/fi";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
    onClose: () => void;
    products: CoinProduct[];
}

export default function SearchBar({ onClose, products }: SearchBarProps) {
    const [query, setQuery] = useState("");

    // Close on Escape Key
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleEsc);

        // Cleanup listener on unmount
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    const filteredResults = useMemo(() => {
        if (query.length < 2) return [];
        return products.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
    }, [query, products]);

    return (
        <motion.div
            className={styles.searchOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={styles.searchContainer}>
                {/* Search Input Box */}
                <div className={styles.inputWrapper}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={styles.backBtn}
                        onClick={onClose}
                    >
                        <FiChevronLeft size={24} />
                    </motion.button>

                    <input
                        autoFocus
                        type="text"
                        placeholder="What are you looking for?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <div className={styles.rightActions}>
                        {query && (
                            <motion.button
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className={styles.clearBtn}
                                onClick={() => setQuery("")}
                            >
                                <CloseIcon width={16} height={16} />
                            </motion.button>
                        )}
                        <span className={styles.searchIcon}>
                            <SearchIcon width={22} height={22} />
                        </span>
                    </div>
                </div>

                {/* Suggestion Results Dropdown */}
                {query.length >= 2 && (
                    <motion.div
                        className={styles.resultsDropdown}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <div className={styles.resultsHeader}>
                            <span>Search results for &#34;{query}&#34;</span>
                            <button className={styles.viewAll}>
                                View all results {">"}
                            </button>
                        </div>

                        <div className={styles.resultsList}>
                            {filteredResults.length > 0 ? (
                                filteredResults.map((product) => (
                                    <Link
                                        href={`/product/${product.id}`}
                                        key={product.id}
                                        onClick={onClose}
                                        className={styles.resultItem}
                                    >
                                        <div className={styles.itemImg}>
                                            <Image
                                                src={product.imageUrls[0]}
                                                alt={product.title}
                                                width={50}
                                                height={40}
                                                style={{ objectFit: "contain" }}
                                            />
                                        </div>
                                        <div className={styles.itemDetails}>
                                            <span className={styles.itemName}>
                                                {product.title.toUpperCase()}
                                            </span>
                                        </div>
                                        <span className={styles.itemPrice}>
                                            Rs. {product.variants[0].price.toLocaleString('en-IN', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })}
                                        </span>
                                    </Link>
                                ))
                            ) : (
                                <div className={styles.noResults}>No products found.</div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Background blur/click-away */}
            <div className={styles.backdrop} onClick={onClose} />
        </motion.div>
    );
}