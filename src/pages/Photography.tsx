import { useState } from "react";
import Lightbox from "../components/Lightbox";
import Navigation from "../components/Navigation";

// Import your photos here
// Example:
// import photo1 from "../static/photos/landscape-1.jpg";
// import photo2 from "../static/photos/street-1.jpg";

// Add your photos to this array
// Use the imported photo variable as the src
const photos: { id: number; src: string; alt: string; category: string }[] = [
  // Example entries (uncomment and modify when you add photos):
  // { id: 1, src: photo1, alt: "Mountain Sunset", category: "landscape" },
  // { id: 2, src: photo2, alt: "City Streets", category: "street" },
];

// Update categories based on your photo types
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
