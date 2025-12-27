"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ShoppingBag } from "lucide-react";
import styles from "./ProductVariantCard.module.scss";
import { CoinProduct, WeightVariant } from "@/data/mock";
import Image from "next/image";
import Link from "next/link";

export default function ProductVariantCard({ data }: { data: CoinProduct }) {
    const initialVariant =
        data.variants.find(v => v.weight === data.initialWeight) ||
        data.variants[0];

    const [selectedVariant, setSelectedVariant] = useState<WeightVariant>(initialVariant);
    const [hasSelected, setHasSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelect = (variant: WeightVariant) => {
        setSelectedVariant(variant);
        setHasSelected(true);
        setIsOpen(false);
    };

    return (
        <Link href={`/product/${data.id}`} className={styles.linkWrapper}>
            <div className={styles.card}>

                {/* IMAGE */}
                <div className={styles.imageContainer}>
                    {data.imageUrls?.length > 0 && (
                        <Image
                            src={data.imageUrls[0]}
                            alt={`${data.title} gold coin`}
                            className={styles.productImage}
                            fill
                        />
                    )}
                </div>

                {/* ACTIONS */}
                <div
                    className={styles.actions}
                    onClick={(e) => e.stopPropagation()} // ⛔ prevent navigation
                >
                    <div className={styles.dropdownWrapper} ref={dropdownRef}>
                        <button
                            type="button"
                            className={styles.dropdownBtn}
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsOpen(!isOpen);
                            }}
                        >
                            {selectedVariant.weight}
                            <ChevronDown
                                size={16}
                                style={{
                                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                    transition: "0.2s",
                                }}
                            />
                        </button>

                        {isOpen && (
                            <ul className={styles.dropdownMenu}>
                                {data.variants.map((variant) => (
                                    <li
                                        key={variant.weight}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSelect(variant);
                                        }}
                                    >
                                        {variant.weight}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        type="button"
                        className={styles.cartBtn}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ShoppingBag color="white" size={20} />
                    </button>
                </div>

                {/* DETAILS */}
                <div className={styles.details}>
                    <h3>{data.title}</h3>
                    <p className={styles.price}>
                        {hasSelected ? selectedVariant.price : data.priceRange}
                    </p>
                    <p className={styles.purity}>999.9 Purity</p>
                </div>
            </div>
        </Link>
    );
}
