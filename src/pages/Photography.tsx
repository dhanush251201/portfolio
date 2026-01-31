import { useState } from "react";
import Lightbox from "../components/Lightbox";
import Navigation from "../components/Navigation";

// Placeholder photos - replace with your actual photos
const photos = [
  { id: 1, src: "https://picsum.photos/seed/1/800/600", alt: "Photo 1", category: "landscape" },
  { id: 2, src: "https://picsum.photos/seed/2/800/600", alt: "Photo 2", category: "street" },
  { id: 3, src: "https://picsum.photos/seed/3/800/600", alt: "Photo 3", category: "portrait" },
  { id: 4, src: "https://picsum.photos/seed/4/800/600", alt: "Photo 4", category: "landscape" },
  { id: 5, src: "https://picsum.photos/seed/5/800/600", alt: "Photo 5", category: "street" },
  { id: 6, src: "https://picsum.photos/seed/6/800/600", alt: "Photo 6", category: "portrait" },
  { id: 7, src: "https://picsum.photos/seed/7/800/600", alt: "Photo 7", category: "landscape" },
  { id: 8, src: "https://picsum.photos/seed/8/800/600", alt: "Photo 8", category: "street" },
  { id: 9, src: "https://picsum.photos/seed/9/800/600", alt: "Photo 9", category: "portrait" },
  { id: 10, src: "https://picsum.photos/seed/10/800/600", alt: "Photo 10", category: "landscape" },
  { id: 11, src: "https://picsum.photos/seed/11/800/600", alt: "Photo 11", category: "street" },
  { id: 12, src: "https://picsum.photos/seed/12/800/600", alt: "Photo 12", category: "portrait" },
];

const categories = ["all", "landscape", "street", "portrait"];

export function Photography() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    selectedCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === selectedCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const goToNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  return (
    <div className="photography-page">
      <div className="terminal-window">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-title">~/photography</span>
        </div>
        <div className="terminal-body">
          <p className="prompt">ls ./photos</p>
          <div className="output">
            <div className="gallery-header">
              <h1 className="gallery-title">Photography</h1>
            </div>

            <div className="category-filter">
              <span className="filter-label">$ filter --category=</span>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="photo-grid">
              {filteredPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="photo-item"
                  onClick={() => openLightbox(index)}
                >
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  <div className="photo-overlay">
                    <span className="photo-filename">{photo.alt}.jpg</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="photo-count">
              {filteredPhotos.length} file(s) found
            </p>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photo={filteredPhotos[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={goToPrev}
          onNext={goToNext}
          currentIndex={lightboxIndex}
          totalCount={filteredPhotos.length}
        />
      )}

      <Navigation />
    </div>
  );
}

export default Photography;
