import React from "react";

type SlideProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

export default function Slide({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

