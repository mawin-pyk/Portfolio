import React, { useState, useRef, useEffect } from 'react';

function FideInSection({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsVisible(entry.isIntersecting);
            });
        });

        const { current } = domRef;
        observer.observe(current);

        return () => {
            observer.unobserve(current);
        }
    }, []);

    return (
        <div className={`fade-in-section ${isVisible ? "is-visible" : ""}`} ref={domRef}>
            {children}
        </div>
    );
}

export default FideInSection;