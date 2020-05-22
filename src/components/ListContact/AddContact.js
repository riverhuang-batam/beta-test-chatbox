import React, { useState, useEffect } from "react";
import { Modal, Alert } from "react-bootstrap";
import { connect } from "react-redux";

import {
  hideAddContactForm,
  getDataUser,
  AddContacts,
} from "../../actionCreators/MainAction";

const AddContact = (props) => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    username: "",
  });

  const handleAdd = (data) => {
    props.AddContacts(data._id);
    setShow(true);
    // window.alert(`You have added "${data.username}"`);
  };

  const AlertDismissible = () => {
    if (show) {
      return (
        <Alert variant="success">
          <Alert.Heading className="h5">
            You've Successfully added an User!
          </Alert.Heading>
        </Alert>
      );
    }
    return <></>;
  };

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
    props.getDataUser(value);
  };

  useEffect(() => {
    props.getDataUser();
  }, []);

  return (
    <Modal show={props.show} onHide={props.hideAddContactForm}>
      <Modal.Header closeButton>
        <Modal.Title>Search Your Friend</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AlertDismissible />
        <div className="form-group">
          <label htmlFor="title">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter your Friend's Username"
            value={data.username}
            onChange={handleChange}
          />
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Friends</th>
              <th scope="col">Photo</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {props.dataUser.map((item, index) => {
              // console.log(props.dataUser);
              return (
                <tr key={index}>
                  <th scope="row">{1 + index}</th>
                  <td>{item.username}</td>
                  <td>
                    <img src={item.image} className="img-search" alt={item.image} />
                  </td>
                  <td>
                    <p
                      onClick={() => {
                        handleAdd(item);
                      }}
                      className="my-0 contact-icon3"
                    >
                      <i className="fas fa-user-plus" />
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    show: state.mainReducer.isShowAdd,
    dataUser: state.mainReducer.dataUser,
  };
};

const mapDispatchToProps = {
  hideAddContactForm,
  getDataUser,
  AddContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
