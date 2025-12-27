// app/product/[id]/page.tsx
"use client";

import React from "react";
import { useParams } from "next/navigation";
import { MOCK_PRODUCTS } from "@/data/mock";
import ProductDetails from "@/components/Products/ProductDetails/ProductDetails";
import { notFound } from "next/navigation";

export default function ProductPage() {
    const params = useParams();

    // Find the product in your mock data that matches the URL ID
    const product = MOCK_PRODUCTS.find((p) => p.id === params.id);

    // If the user types an ID that doesn't exist (e.g. /product/999)
    if (!product) {
        return notFound();
    }

    return (
        <div style={{ padding: "20px" }}>
            {/* Passing the found product data to your details component */}
            <ProductDetails product={product} />
        </div>
    );
}