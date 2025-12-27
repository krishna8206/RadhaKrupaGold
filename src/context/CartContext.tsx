"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem } from "@/types/cart";

interface CartContextType {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string, weight: string) => void;
    updateQuantity: (id: string, weight: string, qty: number) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "rk_gold_cart";

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>([]);

    /* ✅ LOAD FROM LOCAL STORAGE */
    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            setItems(JSON.parse(stored));
        }
    }, []);

    /* ✅ SAVE TO LOCAL STORAGE */
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    }, [items]);

    const addToCart = (item: CartItem) => {
        setItems((prev) => {
            const existing = prev.find(
                (p) => p.id === item.id && p.weight === item.weight
            );

            if (existing) {
                return prev.map((p) =>
                    p.id === item.id && p.weight === item.weight
                        ? { ...p, quantity: p.quantity + item.quantity }
                        : p
                );
            }

            return [...prev, item];
        });
    };

    const removeFromCart = (id: string, weight: string) => {
        setItems((prev) => prev.filter(p => !(p.id === id && p.weight === weight)));
    };

    const updateQuantity = (id: string, weight: string, qty: number) => {
        if (qty < 1) return;
        setItems((prev) =>
            prev.map((p) =>
                p.id === id && p.weight === weight ? { ...p, quantity: qty } : p
            )
        );
    };

    const clearCart = () => {
        setItems([]);
        localStorage.removeItem(STORAGE_KEY);
    };

    return (
        <CartContext.Provider
            value={{ items, addToCart, removeFromCart, updateQuantity, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart must be used inside CartProvider");
    return ctx;
};
