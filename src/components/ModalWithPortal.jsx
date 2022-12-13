import "./modal.css";
import { createPortal } from "react-dom";

const ModalWithPortal = ({
  film,
  isOpenPortal,
  setIsOpenPortal,
  productName = "",
}) => {
  if (!isOpenPortal) return null;

  return createPortal(
    <div className="modal-container">
      <div className="modal-header d-flex flex-column">
        <div className="d-flex">
        <div className="me-2">
          <img height={200} src={film?.images["Poster Art"].url} alt="" />
        </div>
        <div className="pt-2 ps-1">
          <h5>{film.title}</h5>
          <p>{film.description}</p>
        </div>
        </div>
      </div>
        <button className="btn btn-danger" onClick={() => setIsOpenPortal(false)}>
        Close modal
      </button>
      
    </div>,
    document.getElementById("ana-div")
  );
};

export default ModalWithPortal;
