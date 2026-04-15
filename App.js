import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reached the JS) - Parcel - Babel

// JSX ==> Babel transpiles it to React.createElement => ReactElement - JS Object => HTMLElement(render)

//JSX - HTML-like or XML-like syntax
const jsxheading = <h1 className="head" tabIndex="5">Namaste React using JSX 🚀</h1>
console.log('jsxHeading', jsxheading);
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);