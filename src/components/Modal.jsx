import PropTypes from "prop-types"; 
import "./Modal.css";

const Modal = ({ images, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="images-container">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={`Image ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
    })
  ).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
