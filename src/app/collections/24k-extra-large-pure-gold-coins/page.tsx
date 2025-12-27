import React from "react";
import ProductVariantCard from "@/components/Products/ProductVariantCard/ProductVariantCard";
import styles from "@/app/page.module.scss";

import { MOCK_PRODUCTS } from "@/data/mock";

export default function LargeSolidGoldCoinsPage() {
    return (
        <>
            <main style={{ paddingTop: "2rem" }}>
                <section className={styles.coinSection}>
                    <div className={styles.sectionHeader}>
                        <h2>Extra-Large Slim Gold</h2>
                        <p>Viewing all {MOCK_PRODUCTS.length} products</p>
                    </div>

                    {/* Show ALL products (no slice) */}
                    <div className={styles.grid}>
                        {MOCK_PRODUCTS.map((product) => (
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            <ProductVariantCard key={product.id} data={product} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
