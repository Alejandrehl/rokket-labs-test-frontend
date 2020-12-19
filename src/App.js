import React from "react";
import { ToastProvider } from "react-toast-notifications";
import MonstersState from "./context/monsters/monsters-state";
import HomePage from "./pages/home-page.component";
import "./app.styles.css";

const App = () => {
  return (
    <ToastProvider>
      <MonstersState>
        <HomePage />
      </MonstersState>
    </ToastProvider>
  );
};

export default App;
