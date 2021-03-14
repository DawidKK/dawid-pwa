import React from 'react'
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">Home</Link>
      <Link to="/geolocation">Geolocation</Link>
      <Link to="/offline">Offline</Link>
      <Link to="/camera">Camera</Link>
      <Link to="/reachability">Reachability</Link>
      <Link to="/device-position">Device Position</Link>
    </Navbar>
  )
}

export default Navigation
