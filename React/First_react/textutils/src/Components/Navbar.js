import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  
  return (
    <nav className= {`navbar navbar-expand-lg navbar-${props.mode ===`dark`?`light`: `dark`} bg-${props.mode  ===`dark`?`light`: `dark`}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      
          <div >
          <button type="button" className="btn btn-primary" onClick={()=> props.changeMode('blue')}>Blue</button>
          <button type="button" className="btn btn-secondary" onClick={()=> props.changeMode('dark')}>Dark</button>
          <button type="button" className="btn btn-success" onClick={()=> props.changeMode('green')}>Green</button>
          <button type="button" className="btn btn-danger" onClick={()=> props.changeMode('red')}>Red</button>
          <button type="button" className="btn btn-warning" onClick={()=> props.changeMode('yellow')}>Yellow</button>
          <button type="button" className="btn btn-light" onClick={()=> props.changeMode('light')}>Light</button>
          
            {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
            <label className= {`form-check-label text-${props.mode} mx-3`} htmlFor="flexSwitchCheckDefault">Dark Mode</label> */}
          </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes= {title: PropTypes.string,
aboutText: PropTypes.string}