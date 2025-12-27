"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import styles from "./Checkout.module.scss";

export default function CheckoutPage() {
    const { items, clearCart } = useCart();

    const [shipping, setShipping] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        apartment: "",
        city: "",
        state: "GJ",
        pin: "",
        country: "India",
    });

    const [billingSame, setBillingSame] = useState(true);
    const [billing, setBilling] = useState({ ...shipping });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        type: "shipping" | "billing"
    ) => {
        const { name, value } = e.target;
        if (type === "shipping") setShipping({ ...shipping, [name]: value });
        else setBilling({ ...billing, [name]: value });

        setErrors((prev) => ({ ...prev, [`${type}.${name}`]: "" }));
    };

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            if ((window as any).Razorpay) return resolve(true);

            const script = document.createElement("script");
            script.src = "https://checkout.razorpay.com/v1/checkout.js";
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const validateFields = () => {
        const newErrors: { [key: string]: string } = {};

        const requiredShippingFields = [
            "firstName",
            "lastName",
            "email",
            "phone",
            "address",
            "city",
            "state",
            "pin",
            "country",
        ];
        requiredShippingFields.forEach((field) => {
            if (!shipping[field as keyof typeof shipping]?.trim()) {
                newErrors[`shipping.${field}`] = "This field is required";
            }
        });

        if (!billingSame) {
            const requiredBillingFields = [
                "firstName",
                "lastName",
                "address",
                "city",
                "state",
                "pin",
                "phone",
                "country",
            ];
            requiredBillingFields.forEach((field) => {
                if (!billing[field as keyof typeof billing]?.trim()) {
                    newErrors[`billing.${field}`] = "This field is required";
                }
            });
        }

        if (items.length === 0) {
            alert("Cart is empty");
            return false;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePayment = async () => {
        if (!validateFields()) return;

        const res = await fetch("/api/razorpay", {
            method: "POST",
            body: JSON.stringify({ amount: total }),
        });
        const data = await res.json();

        if (!data.id) return alert("Payment failed. Try again!");

        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) return alert("Failed to load Razorpay SDK");

        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
            amount: data.amount,
            currency: "INR",
            order_id: data.id,
            name: "Radhe Krupa Gold",
            description: "Jewellery Purchase",
            handler: () => {
                alert("Payment successful!");
                clearCart();
                window.location.href = "/success";
            },
            prefill: {
                name: shipping.firstName + " " + shipping.lastName,
                email: shipping.email,
                contact: shipping.phone,
            },
            theme: { color: "#b89b5e" },
        };

        new (window as any).Razorpay(options).open();
    };

    const renderInput = (
        label: string,
        name: string,
        value: string,
        type: "shipping" | "billing",
        placeholder?: string
    ) => (
        <div className={styles.inputGroup}>
            <label>{label}</label>
            <input
                type="text"
                name={name}
                value={value}
                placeholder={placeholder || label}
                onChange={(e) => handleChange(e, type)}
            />
            {errors[`${type}.${name}`] && (
                <span className={styles.error}>{errors[`${type}.${name}`]}</span>
            )}
        </div>
    );

    return (
        <div className={styles.checkoutPage}>
            <h1>Checkout</h1>
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <h2>Contact</h2>
                    {renderInput("Email or mobile phone number", "email", shipping.email, "shipping")}

                    <h2>Delivery Address</h2>
                    {renderInput("First Name", "firstName", shipping.firstName, "shipping")}
                    {renderInput("Last Name", "lastName", shipping.lastName, "shipping")}
                    {renderInput("Address", "address", shipping.address, "shipping")}
                    {renderInput("Apartment, suite, etc. (optional)", "apartment", shipping.apartment, "shipping")}
                    {renderInput("City", "city", shipping.city, "shipping")}

                    <div className={styles.row}>
                        <div className={styles.inputGroup}>
                            <label>State</label>
                            <select
                                name="state"
                                value={shipping.state}
                                onChange={(e) => handleChange(e, "shipping")}
                                className={errors["shipping.state"] ? styles.inputError : ""}
                            >
                                <option value="">Select State</option>
                                <option value="GJ">Gujarat</option>
                                <option value="MH">Maharashtra</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="DL">Delhi</option>
                            </select>

                            {errors["shipping.state"] && <span className={styles.error}>{errors["shipping.state"]}</span>}
                        </div>
                        {renderInput("PIN code", "pin", shipping.pin, "shipping")}
                        {renderInput("Phone", "phone", shipping.phone, "shipping")}
                    </div>

                    <label className={styles.checkbox}>
                        <input
                            type="checkbox"
                            checked={billingSame}
                            onChange={(e) => setBillingSame(e.target.checked)}
                        />
                        Billing address same as shipping
                    </label>

                    {!billingSame && (
                        <div className={styles.billingForm}>
                            <h2>Billing Address</h2>
                            {renderInput("First Name", "firstName", billing.firstName, "billing")}
                            {renderInput("Last Name", "lastName", billing.lastName, "billing")}
                            {renderInput("Address", "address", billing.address, "billing")}
                            {renderInput("Apartment, suite, etc. (optional)", "apartment", billing.apartment, "billing")}
                            {renderInput("City", "city", billing.city, "billing")}

                            <div className={styles.row}>
                                <div className={styles.inputGroup}>
                                    <label>State</label>
                                    <select
                                        name="state"
                                        value={billing.state}
                                        onChange={(e) => handleChange(e, "billing")}
                                    >
                                        <option value="GJ">Gujarat</option>
                                    </select>
                                    {errors["billing.state"] && <span className={styles.error}>{errors["billing.state"]}</span>}
                                </div>
                                {renderInput("PIN code", "pin", billing.pin, "billing")}
                                {renderInput("Phone", "phone", billing.phone, "billing")}
                            </div>
                        </div>
                    )}
                </div>

                <div className={styles.summarySection}>
                    <h2>Order Summary</h2>
                    {items.map((item) => (
                        <div key={`${item.id}-${item.weight}`} className={styles.item}>
                            <span>{item.title} ({item.weight}) x {item.quantity}</span>
                            <span>₹{(item.price * item.quantity).toLocaleString("en-IN")}</span>
                        </div>
                    ))}
                    <div className={styles.total}>
                        <span>Total</span>
                        <span>₹{total.toLocaleString("en-IN")}</span>
                    </div>
                    <button className={styles.payBtn} onClick={handlePayment}>Pay Now</button>
                    <p className={styles.paymentInfo}>All transactions are secure and encrypted via Razorpay.</p>
                </div>
            </div>
        </div>
    );
}
