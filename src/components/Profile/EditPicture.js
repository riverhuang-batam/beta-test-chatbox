import React from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { hideChangeImageForm } from "../../actionCreators/MainAction";

const EditPicture = (props) => {
  return (
    <Modal show={props.show} onHide={props.hideChangeImageForm}>
      <Modal.Header closeButton>
        <Modal.Title className="h5">Change Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form action="/profile" method="post" enctype="multipart/form-data">
          <input type="file" name="image" />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideChangeImageForm}>
          Close
        </Button>
        <Button variant="primary" onClick={props.hideChangeImageForm}>
          Change
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    show: state.mainReducer.isShowPictureForm,
  };
};

const mapDispatchToProps = {
  hideChangeImageForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPicture);
