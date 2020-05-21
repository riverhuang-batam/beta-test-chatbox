import React from "react";
// import { Link } from "react-router-dom";
import profilePicture from "../../assets/profile.png";
import logoPicture from "../../assets/ozy.png";

import { connect } from "react-redux";
import { showEditForm } from "../../actionCreators/MainAction";
import { showAboutForm } from "../../actionCreators/MainAction";
import { showChangeImageForm } from "../../actionCreators/MainAction";

import Edit from "./EditName";
import AboutForm from "./EditAbout";
import EditPicture from "./EditPicture";

const Profile = (props) => {
  const showFormEdit = () => {
    props.showEditForm();
  };
  const showFormAbout = () => {
    props.showAboutForm();
  };
  const showFormImage = () => {
    props.showChangeImageForm();
  };
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100 px-0">
        <div className="text-center">
          <div>
            <img
              src={logoPicture}
              alt="..."
              className="rounded-circle w-50 pt-4"
            />
          </div>

          <button
            onClick={showFormImage}
            className="w-100 text-white section-profile mb-2"
          >
            <div className="d-flex d-row justify-content-center">
              <p className="contact-icon my-0">
                <i className="fas fa-camera" />
              </p>

              <h5 className="text-white font-weight-bold pt-4 pb-2 pl-3">
                Change your profile picture
              </h5>
            </div>
          </button>

          <button className="w-75 profile-chat mt-2 pb-2 pl-0">
            <div className="d-flex d-row">
              <div>
                <h6 className="text-black font-weight-bold pt-2 pb-2 my-0">
                  <u>Your Name</u>
                </h6>
                <h6 className="my-0 pl-4 ">Chen Frederick</h6>
              </div>
              <p
                onClick={showFormEdit}
                className="profile-icon ml-auto mr-3 my-0"
              >
                <i className="fas fa-pen-square" />
              </p>
            </div>
          </button>

          <button className="w-75 profile-chat mt-4 pb-2 mb-4 pl-0">
            <div className="d-flex d-row my-1">
              <div>
                <h6 className="text-black font-weight-bold pt-2 pb-2 my-0">
                  <u>About</u>
                </h6>
                <h6 className="pl-4 my-0">Available</h6>
              </div>
              <p
                onClick={showFormAbout}
                className="profile-icon ml-auto mr-3 my-0"
              >
                <i className="fas fa-pen-square" />
              </p>
            </div>
          </button>

          <div className="d-flex justify-content-center">
            <p className="text-white copyright-txt">
              © CircleMessenger. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-8 vh-100">
        <div className="text-center center-div">
          <img src={profilePicture} alt="..." className="w-50" />
          <h1>This is your Profile</h1>
          <h3>"You can modify your Profile details here."</h3>
        </div>
      </div>
      <Edit />
      <AboutForm />
      <EditPicture />
    </div>
  );
};
const mapDispatchToProps = {
  showEditForm,
  showAboutForm,
  showChangeImageForm,
};
export default connect(null, mapDispatchToProps)(Profile);
