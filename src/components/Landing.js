import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import './style.css'
import logo from './../assets/logo.png'
import { connect } from 'react-redux'
import { login } from './../actionCreators/LoginAction'

const Landing = (props) => {
  const { token } = props
  const history = useHistory()

  useEffect(() => {
    // console.log('token', token)
    if (token) {
      history.push('/home')
    } else {
      history.push('/login')
    }
  }, [token, history])

  return (
    <div className="bg-semidark">
      <div className="row vh-100 d-flex">
        <div className="col align-self-center">
          <div className="container text-center">
            <img src={logo} alt="logo" />
            <p><b>"Executive Chatbox, for Professionals.</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.login.token
  }
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Landing)