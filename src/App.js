// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";             
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import ErrorPage from "./components/error-page"
import React, { useState } from 'react'
import {Routes,Route} from 'react-router-dom'

function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null)

  const [theme, setTheme] = useState({
    color:'black',
    btnColor:'primary'
  })



  const alertForm = (message, type) => {
    setAlert({
      message: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }



  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      setTheme({
        color:'white',
        btnColor:'light'
      })
      document.title = 'TextUtils - Dark'
      document.body.style.backgroundColor = '#14193d'
      // alertForm("Enabled Dark Mode", "success")
    }
    else {
      setMode('light')
      setTheme({
        color:'black',
        btnColor:'danger'
      })
      document.title = 'TextUtils - Light'
      document.body.style.backgroundColor = 'white';
      // alertForm("Enabled Light Mode", "success")
    }
  }



  return (
    <>
      {/* <Navbar title={1} aboutText="About Text-Utils"/>
    <Navbar aboutText="About Text-Utils"/>
    <Navbar/> */}

      <Navbar title="Text-Utils" aboutText="About Text-Utils" mode={mode} toggle={toggle} alert={alertForm} setTheme={setTheme} setMode={setMode}/>
      <Alert alert={alert} />
      <div className="container">
        <Routes>
          <Route path="/" element={<TextForm theme={theme} alert={alertForm} />} />
          <Route path="/about" element={<About mode={mode}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
        
        
      </div>
    </>
  );
}

export default App;
