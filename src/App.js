import React, { useState } from "react";
import TextEditor from "./components/TextEditor";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="app">
      <Header />
      <TextEditor setValue={setValue} />
      <p className="html-p">All content give as HTML form in below</p>
      <div className="htmlForm">{value}</div>
    </div>
  );
}

export default App;
