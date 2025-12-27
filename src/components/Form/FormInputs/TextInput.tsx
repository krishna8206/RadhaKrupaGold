'use client';

import React from 'react';
import styles from './Input.module.scss';

interface TextInputProps {
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder?: string;
    error?: any;
    multiline?: boolean;
}

const TextInput = ({
                       value,
                       onChange,
                       placeholder,
                       error,
                       multiline = false,
                   }: TextInputProps) => {
    return (
        <div className={styles.inputWrapper}>
            {multiline ? (
                <textarea
                    value={value || ''}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={error ? styles.error : ''}
                />
            ) : (
                <input
                    value={value || ''}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={error ? styles.error : ''}
                />
            )}
        </div>
    );
};

export default TextInput;
