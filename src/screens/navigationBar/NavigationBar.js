import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {navigationLinks} from '../../helpers/navigationLinks'
import './navigation.css'


function NavigationBar() {
  return (
    <div id="home">
        <Navbar className="navigation_container" expand="md"
        style={{zIndex: '2', position: 'fixed', top: 0, width: '100%'}}
        collapseOnSelect>
            <Navbar.Brand href="#home">adagun</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="links">
                {createLinks()}
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </div>
  )
}


function createLinks()
{
    return navigationLinks.map((element, index) => (
        <Nav.Link key={index} href={element.ref}>{element.name}</Nav.Link>
    ))
}


export default NavigationBar