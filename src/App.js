import React from "react";
import MonstersState from "./context/monsters/monsters-state";
import HomePage from "./pages/home-page.component";
import "./app.styles.css";

const App = () => {
  return (
    <MonstersState>
      <HomePage />
    </MonstersState>
  );
};

export default App;
