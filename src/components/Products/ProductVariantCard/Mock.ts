// mock.ts
import goldCard from "@/components/Images/Gold-Card.png";
import {StaticImageData} from "next/image";

export type WeightVariant = {
    weight: string;
    price: string;
};

export type CoinProduct = {
    id: string;
    title: string;
    isCertificate: boolean;
    priceRange: string;
    variants: WeightVariant[];
    initialWeight: string; // Crucial property for fixing TS2339
    imageUrl: StaticImageData;
};

// Common variants
export const COMMON_WEIGHT_VARIANTS: WeightVariant[] = [
    { weight: "50mg", price: "Rs. 1,145.00" },
    { weight: "100mg", price: "Rs. 1,910.00" },
    { weight: "200mg", price: "Rs. 3,345.00" },
    { weight: "300mg", price: "Rs. 4,775.00" },
    { weight: "500mg", price: "Rs. 7,710.00" },
    { weight: "1000mg", price: "Rs. 14,970.00" },
    { weight: "2000mg", price: "Rs. 29,080.00" },
];


// --- MOCK DATA ---
export const MOCK_PRODUCTS: CoinProduct[] = [
    {
        id: "1",
        title: "GANESH JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
            { weight: "2gm", price: "Rs. 1,19,760.00" },
        ],
        imageUrl: goldCard,
    },
    {
        id: "2",
        title: "LAXMI JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
        ],
        imageUrl: goldCard,
    },
    {
        id: "3",
        title: "SARASWATI",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "4",
        title: "KALPAVRIKSHA",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.25gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "5",
        title: "SITA RAM",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.5gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "6",
        title: "HANUMAN",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "7",
        title: "OM",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.25gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "8",
        title: "MATA JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "9",
        title: "GANESH JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
            { weight: "2gm", price: "Rs. 1,19,760.00" },
        ],
        imageUrl: goldCard,
    },
    {
        id: "10",
        title: "LAXMI JI",
        isCertificate: true,
        priceRange: "Rs. 1,910.00 - Rs. 139,800.00",
        initialWeight: "0.1gm",
        variants: [
            { weight: "0.1gm", price: "Rs. 1,910.00" },
            { weight: "0.25gm", price: "Rs. 4,035.00" },
            { weight: "0.5gm", price: "Rs. 7,490.00" },
            { weight: "1gm", price: "Rs. 14,980.00" },
        ],
        imageUrl: goldCard,
    },
    {
        id: "11",
        title: "SARASWATI",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.1gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
    {
        id: "12",
        title: "KALPAVRIKSHA",
        isCertificate: false,
        priceRange: "Rs. 1,145.00 - Rs. 29,080.00",
        initialWeight: "0.25gm",
        variants: COMMON_WEIGHT_VARIANTS,
        imageUrl: goldCard,
    },
];