// index.js or App.js (or any other root component file)
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import the Provider component
import { store } from "./redux/store"; // Import store explicitly, assuming it's exported as named export 'store'
import App from "./App"; // Your main App component

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
