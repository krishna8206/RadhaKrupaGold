import PolicyLayout from "@/components/Footer/Policies/PolicyLayout/PolicyLayout";
import styles from "@/components/Footer/Policies/PolicyLayout/PolicyLayout.module.scss";

export default function RefundPolicyPage() {
    return (
        <PolicyLayout
            pageTitle="Refund Policy"
            sections={[
                {
                    content: (
                        <p>
                            At RADHEKRUPA, we strive to provide exceptional products and customer service. Your satisfaction is our top priority, and we offer the following Return and Refund policy for your peace of mind:
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Eligibility: Our refund policy applies to select products that are eligible for our 100% buyback program. These products include [Gold Coins, Gold Frames & Gold Rakhi].
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Buyback Conditions: In order to qualify for our 100% buyback program, the following conditions must be met:
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            The product must be in its original condition without any signs of wear or damage.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Proof of purchase, such as a valid receipt or order confirmation, must be provided.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Exclusions: Please note that the buyback program only covers the value of the gold content. We do not reimburse for making charges, packaging, or any other additional fees associated with the original purchase.
                        </p>
                    ),
                },
            {
                content: (
                <p>
                    Buyback Policy for Coin:
                </p>
                ),
            },
                {
                    content: (
                        <p>
                            We offer a 100% buyback guarantee on the gold value of our Coin.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            To claim the buyback, you must provide proof of purchase, such as the original bill or payment receipt.
                        </p>
                ),
                },
            {
                content: (
                <p>
                    To initiate the process, please email us and courier the product to our address. Once we receive and inspect the Coin, we will process the payment.
                </p>
                ),
            },
                {
                    content: (
                        <p>
                            Please note: The buyback amount will be calculated according to the gold weight and the live gold rate at the time of selling.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            If you wish to open the Coin and test the gold part yourself, we have a video guide available: Gold Coin Extraction Video. However, we do not recommend doing this yourself, as it requires professional tools and expertise.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            If you wish to open the Rakhi and test the gold part yourself, we have a video guide available: {" "}
                            <a
                                href="#"
                               className={styles.link}>Gold Rakhi Extraction Video </a> {" "}.
                            However, we do not recommend doing this yourself, as it requires professional tools and expertise.

                        </p>
                    ),
                },
            {
                    content: (
                        <p>
                            <span>Refund Process:</span> If
                            you wish to participate in our buyback program, please
                            contact us at{" "}
                            <a
                                href="mailto:orders@radhekrupagold.com"
                                className={styles.email}
                            >
                                orders@radhekrupagold.com
                            </a>{" "}
                            to initiate the process. Once your request is approved and
                            the product is received and inspected, we will issue a
                            refund for the value of the gold content to the original
                            payment method.

                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Return Shipping: Customers are responsible for the cost of return shipping unless the product is being returned due to damage or defect.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Refund Exceptions: We reserve the right to refuse refunds or buyback requests for products that do not meet the eligibility criteria outlined in this policy or for any other reason at our discretion.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Contact Us: If you have any questions or concerns about our refund policy or the buyback program, please don’t hesitate to contact us at {" "}
                            <a
                                href="mailto:orders@radhekrupagold.com"
                                className={styles.email}
                            >
                                orders@radhekrupagold.com
                            </a>{" "}
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            By participating in our buyback program, you acknowledge that you have read, understood, and agree to be bound by these conditions.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Please review these policies carefully before using our website. If you have any further questions, feel free to reach out to us.
                        </p>
                    ),
                },

            ]}
        />
    );
}
