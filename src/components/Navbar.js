import React from 'react'

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand">FetchApi</a>
    <form className="d-flex">
      <input className="form-control me-3 mx-3" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-dark" type="submit" >Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}
