import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "child1" }, [
        React.createElement("h1", { key: "h1-1" }, "I am an h1 tag"),
        React.createElement("h2", { key: "h2-1" }, "this is a h2 tag of child 1")
    ]),
    React.createElement("div", { id: "child2", key: "child2" }, [
        React.createElement("h1", { key: "h1-2" }, "I'm an h1 tag of child2"),
        React.createElement("h2", { key: "h2-2" }, "I'm an h2 tag")
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);