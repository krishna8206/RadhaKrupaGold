import React from "react";
import PolicyLayout from "@/components/Footer/Policies/PolicyLayout/PolicyLayout";
import FaqAccordion from "@/components/Footer/Policies/Faq/FaqAccordion";

const FAQPage = () => {
    return (
        <PolicyLayout
            pageTitle="Frequently asked questions"
            sections={[
                {
                    content: (
                        <FaqAccordion
                            items={[
                                {
                                    question: "Why are these gold products so affordable?",
                                    answer: (
                                        <>
                                            Our gold coins and frames are compressed in the
                                            thinnest form of pure gold sheet, which gives us
                                            such light weight making it affordable and nature
                                            of gold & purity is never compromised.
                                        </>
                                    ),
                                },
                                {
                                    question: "Is this real gold?",
                                    answer: (
                                        <>
                                            Yes, the gold is 100% real. Note: we only use
                                            imported bank metal Gold purity & weight is never
                                            compromised which ensures to give 100% buy back
                                            guarantee.
                                        </>
                                    ),
                                },
                                {
                                    question: "What is the gold purity?",
                                    answer: (
                                        <ul>
                                            <li>For gold coins: 999 fineness.</li>
                                            <li>For gold frames: 916 fineness.</li>
                                        </ul>
                                    ),
                                },
                                {
                                    question: "What is the guarantee on weight accuracy?",
                                    answer: (
                                        <>
                                            All our products have zero weight tolerance &
                                            100% weight guarantee.
                                        </>
                                    ),
                                },
                                {
                                    question: "Do you have a buyback guarantee?",
                                    answer: (
                                        <>
                                            Yes, we offer a 100% buyback guarantee. You will
                                            receive the full amount for the gold weight at the
                                            current market value at the time of selling.
                                        </>
                                    ),
                                },
                                {
                                    question: "Where can I sell the gold and at what value?",
                                    answer: (
                                        <>
                                            You can sell your gold directly to us or any
                                            jewelry store near you or you can sell it to us,
                                            we will provide you with the gold value return at
                                            the current market value at the time of selling.
                                        </>
                                    ),
                                },
                                {
                                    question: "Can I remove the coin from the package?",
                                    answer: (
                                        <>
                                            No, you cannot remove the coin from the packaging
                                            as it is in a compressed sheet form. Since pure
                                            gold has a fragile nature, removing it can damage
                                            the coin.
                                        </>
                                    ),
                                },
                                {
                                    question: "Does the coin come in a normal coin format and thickness?",
                                    answer: (
                                        <>
                                            No, these coins do not have the feel and thickness
                                            of a normal coin. They come in a very thin sheet
                                            format and have one side embossed, making them
                                            best suitable for gifting.
                                        </>
                                    ),
                                },
                            ]}
                        />
                    ),
                },
            ]}
        />
    );
};

export default FAQPage;
