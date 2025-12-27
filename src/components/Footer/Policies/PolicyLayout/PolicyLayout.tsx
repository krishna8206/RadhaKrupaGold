import React from "react";
import styles from "./PolicyLayout.module.scss";

export interface PolicySection {
    title?: string;
    content: React.ReactNode;
}

interface PolicyLayoutProps {
    pageTitle: string;
    sections: PolicySection[];
}

const PolicyLayout: React.FC<PolicyLayoutProps> = ({
                                                       pageTitle,
                                                       sections,
                                                   }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.title}>{pageTitle}</h1>

                <div className={styles.content}>
                    {sections.map((section, index) => (
                        <div key={index} className={styles.section}>
                            {section.title && (
                                <h2 className={styles.sectionTitle}>{section.title}</h2>
                            )}
                            <div className={styles.text}>{section.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PolicyLayout;
