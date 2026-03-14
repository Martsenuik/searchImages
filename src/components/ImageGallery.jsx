export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map((image) => (
        <li key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </li>
      ))}
    </ul>
  );
};
