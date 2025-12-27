import Link from "next/link";
import ProductVariantCard from "@/components/Products/ProductVariantCard/ProductVariantCard";
import styles from "@/app/page.module.scss"; // reuse same styles (or create new)

import type { CoinProduct } from "@/data/mock";

type Props = {
    title: string;
    subtitle: string;
    products: CoinProduct[];
    visibleLimit?: number;
    viewMoreLink: string;
};

export default function ProductVariantSection({
                                                  title,
                                                  subtitle,
                                                  products,
                                                  visibleLimit = 8,
                                                  viewMoreLink,
                                              }: Props) {
    const displayedProducts = products.slice(0, visibleLimit);
    const showViewMore = products.length > visibleLimit;

    return (
        <section className={styles.coinSection}>
            <div className={styles.sectionHeader}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>

            <div className={styles.grid}>
                {displayedProducts.map((product) => (
                    <ProductVariantCard key={product.id} data={product} />
                ))}
            </div>

            {showViewMore && (
                <div className={styles.viewMoreContainer}>
                    <Link href="/collections/24k-large-solid-pure-gold-coins" className={styles.viewMoreBtn}>
                        View More
                    </Link>
                </div>
            )}
        </section>
    );
}
