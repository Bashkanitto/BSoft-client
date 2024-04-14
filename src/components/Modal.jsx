
const Modal = ({ images, closeModal }) => {
  return (
    <div id="modal" style={{ width: "50%", maxHeight:'100%',position: "fixed", top: "50%", right: "50%", transform: "translate(50%, -50%)" }}>
      <div className="modal-content bg-white p-4" style={{ maxHeight: "80vh", overflowY: "auto" }}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <div className="image-column">
          {images.map((image, index) => (
            <img
              key={image.index}
              src={image.src}
              alt={`Image ${index}`}
              className="mb-2"
            />
          ))}
        </div>
      </div>
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 py-2 px-4 bg-gray-800 text-white rounded-md"
      >
        ×
      </button>
    </div>
  );
};

export default Modal;
