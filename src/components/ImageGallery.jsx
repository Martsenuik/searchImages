export const ImageGallery = ({ images, onImageClick }) => (
  <div className="gallery">
    {images.map((image) => (
      <img
        key={image.id}
        src={image.previewURL}
        alt={image.tags}
        className="thumbnail"
        onClick={() => onImageClick(image.largeImageURL)}
      />
    ))}
  </div>
);
