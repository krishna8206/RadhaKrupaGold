import Razorpay from "razorpay";
import { NextResponse } from "next/server";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY!,
    key_secret: process.env.RAZORPAY_SECRET!,
});

export async function POST(req: Request) {
    const { amount } = await req.json();

    if (!amount || amount <= 0) {
        return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    try {
        const order = await razorpay.orders.create({
            amount: amount * 100, // in paise
            currency: "INR",
        });

        return NextResponse.json(order);
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }
}
