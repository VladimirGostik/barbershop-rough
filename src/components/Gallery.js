// src/components/Gallery.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const images = [
  { src: 'images/photo1.jpg', alt: 'Haircut 1' },
  { src: 'images/photo2.jpg', alt: 'Haircut 2' },
  { src: 'images/photo3.jpg', alt: 'Haircut 3' },
];

Modal.setAppElement('#root');

const Gallery = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleOverlayClick = (event) => {
    // Close modal only if the user clicks directly on the overlay
    if (event.target.className === 'Overlay') {
      closeModal();
    }
  };

  return (
    <section>
      <h2>Gallery</h2>
      <div className="gallery">
        {images.map((image, index) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            onClick={() => openModal(index)}
          />
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal" overlayClassName="Overlay" onClick={handleOverlayClick}>
        <button className="close-button" onClick={closeModal}>×</button>
        <button className="nav-button prev" onClick={prevImage}>&#10094;</button>
        <button className="nav-button next" onClick={nextImage}>&#10095;</button>
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="modal-image" />
      </Modal>
    </section>
  );
};

export default Gallery;
