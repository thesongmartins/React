import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Pizza Menu</h1>;
}

// React Version 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
