"use client";

import React from 'react';
import { Box, Button } from '@mui/material';
import { FormProvider } from 'react-hook-form';

interface AppFormProps {
    children: React.ReactNode;
    form: any;
    onSubmit: (data: any) => void;
    sx?: any;

    submitButtonText?: string | boolean;
    isLoading?: boolean;
}

export const AppForm = ({
                            children,
                            form,
                            onSubmit,
                            sx,
                            submitButtonText = false,
                            isLoading,
                        }: AppFormProps) => {
    const { handleSubmit } = form;

    return (
        <FormProvider {...form}>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                sx={{ ...sx, width: '100%' }}
            >
                {children}

                {submitButtonText && (
                    <Box className="submit-container" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={isLoading}
                            className="submit-btn"
                        >
                            {submitButtonText}
                        </Button>
                    </Box>
                )}
            </Box>
        </FormProvider>
    );
};