import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>hI.</p>;
}
render(<Hi />, document.getElementById("app"));
