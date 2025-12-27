"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { Typography, Box } from '@mui/material';
import styles from './ContactUsForm.module.scss';
import { AppForm } from "@/components/Form/FormProvider/AppForm";
import { FieldGroup } from "@/components/Form/FormProvider/FieldGroup";

// Custom renderers to apply your CSS Module classes
const CustomInput = ({ value, onChange, placeholder, error }: any) => (
    <div className={styles.inputWrapper}>
        <input
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <span className={styles.errorText}>{error.message}</span>}
    </div>
);

const CustomTextArea = ({ value, onChange, placeholder, error }: any) => (
    <div className={styles.inputWrapper}>
        <textarea
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <span className={styles.errorText}>{error.message}</span>}
    </div>
);

const ContactUsForm = () => {
    const form = useForm({
        defaultValues: {
            name: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        }
    });

    const onSubmit = (data: any) => {
        console.log("Form Data:", data);
    };

    const formFields = [
        {
            name: 'name',
            label: 'Name',
            xs: 12,
            md: 6, // Side-by-side on desktop
            rules: { required: "Required" },
            renderer: CustomInput,
        },
        {
            name: 'company',
            label: 'Company',
            xs: 12,
            md: 6,
            renderer: CustomInput,
        },
        {
            name: 'email',
            label: 'Email',
            xs: 12,
            md: 6,
            rules: {
                required: "Required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
            },
            renderer: CustomInput,
        },
        {
            name: 'phone',
            label: 'Phone number',
            xs: 12,
            md: 6,
            renderer: CustomInput,
        },
        {
            name: 'message',
            label: 'Message',
            xs: 12,
            md: 12, // Full width
            renderer: CustomTextArea,
        },
    ];

    return (
        <div className={styles.orderSection}>
            <h5 className={styles.formTitle}>
                Leave a Message For Us
            </h5>

            <AppForm
                form={form}
                onSubmit={onSubmit}
                submitButtonText="Send"
            >
                <FieldGroup
                    formFields={formFields}
                    displayLabel={true}
                    fieldSize="small"
                />
            </AppForm>
        </div>
    );
};

export default ContactUsForm;