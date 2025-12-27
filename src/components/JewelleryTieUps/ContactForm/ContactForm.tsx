'use client';

import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Grid } from '@mui/material';
import styles from './ContactForm.module.scss';
import { FieldGroup } from '@/components/Form/FormProvider/FieldGroup';
import TextInput from '@/components/Form/FormInputs/TextInput';

const ContactForm = () => {
    const methods = useForm();

    const fields = [
        {
            name: 'name',
            label: 'Name',
            rules: { required: 'Name is required' },
            renderer: TextInput,
            xs: 12,
            md: 6,
        },
        {
            name: 'storeName',
            label: 'Store name',
            renderer: TextInput,
            xs: 12,
            md: 6,
        },
        {
            name: 'email',
            label: 'Email',
            rules: { required: 'Email is required' },
            renderer: TextInput,
            xs: 12,
            md: 6,
        },
        {
            name: 'phone',
            label: 'Phone number',
            renderer: TextInput,
            xs: 12,
            md: 6,
        },
        {
            name: 'state',
            label: 'State',
            renderer: TextInput,
            xs: 12,
            md: 6,
        },
        {
            name: 'message',
            label: 'Message',
            rules: { required: 'Message is required' },
            renderer: (props: any) => <TextInput {...props} multiline />,
            xs: 12,
            md: 6,
        },
    ];

    return (
        <section className={styles.wrapper}>
            <FormProvider {...methods}>
                <form className={styles.form}>
                    <FieldGroup formFields={fields} displayLabel />

                    <Grid container justifyContent="center">
                        <button type="submit" className={styles.submit}>
                            Send
                        </button>
                    </Grid>
                </form>
            </FormProvider>
        </section>
    );
};

export default ContactForm;
