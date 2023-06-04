import React, { useState } from "react";
import styles from "./Slider.module.css";

interface SliderProps {
    slides: any[];
}

export default function Slider({ slides }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    function prevSlide() {
        const isFirstSlide = currentSlide === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
        setCurrentSlide(newIndex);
    };

    function nextSlide() {
        const isLastSlide = currentSlide !== slides.length - 1;
        const newIndex = isLastSlide ? currentSlide + 1 : 0;
        setCurrentSlide(newIndex);
    }

    function goToSlide(id: number) {
        return () => {
            const newIndex = id;
            setCurrentSlide(newIndex);
        };
    }

    let curIndex = currentSlide;

    const slideSrc = slides[currentSlide].url;

    const slideStyles = {
        backgroundImage: `url(${slideSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className={styles.slider}>
            <div className={styles["slider-control"]}>
                <p
                    className={`${styles["slider-text"]} ${styles["slider-text_left"]}`}
                >
                    Prev
                </p>
                <button
                    className={`${styles["slider-button"]} ${styles["slider-prev"]}`}
                    onClick={prevSlide}
                >
                    <svg
                        width="50"
                        height="30"
                        viewBox="0 0 50 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M50 15C50 14.558 49.8119 14.1342 49.477 13.8217C49.1421 13.5091 48.688 13.3336 48.2144 13.3336H6.09923L17.3378 2.84837C17.5038 2.69343 17.6355 2.5095 17.7254 2.30706C17.8152 2.10462 17.8615 1.88765 17.8615 1.66854C17.8615 1.44942 17.8152 1.23245 17.7254 1.03002C17.6355 0.82758 17.5038 0.643641 17.3378 0.488703C17.1718 0.333765 16.9747 0.210862 16.7578 0.12701C16.5409 0.0431581 16.3084 0 16.0736 0C15.8388 0 15.6063 0.0431581 15.3894 0.12701C15.1725 0.210862 14.9754 0.333765 14.8094 0.488703L0.524587 13.8202C0.358301 13.975 0.22637 14.1589 0.136353 14.3613C0.0463356 14.5638 0 14.7808 0 15C0 15.2192 0.0463356 15.4362 0.136353 15.6387C0.22637 15.8411 0.358301 16.025 0.524587 16.1798L14.8094 29.5113C14.9754 29.6662 15.1725 29.7891 15.3894 29.873C15.6063 29.9568 15.8388 30 16.0736 30C16.3084 30 16.5409 29.9568 16.7578 29.873C16.9747 29.7891 17.1718 29.6662 17.3378 29.5113C17.5038 29.3564 17.6355 29.1724 17.7254 28.97C17.8152 28.7675 17.8615 28.5506 17.8615 28.3315C17.8615 28.1123 17.8152 27.8954 17.7254 27.6929C17.6355 27.4905 17.5038 27.3066 17.3378 27.1516L6.09923 16.6664H48.2144C48.688 16.6664 49.1421 16.4909 49.477 16.1783C49.8119 15.8658 50 15.442 50 15Z"
                            fill="#5E5E5E"
                        />
                    </svg>
                </button>
            </div>
            <div className={styles["slider-content"]}>
                <div className={styles["slider-img"]} style={slideStyles}></div>
                <div className={styles["slider-dots"]}>
                    {slides.map((slide: any) => (
                        <button
                            key={slide.id}
                            onClick={goToSlide(slide.id)}
                            className={`${
                                slide.id === curIndex
                                    ? styles["slider-dot"] +
                                      " " +
                                      styles["slider-dot_active"]
                                    : styles["slider-dot"]
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
            <div className={styles["slider-control"]}>
                <p
                    className={`${styles["slider-text"]} ${styles["slider-text_right"]}`}
                >
                    Next
                </p>
                <button
                    className={`${styles["slider-button"]} ${styles["slider-next"]}`}
                    onClick={nextSlide}
                >
                    <svg
                        width="50"
                        height="30"
                        viewBox="0 0 50 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.71825e-07 15C2.71825e-07 14.558 0.188124 14.1342 0.522989 13.8217C0.857854 13.5091 1.31203 13.3336 1.7856 13.3336H43.9008L32.6622 2.84837C32.4962 2.69343 32.3645 2.5095 32.2746 2.30706C32.1848 2.10462 32.1385 1.88765 32.1385 1.66854C32.1385 1.44942 32.1848 1.23245 32.2746 1.03002C32.3645 0.82758 32.4962 0.643641 32.6622 0.488703C32.8282 0.333765 33.0253 0.210862 33.2422 0.12701C33.4591 0.0431581 33.6916 0 33.9264 0C34.1612 0 34.3937 0.0431581 34.6106 0.12701C34.8275 0.210862 35.0246 0.333765 35.1906 0.488703L49.4754 13.8202C49.6417 13.975 49.7736 14.1589 49.8636 14.3613C49.9537 14.5638 50 14.7808 50 15C50 15.2192 49.9537 15.4362 49.8636 15.6387C49.7736 15.8411 49.6417 16.025 49.4754 16.1798L35.1906 29.5113C35.0246 29.6662 34.8275 29.7891 34.6106 29.873C34.3937 29.9568 34.1612 30 33.9264 30C33.6916 30 33.4591 29.9568 33.2422 29.873C33.0253 29.7891 32.8282 29.6662 32.6622 29.5113C32.4962 29.3564 32.3645 29.1724 32.2746 28.97C32.1848 28.7675 32.1385 28.5506 32.1385 28.3315C32.1385 28.1123 32.1848 27.8954 32.2746 27.6929C32.3645 27.4905 32.4962 27.3066 32.6622 27.1516L43.9008 16.6664H1.7856C1.31203 16.6664 0.857854 16.4909 0.522989 16.1783C0.188124 15.8658 2.71825e-07 15.442 2.71825e-07 15Z"
                            fill="#5E5E5E"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
