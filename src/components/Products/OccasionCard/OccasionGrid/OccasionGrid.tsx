// OccasionGrid.tsx (FIXED)

import React from 'react';
import OccasionCard from '../OccasionCard';
// Assuming the mock types are also in this folder structure
import { OccasionCardData } from '../mock';
import styles from './OccasionGrid.module.scss';

// 🛑 FIX: Define the props interface
interface OccasionGridProps {
    data: OccasionCardData[];
}

// 🛑 FIX: Accept the data prop
export default function OccasionGrid({ data }: OccasionGridProps) {
    return (
        <div className={styles.gridContainer}>
            {/* 🛑 Use the data passed via props */}
            {data.map(item => (
                <OccasionCard key={item.id} data={item} />
            ))}
        </div>
    );
}