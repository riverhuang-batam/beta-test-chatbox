import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { connect } from "react-redux";

import { hideEditForm } from "../../actionCreators/MainAction";

const EditName = (props) => {
  const [data, setData] = useState({
    username: "",
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
    <Modal show={props.show} onHide={props.hideEditForm}>
      <Modal.Header closeButton>
        <Modal.Title>Change Your Name</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="form-group">
          <label htmlFor="title">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="change your username here"
            value={data.username}
            onChange={handleChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.hideEditForm}>
          Close
        </Button>
        <Button variant="primary" onClick={props.hideEditForm}>
          Save Edit Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    show: state.mainReducer.isShowEdit,
  };
};

const mapDispatchToProps = {
  hideEditForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditName);
