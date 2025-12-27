import PolicyLayout from "@/components/Footer/Policies/PolicyLayout/PolicyLayout";
import styles from "@/components/Footer/Policies/PolicyLayout/PolicyLayout.module.scss";

export default function ShippingPolicyPage() {
    return (
        <PolicyLayout
            pageTitle="Shipping Policy"
            sections={[
                {
                    content: (
                        <p>
                            At RADHEKRUPA, we strive to provide prompt and reliable shipping for all orders. Please review the following information regarding our shipping policy:
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Processing Time: Orders are typically processed and shipped within 2-5 business days after payment confirmation.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Shipping Methods: We offer standard and expedited shipping options. Delivery times may vary depending on your location and chosen shipping method.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Shipping Costs: Shipping costs are calculated based on the weight of your order and your shipping destination. You can view the shipping costs at checkout before completing your purchase.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            International Shipping: Currently, we do not offer international shipping. We apologize for any inconvenience this may cause and hope to expand our shipping options in the future.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Order Tracking: Once your order has been shipped, you will receive a shipping confirmation email/WhastApp with tracking information. You can track the status of your order using the provided tracking number.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Delivery: While we make every effort to ensure timely delivery, we cannot guarantee specific delivery dates or times. Delivery delays may occur due to unforeseen circumstances beyond our control, such as inclement weather or carrier issues.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            If you have any questions or concerns about our shipping policy, please contact us at{" "}
                            <a
                                href="mailto:orders@radhekurpagold.com"
                                className={styles.email}
                            >
                                orders@radhekurpagold.com
                            </a>
                            .
                        </p>
                    ),
                },
            ]}
        />
    );
}
