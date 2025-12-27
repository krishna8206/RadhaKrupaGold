import React from 'react';
import styles from './OrderForm.module.scss';

export const FormInput = (props: any) => (
    <div className={styles.inputWrapper}>
        <input {...props} />
        {props.error && <p className={styles.errorText}>{props.error.message}</p>}
    </div>
);

export const FormSelect = (props: any) => (
    <div className={styles.inputWrapper}>
        <select {...props}>
            <option value="" disabled>{props.placeholder}</option>
            {props.options?.map((opt: any) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
        {props.error && <p className={styles.errorText}>{props.error.message}</p>}
    </div>
);

export const FormTextarea = (props: any) => (
    <div className={styles.inputWrapper}>
        <textarea {...props} />
        {props.error && <p className={styles.errorText}>{props.error.message}</p>}
    </div>
);