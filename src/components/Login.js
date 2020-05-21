import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import logo from "./../assets/logo.png";
import { connect } from "react-redux";
import { login } from "./../actionCreators/LoginAction";
import { Alert } from "react-bootstrap";

const Login = (props) => {
  const { alert, token } = props;
  const history = useHistory();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
    alert.show = false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data)
    props.login(data);
  };

  useEffect(() => {
    // console.log('token', token)
    if (token) {
      history.push("/");
    }
  }, [token, history]);

  const AlertDismissible = () => {
    const [show, setShow] = useState(alert.show);

    if (show) {
      return (
        <Alert
          variant={alert.variant}
          onClose={() => setShow(false)}
          dismissible
        >
          {alert.message}
        </Alert>
      );
    }
    return <></>;
  };

  return (
    <div className="bg-semidark">
      <div className="row vh-100 d-flex m-0">
        <div className="col align-self-center">
          <div className="container text-center">
            <img src={logo} alt="logo" />
            <p>
              <b>"Executive Chatbox, for Professionals."</b>
            </p>
          </div>
        </div>
        <div className="col align-self-center">
          <div className="container text-center form">
            <h2>CIRCLE MESSENGER</h2>
            <AlertDismissible />
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <span className="input-icon">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control with-icon"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                />
              </div>
              <div className="form-group">
                <span className="input-icon">
                  <i className="fas fa-key"></i>
                </span>
                <input
                  type="password"
                  className="form-control with-icon"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                />
              </div>
              <button className="btn btn-light btn-block" type="submit">
                LOGIN
              </button>
              <Link to="/register">
                <button className="btn btn-link text-white">
                  Create your Account{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    alert: state.login.alert,
    token: state.login.token,
  };
};

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
