import React from "react";
import PropTypes from 'prop-types'
import "../App.css";

export default function Navbar(props) {

  const yellow = ()=>{
    props.setTheme({
      color:'black',
      btnColor:'warning'
    })
    props.setMode('dark')
    document.title = 'TextUtils - Yellow'
    document.body.style.backgroundColor = '#fff907cf'
  }
  const green = ()=>{
    props.setTheme({
      color:'black',
      btnColor:'success'
    })
    props.setMode('dark')
    document.title = 'TextUtils - Green'
    document.body.style.backgroundColor = '#47c48a'
    
  }
  const blue = ()=>{
    props.setTheme({
      color:'black',
      btnColor:'dark'
    })
    props.setMode('dark')
    document.title = 'TextUtils - Blue'
    document.body.style.backgroundColor = '#0dcaf0'

  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}

          <div className="colorPallete yellow" onClick={yellow}></div>
          <div className="colorPallete green" onClick={green}></div>
          <div className="colorPallete blue" onClick={blue}></div>

          <div className={`form-check form-switch mx-2 text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
}


Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
}

Navbar.defaultProps = {
  title: "Text Utiles rakh lo",
  aboutText: "Kya kare, kuch bhar lo"
}

// I feel the way of giving props has been changed