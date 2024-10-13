import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Shop from "./components/Shop/Shop";
import fakeData from "./fakeData";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
