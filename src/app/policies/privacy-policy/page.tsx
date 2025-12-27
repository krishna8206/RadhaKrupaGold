import PolicyLayout from "@/components/Footer/Policies/PolicyLayout/PolicyLayout";
import styles from "@/components/Footer/Policies/PolicyLayout/PolicyLayout.module.scss";

export default function PrivacyPolicyPage() {
    return (
        <PolicyLayout
            pageTitle="Privacy Policy"
            sections={[
                {
                    content: (
                        <p>
                            Your privacy is important to us. This Privacy Policy outlines how RADHE KRUPA collects, uses, and protects your personal information when you visit our website or make a purchase.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Information We Collect: We may collect personal information such as your name, contact number, email address, shipping address, and payment details when you place an order on our website. We also collect non-personal information such as your IP address, browser type, and device information.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            How We Use Your Information: We use your personal information to process and fulfill your orders, communicate with you about your purchases, and provide customer support. We may also use your information to improve our website, personalize your experience, and send you promotional offers.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Data Security: We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Third-Party Services: We may use third-party services such as payment processors and shipping carriers to facilitate your orders. These third parties may have their own privacy policies governing how they use your information.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Cookies: We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Data Retention: We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Your Rights: You have the right to access, update, or delete your personal information. You may also opt-out of receiving promotional emails from us at any time.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Updates to Privacy Policy: We reserve the right to update this Privacy Policy periodically. Any changes will be posted on this page, and your continued use of our website constitutes your acceptance of the revised policy.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            By using our website, you consent to the collection and use of your personal information as described in this Privacy Policy. If you have any questions or concerns about our privacy practices, please contact us
                            at {" "}
                            <a
                                href="mailto:orders@radhekrupagold.com"
                                className={styles.email}
                            >
                                orders@radhekrupagold.com
                            </a>{" "} .
                        </p>
                    ),
                },
            ]}
        />
    );
}
