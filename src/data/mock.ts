// src/data/mock.ts
import maroonCard from "@/components/Images/Maroon-Card.png";
import {StaticImageData} from "next/image";


export interface WeightVariant {
    weight: string;
    price: number;
    image: StaticImageData | undefined; // ✅ optional
}

export interface CoinProduct {
    id: string;
    title: string;
    imageUrls: StaticImageData[];
    isCertificate: boolean;
    priceRange: string;
    initialWeight?: string; // ✅ optional (THIS IS THE FIX)
    variants: WeightVariant[];
    /** Optional fields */
    imageUrl?: StaticImageData;
}

export const WEIGHT_VARIANTS: WeightVariant[] = [
    { weight: "25mg",   price: 830, image: maroonCard },
    { weight: "50mg",  price: 1310, image: maroonCard },
    { weight: "100mg",  price: 2050, image: maroonCard },
    { weight: "200mg",  price: 3450, image: maroonCard },
    { weight: "300mg",  price: 4850, image: maroonCard },
    { weight: "400mg", price: 6250, image: maroonCard },
    { weight: "500mg", price: 7800, image: maroonCard },
    { weight: "1000mg", price: 14950, image: maroonCard },
];

export const MOCK_PRODUCTS: CoinProduct[] = [
    {
        id: "1",
        title: "GANESH JI",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        // Using the same image multiple times for demonstration
        imageUrls: [maroonCard, maroonCard, maroonCard, maroonCard, maroonCard, maroonCard, maroonCard, maroonCard],
        isCertificate: true,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "2",
        title: "LAXMI JI",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "3",
        title: "DO MURTI",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "4",
        title: "KALPAVRIKSHA",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard, maroonCard,maroonCard, maroonCard,maroonCard, maroonCard,maroonCard, maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "5",
        title: "GANESH JI",
        // This is the string shown BEFORE selection
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: true,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "6",
        title: "LAXMI JI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "7",
        title: "DO MURTI",
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "8",
        title: "KALPAVRIKSHA",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "9",
        title: "GANESH JI",
        // This is the string shown BEFORE selection
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: true,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "10",
        title: "LAXMI JI",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "11",
        title: "DO MURTI",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
    {
        id: "12",
        title: "KALPAVRIKSHA",
        priceRange: "Rs. 830.00 - Rs. 14,950.00",
        imageUrls: [maroonCard],
        isCertificate: false,
        variants: WEIGHT_VARIANTS,
    },
];