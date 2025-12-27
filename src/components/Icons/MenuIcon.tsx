import React from "react";

export default function MenuIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Menu"
            style={{ transform: "scaleX(-1)" }}
            width="24"
            height="24"
        >
            <path
                d="M11 17H19M5 12H19M11 7H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
