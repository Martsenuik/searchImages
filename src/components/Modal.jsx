export const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="Overlay" onClick={onClose}>
      <div className="Modal" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Enlarged" className="modal-img" />
      </div>
    </div>
  );
};
