import React, { useState } from 'react';

interface MemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  memes: string[];
}

export const MemeModal: React.FC<MemeModalProps> = ({ isOpen, onClose, memes }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % memes.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + memes.length) % memes.length);
  };

  return (
    <div className="meme-modal-overlay" onClick={onClose}>
      <div className="meme-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="meme-modal-close" onClick={onClose}>✕</button>
        <h2 style={{ fontFamily: "'Courier New', Courier, monospace", margin: '0 0 20px 0', color: '#eae6ff', fontSize: '1.5rem', alignSelf: 'center' }}>memes I like</h2>
        
        {memes.length > 0 ? (
          <div className="meme-carousel">
            <button className="meme-nav-btn prev-btn" onClick={handlePrev}>❮</button>
            <div className="meme-image-container">
              <img src={memes[currentIndex]} alt={`Meme ${currentIndex + 1}`} className="meme-image" />
            </div>
            <button className="meme-nav-btn next-btn" onClick={handleNext}>❯</button>
          </div>
        ) : (
          <p>No memes found.</p>
        )}
        <div className="meme-counter">
          {memes.length > 0 ? `${currentIndex + 1} / ${memes.length}` : ''}
        </div>
      </div>
    </div>
  );
};
