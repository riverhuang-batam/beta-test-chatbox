import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { hideAboutForm } from "../../actionCreators/MainAction";

const EditAbout = (props) => {
  const [data, setData] = useState({
    about: "",
  });
  console.log(data);

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };
  return (
    <Modal show={props.show} onHide={props.hideAboutForm}>
      <Modal.Header closeButton>
        <Modal.Title>Change Your About</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label for="title">About</label>
          <input
            type="text"
            className="form-control"
            id="about"
            name="about"
            placeholder="change your about here"
            value={data.about}
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideAboutForm}>
          Close
        </Button>
        <Button variant="primary" onClick={props.hideAboutForm}>
          Save Edit Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    show: state.mainReducer.isShowAbout,
  };
};

const mapDispatchToProps = {
  hideAboutForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAbout);
