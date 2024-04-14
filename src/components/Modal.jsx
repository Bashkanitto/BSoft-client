const Modal = ({ images, closeModal }) => {
  return (
    <div id="modal" style={{ width: "50%" }}>
      <div className="modal-content bg-white p-4">
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
        <button
          onClick={closeModal}
          className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
