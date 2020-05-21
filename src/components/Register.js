import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./style.css";
import logo from "./../assets/logo.png";
import { connect } from "react-redux";
import { register } from "./../actionCreators/LoginAction";
import { Alert, Form } from "react-bootstrap";

const Register = (props) => {
  const { alert, token, error } = props;
  const history = useHistory();
  const [data, setData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
    error[name] = "";
    alert.show = false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(data)
    props.register(data);
  };

  useEffect(() => {
    // console.log('token', token)
    if (token) {
      history.push("/home");
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

  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <div className="bg-semidark">
      <div className="row vh-100 d-flex m-0">
        <div className="col align-self-center">
          <div className="container text-center">
            <img src={logo} alt="logo" />
            <p>
              <b>"Executive Chatbox, for Professionals.</b>
            </p>
          </div>
        </div>
        <div className="col align-self-center">
          <div className="container text-center form">
            <h2>CIRCLE MESSENGER</h2>
            <AlertDismissible />
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <span className="input-icon">
                  <i className="fas fa-user"></i>
                </span>
                <Form.Control
                  type="text"
                  className="with-icon"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={data.username}
                  isInvalid={!!error.username}
                />
                <Form.Control.Feedback type="invalid" className="text-left">
                  {error.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <span className="input-icon">
                  <i className="fas fa-envelope"></i>
                </span>
                <Form.Control
                  type="email"
                  className="with-icon"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  value={data.email}
                  isInvalid={!!error.email}
                />
                <Form.Control.Feedback type="invalid" className="text-left">
                  {error.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <span className="input-icon">
                  <i className="fas fa-mobile-alt"></i>
                </span>
                <Form.Control
                  type="text"
                  className="with-icon"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={data.phoneNumber}
                  isInvalid={!!error.phoneNumber}
                />
                <Form.Control.Feedback type="invalid" className="text-left">
                  {error.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <span className="input-icon">
                  <i className="fas fa-key"></i>
                </span>
                <Form.Control
                  type="password"
                  className="with-icon"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={data.password}
                  isInvalid={!!error.password}
                />
                <Form.Control.Feedback type="invalid" className="text-left">
                  {error.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <span className="input-icon">
                  <i className="fas fa-key"></i>
                </span>
                <Form.Control
                  type="password"
                  className="with-icon"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={data.confirmPassword}
                  isInvalid={!!error.confirmPassword}
                />
                <Form.Control.Feedback type="invalid" className="text-left">
                  {error.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <button className="btn btn-light btn-block" type="submit">
                REGISTER
              </button>
              <Link to="/login">
                <button className="btn btn-link text-white">
                  Already Register? Login{" "}
                  <i className="fas fa-long-arrow-alt-right"></i>
                </button>
              </Link>
            </Form>
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
    error: state.login.error,
  };
};

const mapDispatchToProps = { register };

export default connect(mapStateToProps, mapDispatchToProps)(Register);
