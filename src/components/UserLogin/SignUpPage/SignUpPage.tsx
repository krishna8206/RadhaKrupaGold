"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { AppForm } from "@/components/Form/FormProvider/AppForm";
import { FieldGroup } from '@/components/Form/FormProvider/FieldGroup';
import { TextInput } from '@/components/Form/FormProvider/TextInput';
import Link from 'next/link';
import styles from '@/components/UserLogin/LoginPage/Login.module.scss';

export default function SignUpPage() {
    const form = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    });

    const onSubmit = (data: any) => {
        console.log("Sign Up Data:", data);
    };

    const signUpFields = [
        {
            name: 'firstName',
            label: 'First name',
            xs: 12,
            md: 6,
            renderer: TextInput,
            rules: { required: 'First name is required' },
        },
        {
            name: 'lastName',
            label: 'Last name',
            xs: 12,
            md: 6,
            renderer: TextInput,
            rules: { required: 'Last name is required' },
        },
        {
            name: 'email',
            label: 'Email',
            xs: 12,
            renderer: TextInput,
            rules: {
                required: 'Email is required',
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                }
            },
        },
        {
            name: 'password',
            label: 'Password',
            xs: 12,
            renderer: TextInput,
            fieldProps: { type: 'password' },
            rules: {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
            },
        }
    ];

    return (
        <div className={styles.orderSection}>
            <h1 className={styles.title}>Create Account</h1>

            <AppForm
                form={form}
                onSubmit={onSubmit}
                submitButtonText="CREATE MY ACCOUNT"
            >
                {/* FIX: Set displayLabel to true to show the labels
                   with red asterisks based on your Field component logic.
                */}
                <FieldGroup
                    formFields={signUpFields}
                    displayLabel={true}
                    fieldSize="small"
                />
            </AppForm>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <span style={{ color: '#000' }}>Already have an account? </span>
                <Link href="/signin" style={{ color: '#d4af37', fontWeight: 700, textDecoration: 'underline' }}>
                    Sign In
                </Link>
            </div>
        </div>
    );
}