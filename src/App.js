import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import People from "./Components/people";
import React, { useState } from "react";
import Alert from "./Components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or  not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      /*setInterval(()=>{
        document.title='TextUtils - is Amazing Mode';
      },2000)

      setInterval(()=>{
        document.title='Install TextUtills Now';
      },1500)*/
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light  Mode";
    }
  };
  return (
    <BrowserRouter>
      <Navbar
        title="Textutils2"
        aboutUs="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/*<Navbar />*/}
      {/*Default Props are Set Here*/}
      <Alert alert={alert} />
      <div className="container my-3">
        {/*<TextForm  heading="Enter text to analyze"/>*/}
        {/*<About/>*/}
        {/*<People/>*/}
      </div>

      <Routes>
        <Route exact path="/" element={
            <TextForm heading="Enter Text to Analyze Below" mode={mode} showAlert={showAlert} />}/>
        <Route exact path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
