import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import ShowDetailContainer from '../shows/show_detail_container'

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>{ShowDetailContainer}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
