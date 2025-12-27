import PolicyLayout from "@/components/Footer/Policies/PolicyLayout/PolicyLayout";
import styles from "@/components/Footer/Policies/PolicyLayout/PolicyLayout.module.scss";

export default function TermsOfServicePage() {
    return (
        <PolicyLayout
            pageTitle="Terms of Service"
            sections={[
                {
                    content: (
                        <p>
                            Welcome to RADHE KRUPA, operated by SHREE NAKODA JI SUVARAN. By accessing or using our website {" "}( <span className={styles.highlight}>https://radhekrupagold.com</span> ), you agree to comply with and be bound by the following terms and conditions of use. Please read these terms carefully before using our Site.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Use of Site: You agree to use the Site solely for lawful purposes and in accordance with these Terms of Service.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Intellectual Property: All content, trademarks, logos, and intellectual property displayed on the Site are owned by Radhe Krupa. You may not use, modify, reproduce, or distribute any content from the Site without prior written consent.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Product Information: We make every effort to accurately display the descriptions and images of our products. However, we cannot guarantee that your computer monitor’s display will accurately reflect the products.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Pricing and Payment: All prices displayed on the Site are in INR and are subject to change without notice. Payment is required at the time of purchase, and we accept major credit cards and other forms of electronic payment.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Shipping: Please refer to our Shipping Policy for information on shipping methods, delivery times, and associated costs.
                        </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Privacy: Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Refunds and Returns: Please refer to our Refund Policy for information on eligibility, procedures, and timelines for refunds and returns.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            Governing Law: These Terms of Service shall be governed by and construed in accordance with the laws of courts at Mumbai, India, without regard to its conflicts of law provisions.                         </p>
                    ),
                },
                {
                    content: (
                        <p>
                            By using our Site, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our Site.                         </p>
                    ),
                },
            ]}
        />
    );
}
