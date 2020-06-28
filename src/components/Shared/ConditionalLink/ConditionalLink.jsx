import React from "react";
import { Link } from "react-router-dom";

function ConditionalLink({ condition, path, children }) {
  return condition ? <Link to={path}>{children}</Link> : <>{children}</>;
}

export default ConditionalLink;
