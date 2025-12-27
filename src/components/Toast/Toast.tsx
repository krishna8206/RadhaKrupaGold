"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import styles from "./Toast.module.scss";

interface ToastProps {
    isVisible: boolean;
    message: string;
    onClose: () => void;
}

export default function Toast({ isVisible, message, onClose }: ToastProps) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className={styles.toast}
                    // Slides in from the right
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                >
                    <div className={styles.content}>
                        <div className={styles.iconWrapper}>
                            <CheckCircle size={20} />
                        </div>
                        <span className={styles.message}>{message}</span>
                        <button onClick={onClose} className={styles.closeBtn}>
                            <X size={16} />
                        </button>
                    </div>

                    {/* UNDERLINE TIMER BAR */}
                    <motion.div
                        className={styles.progressBar}
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 3, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}