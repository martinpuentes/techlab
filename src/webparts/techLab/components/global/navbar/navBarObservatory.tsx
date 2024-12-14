import React from 'react';
import '../../../styles/App.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useWraperContext } from '../../complements/Wrapper';
import { FormattedMessage } from 'react-intl';

export const NavBarObservatory = ({
  typePage
}) => {
  return (
    <div className='container-fluid containerSubNav'>
      <div className='sectionLogo'></div>
      <div className='sectionContactUs'>
        <Navbar className="navbarMain" bg="light" variant="light"
          sticky="top" expand="lg" collapseOnSelect>
          <Navbar.Collapse>
            <Nav className="containerNav me-auto" >
              <ul className="navbar-nav navMain">
                <Link to="/observatory/technologies" style={{borderRight: '1px solid black'}}>
                  <li className="nav-item containerItem2">
                    <a className={(typePage === 'technologies') ? 'nav-link active2 containerNavLink' : 'nav-link containerNavLink'} href="#">
                      TECHNOLOGIES
                    </a>
                  </li>
                </Link>

                <Link to="/observatory/solutions">
                  <li className="nav-item containerItem2">
                    <a className={(typePage === 'solutions') ? 'nav-link active2 containerNavLink' : 'nav-link containerNavLink'} href="#">
                      SOLUTIONS
                    </a>
                  </li>
                </Link>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
