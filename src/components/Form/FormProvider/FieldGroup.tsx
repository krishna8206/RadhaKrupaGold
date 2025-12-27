"use client";

import React from 'react';
import {Grid as Grid, Typography } from '@mui/material'; // Using Grid2 is the modern MUI standard
import { Controller, useFormContext } from 'react-hook-form';

export const Field = ({ formField, displayLabel, fieldSize }: any) => {
    const form = useFormContext();
    const {
        control,
        formState: { errors },
    } = form;

    const {
        xs = 12,
        md = 12,
        name,
        rules,
        label,
        renderer: Renderer,
        disabled,
        fieldProps = {},
    } = formField;

    return (
        // Remove the 'item' prop. In MUI v5/v6 Grid,
        // defining xs/md is enough to identify it as a grid item.
        <Grid size={{ xs: xs, md: md }}>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field }) => (
                    <div style={{ width: '100%', marginBottom: '1rem' }}>
                        {displayLabel && (
                            <Typography
                                mb={'12px'}
                                fontWeight={600}
                                fontSize={fieldSize === 'small' ? '16px' : '18px'}
                                sx={{ textAlign: 'left' }}
                            >
                                {label} {rules?.required && <span style={{ color: '#d4af37' }}>*</span>}
                            </Typography>
                        )}
                        <Renderer
                            {...field}
                            disabled={disabled}
                            placeholder={label}
                            label={label}
                            error={errors[name]}
                            fieldSize={fieldSize}
                            {...fieldProps}
                        />
                    </div>
                )}
            />
        </Grid>
    );
};

export const FieldGroup = ({
                               formFields,
                               displayLabel = false,
                               fieldSize = 'small',
                           }: {
    formFields: Array<any>;
    displayLabel?: boolean;
    fieldSize?: 'medium' | 'small';
}) => {
    return (
        // Using Grid2 (imported as Grid) handles containers more reliably in Next.js
        <Grid container spacing={fieldSize === 'small' ? 2 : 4} sx={{ width: '100%' }}>
            {formFields.map((formField: any, index: number) => (
                <Field
                    key={formField.name || index}
                    formField={formField}
                    displayLabel={displayLabel}
                    fieldSize={fieldSize}
                />
            ))}
        </Grid>
    );
};