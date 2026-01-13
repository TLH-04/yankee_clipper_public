import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap'
import './Heading.css'

class Heading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <Navbar fixed='top' expand='md' className='navbar'>
        <NavbarBrand href="/"><img src="src\assets\clipper_logo.png" className='navbar-logo'/></NavbarBrand>
        <NavbarBrand href="/" className='navbar-branding'>Yankee Clipper House of Cards</NavbarBrand>

        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/" className='navbar-link'>About Us</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/" className='navbar-link'>Current Stock</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/" className='navbar-link'>Incoming Stock</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/" className='navbar-link'>Upcoming Events</NavLink>
            </NavItem>
          </Nav>

          <NavbarText>Est. 1982</NavbarText>
        </Collapse>
      </Navbar>
    )
  }
}

export default Heading
