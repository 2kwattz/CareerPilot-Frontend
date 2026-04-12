import React, { useEffect, useState } from "react";
import styles from "./homeCarousel.module.css";

import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";

const slides = [
    {
        image: carousel1,
        alt: "Young professional exploring career opportunities",
        eyebrow: "Find Your Direction",
        title: "Career moves feel clearer when the right opportunities come to you.",
        description: "Discover jobs, guidance, and a support system designed for your next step."
    },
    {
        image: carousel2,
        alt: "Job seeker building momentum with career support",
        eyebrow: "Build Momentum",
        title: "Turn curiosity into confidence with a calmer, smarter job search.",
        description: "Track openings, learn from your community, and stay focused on work that fits."
    }
];

export default function HomeCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 3000);

        return () => window.clearInterval(intervalId);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <section className={styles.carouselSection}>
            <div className={styles.carouselShell}>
                <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.leftArrow}`}
                    onClick={goToPrevious}
                    aria-label="Show previous slide"
                >
                    &#8592;
                </button>

                <div className={styles.slideViewport}>
                    <div
                        className={styles.track}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide) => (
                            <article className={styles.slide} key={slide.title}>
                                <div className={styles.imagePanel}>
                                    <img src={slide.image} alt={slide.alt} className={styles.slideImage} />
                                </div>

                                <div className={styles.contentPanel}>
                                    <span className={styles.eyebrow}>{slide.eyebrow}</span>
                                    <h1 className={styles.title}>{slide.title}</h1>
                                    <p className={styles.description}>{slide.description}</p>
                                    <a href="/jobs" className={styles.ctaLink}>
                                        Explore Jobs
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    className={`${styles.arrowButton} ${styles.rightArrow}`}
                    onClick={goToNext}
                    aria-label="Show next slide"
                >
                    &#8594;
                </button>
            </div>

            <div className={styles.indicators}>
                {slides.map((slide, index) => (
                    <button
                        key={slide.title}
                        type="button"
                        className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
