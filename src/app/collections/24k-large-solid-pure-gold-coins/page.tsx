import ProductVariantCard from "@/components/Products/ProductVariantCard/ProductVariantCard";
import styles from "@/app/page.module.scss";

// ✅ Use SAME mock data
import { MOCK_PRODUCTS } from "@/data/mock";

export default function LargeSolidGoldCoinsPage() {
    return (
        <main>
            <section className={styles.coinSection}>
                <div className={styles.sectionHeader}>
                    <h2>Large Solid Gold Coins</h2>
                    <p>Make a Statement with Solid Gold</p>
                </div>

                <div className={styles.grid}>
                    {MOCK_PRODUCTS.map((product) => (
                        <ProductVariantCard
                            key={product.id}
                            data={product}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
}
