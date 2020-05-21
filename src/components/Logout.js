import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import logo from "./../assets/logo.png";
import { connect } from "react-redux";
import { logout } from "../actionCreators/LoginAction";

const Logout = (props) => {
  const history = useHistory();

  props.logout();
  history.push("/login");

  return (
    <div className="bg-semidark">
      <div className="row vh-100 d-flex">
        <div className="col align-self-center">
          <div className="container text-center">
            <img src={logo} alt="logo" />
            <p>
              <b>"Executive Chatbox, for Professionals.</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.login.token,
  };
};

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
