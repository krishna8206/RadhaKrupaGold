"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { AppForm } from "@/components/Form/FormProvider/AppForm";
import { FieldGroup } from '@/components/Form/FormProvider/FieldGroup';
import { TextInput } from '@/components/Form/FormProvider/TextInput';
import Link from 'next/link';
import styles from './Login.module.scss';

export default function LoginPage() {
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const onSubmit = (data: any) => {
        console.log("Login Data:", data);
    };

    const loginFields = [
        {
            name: 'email',
            label: 'Email',
            xs: 12,
            renderer: TextInput,
            // The 'required' rule triggers the red asterisk in your Field component logic
            rules: { required: 'Email is required' },
        },
        {
            name: 'password',
            label: 'Password',
            xs: 12,
            renderer: TextInput,
            fieldProps: { type: 'password' },
            rules: { required: 'Password is required' },
        }
    ];

    return (
        <div className={styles.orderSection}>
            <h1 className={styles.title}>Login</h1>
            <AppForm
                form={form}
                onSubmit={onSubmit}
                submitButtonText="LOGIN"
            >
                {/* Change displayLabel to true to show the labels above the inputs */}
                <FieldGroup
                    formFields={loginFields}
                    displayLabel={true}
                    fieldSize="small"
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '0.5rem', marginTop: '0.5rem' }}>
                    <Link href="/forgot" className={styles.forgotLink}
                          style={{ fontSize: '14px', color: '#666', textDecoration: 'none' }}>
                        Forgot password?
                    </Link>
                </div>
            </AppForm>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <span style={{ color: '#000' }}>Don’t have an account? </span>
                <Link href="/signup" style={{ color: '#d4af37', fontWeight: 700, textDecoration: 'underline' }}>
                    Sign Up
                </Link>
            </div>
        </div>
    );
}