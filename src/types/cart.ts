import { StaticImageData } from "next/image";

export interface CartItem {
    id: string;
    title: string;
    image: string | StaticImageData;
    weight: string;
    price: number;
    quantity: number;
}
