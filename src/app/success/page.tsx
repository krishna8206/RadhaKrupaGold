"use client";

import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

export default function SuccessPage() {
    const { clearCart } = useCart();

    useEffect(() => {
        clearCart();
    }, []);

    return (
        <div>
            <h1>Payment Successful 🎉</h1>
            <p>Your order has been placed.</p>
        </div>
    );
}
