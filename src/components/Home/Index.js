import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../Login";
import Home from "./Home";
import Sidebar from "./Sidebar";
import Profile from "../Profile/Profile";
import ListContact from "../ListContact/ListContact";
import About from "../About/About";
import Group from "../Group/Group";

export default function Index() {
  return (
    <Router>
      <div className="d-flex flex-row">
        <div className="flex-grow-2">
          <Sidebar />
        </div>
        <div className="flex-fill">
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/listContact">
              <ListContact />
            </Route>

            <Route path="/group">
              <Group />
            </Route>

            <Route path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
      {/* </div> */}
    </Router>
  );
}
