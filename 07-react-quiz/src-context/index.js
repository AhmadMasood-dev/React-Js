import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import QuizContext from "./context/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QuizContext.Provider>
      <App />
    </QuizContext.Provider>
  </React.StrictMode>
);
