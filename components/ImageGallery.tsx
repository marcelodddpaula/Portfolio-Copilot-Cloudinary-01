import React, { useState } from 'react';
import { IMAGES, CATEGORIES } from '../constants';
import { ImageItem, Category } from '../types';
import ImageCard from './ImageCard';
import Lightbox from './Lightbox';

const ImageGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeFilter === 'Todas'
    ? IMAGES
    : IMAGES.filter(image => image.categories.includes(activeFilter as Category));

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };
  
  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const currentImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-center flex-wrap gap-2 mb-8">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => {
                setActiveFilter(category);
                setSelectedIndex(null);
            }}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 border-2 ${
              activeFilter === category
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-light-gray hover:border-primary hover:text-primary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredImages.map((image, index) => (
          <ImageCard key={image.id} image={image} onImageClick={() => handleOpenLightbox(index)} />
        ))}
      </div>
      {currentImage && selectedIndex !== null && (
        <Lightbox 
            image={currentImage} 
            onClose={handleCloseLightbox} 
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={filteredImages.length > 1}
            hasNext={filteredImages.length > 1}
        />
      )}
    </div>
  );
};

export default ImageGallery;