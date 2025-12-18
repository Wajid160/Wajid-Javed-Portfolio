import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
    images: string[];
    alt: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, alt }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full">
            {/* Image Container */}
            <div
                className="relative w-full aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden"
            >
                <img
                    src={images[currentIndex]}
                    alt={`${alt} - Result ${currentIndex + 1}`}
                    className="w-full h-full object-contain"
                />

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                            aria-label="Next image"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </>
                )}
            </div>

            {/* Dot Indicators */}
            {images.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToImage(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                ? 'bg-blue-600 dark:bg-cyan-400 w-8'
                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
