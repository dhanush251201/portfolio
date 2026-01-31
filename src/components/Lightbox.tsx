import { useEffect } from "react";

interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface LightboxProps {
  photo: Photo;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-header">
          <span className="lightbox-info">
            [{currentIndex + 1}/{totalCount}] {photo.alt}.jpg
          </span>
          <button className="lightbox-close" onClick={onClose}>
            [x] close
          </button>
        </div>

        <div className="lightbox-image-container">
          <button className="lightbox-nav lightbox-prev" onClick={onPrev}>
            {"<"}
          </button>
          <img src={photo.src} alt={photo.alt} className="lightbox-image" />
          <button className="lightbox-nav lightbox-next" onClick={onNext}>
            {">"}
          </button>
        </div>

        <div className="lightbox-footer">
          <span className="lightbox-hint">
            $ hint: use arrow keys to navigate, esc to close
          </span>
        </div>
      </div>
    </div>
  );
}

export default Lightbox;
