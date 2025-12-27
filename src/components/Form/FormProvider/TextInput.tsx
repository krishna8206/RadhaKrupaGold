import React from 'react';
import styles from '@/components/UserLogin/LoginPage/Login.module.scss';

export const TextInput = ({ value, onChange, placeholder, type = "text", error }: any) => (
    <div className={styles.inputWrapper}>
        <input
            type={type}
            value={value || ''}
            onChange={onChange}
            placeholder={placeholder}
        />
        {error && <p className={styles.errorText}>{error.message}</p>}
    </div>
);