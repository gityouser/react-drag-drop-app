import React from "react";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import ConfigurationScreen from "../ConfigurationScreen";

function App() {
  return (
    <BrowserRouter>
      <ConfigurationScreen />
    </BrowserRouter>
  );
}

export default connect()(App);
