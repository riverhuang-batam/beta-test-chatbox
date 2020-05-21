import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
import homePicture from "../../assets/text.png";
import ListContactItem from "./ItemListContact";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  getDataContact,
  showAddContactForm,
} from "../../actionCreators/MainAction";

import AddContact from "../ListContact/AddContact";
import DeleteContact from "../ListContact/DeleteContact";
import "../style.css";

const ListContact = (props) => {
  const history = useHistory();

  useEffect(() => {
    props.getDataContact();
  }, []);

  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100 px-0 scrollable-div">
        <div className="list-group">
          <div className="list-group-item list-group-item-action py-0">
            <div className="d-flex d-row justify-content-center mt-2">
              <h4 className="text-white py-2">YOUR CONTACTS</h4>
              <p
                style={{ cursor: "pointer" }}
                onClick={props.showAddContactForm}
                className="contact-icon my-0"
              >
                <i className="fas fa-user-plus" />
              </p>
            </div>
            <div className="form-group h-100  mb-4">
              <span className="input-icon">
                <i className="fas fa-search" />
              </span>
              <input
                type="text"
                className="form-control with-icon h6 my-0"
                placeholder="Search Contacts..."
              />
            </div>
          </div>
        </div>

        <div>
          {props.dataContact.map((item, index) => {
            // console.log(props.dataContact);
            return (
              <ListContactItem
                key={index}
                dataContacts={item}
                history={history}
              />
            );
          })}
        </div>
      </div>

      <div className="col-md-8 bg-light vh-100">
        <div className="text-center center-div">
          <img src={homePicture} alt="..." className="w-50" />
          <h1>This is your List Contact</h1>
          <h3>"You can modify your list contact here."</h3>
        </div>
      </div>
      <AddContact />
      <DeleteContact />
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    dataContact: state.mainReducer.dataContact,
  };
};
const mapDispatchToProps = {
  getDataContact,
  showAddContactForm,
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContact);
