import { useState } from "react"
import "./App.css"
// import About from "./components/About";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light")
  const [alert, Setalert] = useState(null)

  const Showalert = (message, type) => {
    Setalert({
      msg: message,
      typ: type,
    })
    setTimeout(() => {
      Setalert(null)
    }, 3000)
  }

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = "black"
      Showalert("Dark mode has been Enabled", "success")
      document.title = "Text Genie-Dark Mode"
    } else {
      setmode("light")
      document.body.style.backgroundColor = "#82e99c"
      Showalert("Light mode has been Enabled", "success")
      document.title = "Text Genie-Light Mode"
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text Genie"
        about="About Us"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes>    */}
        {/* <Route path="/About" element={ */}

        <TextForm
          heading="Enter the text to analyze below"
          mode={mode}
          Showalert={Showalert}
        />
        {/* <About mode={mode} 
            Showalert={Showalert} />   */}
        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  )
}

export default App
