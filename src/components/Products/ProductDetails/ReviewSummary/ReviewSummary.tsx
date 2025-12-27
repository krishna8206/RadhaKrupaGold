"use client";

import React, { useState, ChangeEvent } from "react";
import { FaStar, FaRegStar, FaUpload, FaTimes } from "react-icons/fa";
import styles from "./ReviewSummary.module.scss";

const ReviewSummary = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    // Updated to an Array to hold multiple previews
    const [previews, setPreviews] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);

    const [ratings, setRatings] = useState({ quality: 0, packaging: 0, delivery: 0 });
    const [hoverRatings, setHoverRatings] = useState({ quality: 0, packaging: 0, delivery: 0 });

    const MAX_PHOTOS = 5;

    const ratingCategories = [
        { key: "quality", label: "Product Quality" },
        { key: "packaging", label: "Packaging" },
        { key: "delivery", label: "Delivery Speed" },
    ];

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null);
        const files = e.target.files;
        if (!files) return;

        const newFilesArray = Array.from(files);

        // Check if adding these new files exceeds the limit
        if (previews.length + newFilesArray.length > MAX_PHOTOS) {
            setError(`You can only upload a maximum of ${MAX_PHOTOS} photos.`);
            return;
        }

        newFilesArray.forEach((file) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviews((prev) => [...prev, reader.result as string]);
            };
            reader.readAsDataURL(file);
        });
    };

    const removeImage = (index: number) => {
        setPreviews((prev) => prev.filter((_, i) => i !== index));
        setError(null);
    };

    const handleStarClick = (category: string, value: number) => {
        setRatings((prev) => ({ ...prev, [category]: value }));
    };

    const handleMouseEnter = (category: string, value: number) => {
        setHoverRatings((prev) => ({ ...prev, [category]: value }));
    };

    const handleMouseLeave = (category: string) => {
        setHoverRatings((prev) => ({ ...prev, [category]: 0 }));
    };

    return (
        <div className={styles.reviewContainer}>
            <h2 className={styles.mainHeading}>Customer Reviews</h2>

            <div className={styles.summaryGrid}>
                {/* Summary content remains the same... */}
                <div className={styles.averageSection}>
                    <div className={styles.starsRow}>
                        {[...Array(5)].map((_, i) => <FaRegStar key={i} />)}
                    </div>
                    <p className={styles.scoreText}>0 out of 5</p>
                    <p className={styles.basedOn}>Based on 0 reviews</p>
                    <a href="#" className={styles.easyReviews}>Collected by EasyReviews</a>
                </div>

                <div className={styles.barsSection}>
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className={styles.barRow}>
                            <div className={styles.starIcons}>
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className={i < stars ? styles.filledStar : styles.fadedStar} />
                                ))}
                            </div>
                            <div className={styles.track}><div className={styles.filler} style={{ width: '0%' }}></div></div>
                            <span className={styles.count}>0</span>
                        </div>
                    ))}
                </div>

                <div className={styles.actionSection}>
                    <button className={styles.toggleBtn} onClick={() => setIsFormOpen(!isFormOpen)}>
                        {isFormOpen ? "Cancel review" : "Write a review"}
                    </button>
                </div>
            </div>

            {isFormOpen && (
                <div className={styles.formContainer}>
                    <hr className={styles.divider} />
                    <h3 className={styles.formTitle}>Write a review</h3>

                    {/* Rating Section logic... */}
                    <div className={styles.ratingSection}>
                        <h4>Rating</h4>
                        {ratingCategories.map((cat) => (
                            <div key={cat.key} className={styles.ratingRow}>
                                <span>{cat.label}</span>
                                <div className={styles.interactiveStars}>
                                    {[1, 2, 3, 4, 5].map((star) => {
                                        const isActive = star <= ((hoverRatings as any)[cat.key] || (ratings as any)[cat.key]);
                                        return (
                                            <FaStar
                                                key={star}
                                                className={isActive ? styles.filledStar : styles.fadedStar}
                                                onClick={() => handleStarClick(cat.key, star)}
                                                onMouseEnter={() => handleMouseEnter(cat.key, star)}
                                                onMouseLeave={() => handleMouseLeave(cat.key)}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Review</label>
                        <textarea placeholder="Share details of your experience" rows={5} />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Review Title</label>
                        <input type="text" placeholder="Give your review a title" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Photo (optional)</label>
                        <label className={styles.uploadBox}>
                            <FaUpload />
                            {/* Added 'multiple' attribute */}
                            <input type="file" hidden multiple onChange={handleFileChange} accept="image/*" />
                        </label>

                        {/* Error Message Display */}
                        {error && <p className={styles.errorText}>{error}</p>}

                        {/* MULTIPLE IMAGE PREVIEW AREA */}
                        <div className={styles.previewsWrapper}>
                            {previews.map((src, index) => (
                                <div key={index} className={styles.previewContainer}>
                                    <img src={src} alt={`Preview ${index}`} className={styles.previewImage} />
                                    <button type="button" className={styles.removeBtn} onClick={() => removeImage(index)}>
                                        <FaTimes />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Remaining Input Groups... */}
                    <div className={styles.inputGroup}>
                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Your Email</label>
                        <input type="email" placeholder="Enter your email address" />
                    </div>

                    <div className={styles.formActions}>
                        <button className={styles.cancelFormBtn} onClick={() => setIsFormOpen(false)}>Cancel review</button>
                        <button className={styles.submitBtn}>Submit review</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReviewSummary;