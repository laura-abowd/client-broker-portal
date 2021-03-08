import React from "react";
import "./App.css";
import Nav from "./Nav";
import Client from "./Client";
import Broker from "./Broker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/container";

function App() {
  return (
    <Router>
      <div>
        <Container style={styles.grayContainer}>
          <Nav />
          <Switch>
            <Route path="/" exact component={Broker} />
            <Route path="/client" component={Client} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

const styles = {
  grayContainer: {
    backgroundColor: "#F2F2F2",
    height: "100vh",
  },
};

export default App;
