import React from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import {
  hideDeleteContactForm,
  deleteContacts,
} from "../../actionCreators/MainAction";

const DeleteContact = (props) => {
  const handleDelete = () => {
    console.log(props.dataDelete);
    props.deleteContacts(props.dataDelete);
  };
  return (
    <Modal show={props.show} onHide={props.hideDeleteContactForm}>
      <Modal.Header closeButton>
        <Modal.Title className="h5">
          Are You Sure Want to Delete Your Friend, "{props.dataDelete.username}
          "?
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideDeleteContactForm}>
          No
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  // console.log(state.mainReducer.dataDelete);
  return {
    show: state.mainReducer.isShowDelete,
    dataDelete: state.mainReducer.dataDelete,
  };
};

const mapDispatchToProps = {
  hideDeleteContactForm,
  deleteContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContact);
