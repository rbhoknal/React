import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", { id: "heading" }, "Namaste React 🚀");
console.log("heading", heading);

//JSX - HTML-like or XML-like syntax
const jsxheading = <h1 id="heading">Namaste React using JSX 🚀</h1>
console.log('jsxHeading', jsxheading);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);