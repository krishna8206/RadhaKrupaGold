"use client";

import React, { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "@mui/material";
import { AppForm } from "@/components/Form/FormProvider/AppForm";
import { FieldGroup } from "@/components/Form/FormProvider/FieldGroup";
import styles from "./OrderForm.module.scss";

/* ================= MULTI-IMAGE UPLOAD ================= */
const FormFileUpload = ({ value = [], onChange, error }: any) => {
    const [previews, setPreviews] = useState<string[]>([]);
    const MAX_IMAGES = 5;

    // Handle adding files
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const availableSlots = MAX_IMAGES - value.length;
        const filesToAdd = files.slice(0, availableSlots);

        if (filesToAdd.length > 0) {
            const updatedFiles = [...value, ...filesToAdd];
            onChange(updatedFiles);

            filesToAdd.forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviews((prev) => [...prev, reader.result as string]);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    // Handle removing files
    const removeImage = (index: number) => {
        const updatedFiles = value.filter((_: any, i: number) => i !== index);
        const updatedPreviews = previews.filter((_, i) => i !== index);
        onChange(updatedFiles);
        setPreviews(updatedPreviews);
    };

    return (
        <div className={styles.uploadWrapper}>
            <div className={styles.imageGrid}>
                {previews.map((src, index) => (
                    <div key={index} className={styles.previewContainer}>
                        <img src={src} alt={`Preview ${index}`} className={styles.previewImage} />
                        <button
                            type="button"
                            className={styles.removeBtn}
                            onClick={() => removeImage(index)}
                        >
                            ×
                        </button>
                    </div>
                ))}

                {value.length < MAX_IMAGES && (
                    <label className={`${styles.uploadBox} ${error ? styles.inputError : ""}`}>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                            className={styles.hiddenInput}
                        />
                        <div className={styles.uploadPlaceholder}>
                            <span className={styles.uploadIcon}>+</span>
                            <p>{value.length === 0 ? "Upload Designs" : "Add More"}</p>
                            <small>{value.length} / {MAX_IMAGES}</small>
                        </div>
                    </label>
                )}
            </div>
            {error && <p className={styles.errorText}>{error.message}</p>}
        </div>
    );
};

/* ================= INPUT ================= */
const FormInput = ({ error, ...props }: any) => (
    <div className={styles.inputWrapper}>
        <input
            {...props}
            autoComplete="off"
            className={error ? styles.inputError : ""}
        />
        {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
);

/* ================= SELECT ================= */
const FormSelect = ({ value, onChange, placeholder, options, error }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", clickOutside);
        return () => document.removeEventListener("mousedown", clickOutside);
    }, []);

    return (
        <div className={styles.selectWrapper} ref={containerRef}>
            <div
                className={`${styles.selectHeader} ${isOpen ? styles.active : ""} ${error ? styles.inputError : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>
                    {value ? options.find((o: any) => o.value === value)?.label : placeholder}
                </span>
                <span className={styles.chevron}></span>
            </div>

            {isOpen && (
                <ul className={styles.optionsList}>
                    {options.map((opt: any) => (
                        <li
                            key={opt.value}
                            className={styles.optionItem}
                            onClick={() => {
                                onChange(opt.value);
                                setIsOpen(false);
                            }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}

            {error && <p className={styles.errorText}>{error.message}</p>}
        </div>
    );
};

/* ================= TEXTAREA ================= */
const FormTextarea = ({ error, ...props }: any) => (
    <div className={styles.inputWrapper}>
        <textarea {...props} className={error ? styles.inputError : ""} />
        {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
);

/* ================= PAGE ================= */
export default function OrderNowPage() {
    const form = useForm({
        defaultValues: {
            name: "",
            designNumber: "",
            email: "",
            phone: "",
            message: "",
            customImages: [],
        },
    });

    const formFields = [
        {
            name: "name",
            label: "Name",
            md: 6,
            rules: { required: "Please enter this field" },
            renderer: FormInput,
        },
        {
            name: "designNumber",
            label: "Custom Design Number",
            md: 6,
            rules: { required: "Please enter this field" },
            renderer: FormSelect,
            fieldProps: {
                placeholder: "Choose From Above",
                options: [
                    { value: "01", label: "01" },
                    { value: "02", label: "02" },
                    { value: "03", label: "03" },
                    { value: "04", label: "04" },
                ],
            },
        },
        {
            name: "email",
            label: "Email",
            md: 6,
            rules: { required: "Please enter this field" },
            renderer: FormInput,
        },
        {
            name: "phone",
            label: "Phone number",
            md: 6,
            rules: { required: "Please enter this field" },
            renderer: FormInput,
        },
        {
            name: "customImages",
            label: "Upload Your Designs (Max 5)",
            xs: 12,
            renderer: FormFileUpload,
        },
        {
            name: "message",
            label: "Message",
            xs: 12,
            rules: { required: "Please enter this field" },
            renderer: FormTextarea,
        },
    ];

    return (
        <div className={styles.orderSection}>
            <Typography variant="h3" className={styles.title}>
                Order Now
            </Typography>
            <br />
            <AppForm
                form={form}
                onSubmit={(data: any) => console.log("Final Submission:", data)}
                submitButtonText="Send"
            >
                <FieldGroup
                    formFields={formFields}
                    displayLabel
                    fieldSize="medium"
                />
            </AppForm>
        </div>
    );
}