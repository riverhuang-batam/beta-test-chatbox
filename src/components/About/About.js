import React from "react";
// import { Link } from "react-router-dom";
import Ozy from "../../assets/ozy.jpg";
import Intan from "../../assets/intan.jpg";
import River from "../../assets/river.jpg";
import Fred from "../../assets/fred.jpeg";
import logoPicture from "../../assets/logo.png";
import "../style.css";

export default function About() {
  return (
    <div className="row mx-0">
      <div className="col-md-4 main-chat-2 vh-100">
        <div className="text-center">
          <img
            src={logoPicture}
            alt="..."
            className="rounded-circle w-50 pt-4"
          />
          <h5 className="text-white font-weight-bold pt-4 pb-2">
            ABOUT CIRCLE MESSENGER
          </h5>
          <h6 className="text-white text-justify mx-3">
            Circle Messenger is made for Business. We are here to help you send
            your messages inside your own social circle. Whereever you are and
            whenever you want. Share the love and purpose to your friends,
            family, and mates over the world!
          </h6>
          <div className="d-flex justify-content-center">
            <p className="text-white copyright-txt">
              © CircleMessenger. All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-8 bg-light">
        {/* <div className="text-center">
          <img src={aboutPicture} alt="..." className="w-100" />
          <h1>Chatboxo,</h1>
          <h3>“Executive Chatbox, for Professionals.”</h3>
        </div> */}

        <div className="container">
          <div className="scrollable-div-about">
            <h1 className="font-weight-bold text-dark text-center pt-3 pb-2">
              OUR TEAM
            </h1>
            <div className="row mx-0 d-flex justify-content-center">
              <div className="col-5 col-md-5">
                <div className="card about-card">
                  <img
                    src={Fred}
                    className="card-img-top w-75 mx-auto d-block pt-4 rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Frederick</h5>
                    <p className="card-text">
                      Hello! I'm Frederick, creating solutions for problems in
                      this 4.0 Era is a great thing to do for me, why not we
                      greet each other?
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/chen-frederick-1324301a8/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-5 ">
                <div className="card about-card">
                  <img
                    src={Ozy}
                    className="card-img-top w-75 mx-auto d-block pt-4 rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">
                      Ahmad Fakhrozy
                    </h5>
                    <p className="card-text">
                      Hello! I'm Ahmad Fakhrozy, creating solutions for problems
                      in this 4.0 Era is a great thing to do for me, why not we
                      greet each other?
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/ahmad-fakhrozy-9069741a1/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mx-0 d-flex justify-content-center">
              <div className="col-5 col-md-5 pt-4">
                <div className="card about-card">
                  <img
                    src={River}
                    className="card-img-top w-75 mx-auto d-block pt-4 rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">River Huang</h5>
                    <p className="card-text">Santuyyyyyyyy...</p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/river-huang-43a979192/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-5 col-md-5 pt-4">
                <div className="card about-card">
                  <img
                    src={Intan}
                    className="card-img-top w-75 mx-auto d-block pt-4 rounded-circle"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">Intan Adela</h5>
                    <p className="card-text">
                      Hi! I'm Intan Adela, student of Glints Academy. Leave a
                      job opportunity in my LinkedIn's inbox.
                    </p>
                    <a
                      target="blank"
                      href="https://www.linkedin.com/in/intanadela/"
                      className="btn btn-light text-dark"
                    >
                      Check My LinkedIn!
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
