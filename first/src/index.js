import React from "react";
import ReactDOM from "react-dom";
// import App from './Components';

const App = () => {
  const bText = "Click me!";
  return (
    <div>
      <label htmlFor="name" className="label">
        Enter e-mail
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "red", color: "white" }}>
        {bText}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
