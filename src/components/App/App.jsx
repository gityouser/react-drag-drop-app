import React from "react";
import { connect } from "react-redux";
import AppDrawer from "../AppDrawer";

function App() {
  return <AppDrawer />;
}

export default connect()(App);
