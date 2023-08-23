
const Modal = (props) => {

    return <div className="modal">
        <p>Are you sure to delete?</p>
        <button onClick={props.onClose} className="btn btn--alt"> Cancel </button>
        <button onClick={props.onClose} className="btn"> Delete </button>
    </div>
}

export default Modal;