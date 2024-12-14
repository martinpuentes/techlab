import * as React from 'react';
import '../../../styles/components/navbar/Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useWraperContext } from '../../complements/Wrapper';
import { FormattedMessage } from 'react-intl';

const Navbars = ({ namePath }) => {

  const { selectLanguage } = useWraperContext();

  // const changeLanguage = (lang: string) => {
  //   if (selectLanguage) {
  //     selectLanguage(lang);
  //   }
  // };


  return (
    <Navbar
      className="navbarMain"
      bg="light"
      variant="light"
      //sticky="top"
      expand="lg"
      collapseOnSelect
    >
      <Navbar.Brand>
        <p className="m-0">
          {namePath === "home" ? (
            <FormattedMessage id={"nav.home"} />
          ) : namePath === "about-us" ? (
            <FormattedMessage id={"nav.aboutUs"} />
          ): namePath ===  "regional"? (
            <FormattedMessage id={"nav.regional"} />
          ): namePath === "our-work" ? (
            <FormattedMessage id={"nav.outWork"} />
          ) : namePath === "resources" ? (
            <FormattedMessage id={"nav.resources"} />
          ) : namePath === "services" ? (
            <FormattedMessage id={"nav.services"} />
          ) : (
            <FormattedMessage id={"nav.observatory"} />
          )}
        </p>
      </Navbar.Brand>

      <Navbar.Toggle className="coloring" />
      <Navbar.Collapse>
        <Nav className="containerNav me-auto">
          <ul className="navbar-nav navMain">
            <Link to="/home">
              <li className="nav-item containerItem">
                <a
                  className={
                    namePath === "home"
                      ? "nav-link  containerNavLink active"
                      : "nav-link containerNavLink"
                  }
                  href="#"
                >
                  <FormattedMessage id={"nav.home"} />
                </a>
              </li>
            </Link>

            <Link to="/about-us">
              <li className="nav-item containerItem ">
                <a
                  className={
                    namePath === "about-us"
                      ? "nav-link active containerNavLink"
                      : "nav-link containerNavLink"
                  }
                  href="#"
                >
                  <FormattedMessage id={"nav.aboutUs"} />
                </a>
              </li>
            </Link>

            <Link to="/regional">
              <li className="nav-item containerItem ">
                <a
                  className={
                    namePath === "regional"
                      ? "nav-link active containerNavLink"
                      : "nav-link containerNavLink"
                  }
                  href="#"
                >
                  <FormattedMessage id={"nav.regional"} />
                </a>
              </li>
            </Link>

            <Link to="/our-work">
              <li className="nav-item containerItem">
                <a
                  className={
                    namePath === "our-work"
                      ? "nav-link active containerNavLink"
                      : "nav-link containerNavLink"
                  }
                  href="#"
                >
                  <FormattedMessage id={"nav.outWork"} />
                </a>
              </li>
            </Link>

            <Link to="/resources">
              <li className="nav-item containerItem">
                <a
                  className={
                    namePath === "resources"
                      ? "nav-link active containerNavLink"
                      : "nav-link containerNavLink"
                  }
                  href="#"
                >
                  <FormattedMessage id={"nav.resources"} />
                </a>
              </li>
            </Link>

            <Link to="/services">
              <li className="nav-item containerItem">
                <a
                  className={
                    namePath === "services"
                      ? "nav-link active containerNavLink"
                      : "nav-link containerNavLink"
                  }
                  href="#"
                >
                  <FormattedMessage id={"nav.services"} />
                </a>
              </li>
            </Link>

            <li className="nav-item containerItem">
              <a
                className={
                  namePath === "observatory"
                    ? "nav-link active containerNavLink"
                    : "nav-link containerNavLink"
                }
                href="https://idbg.sharepoint.com/sites/tech_lab/SitePages/Observatory.aspx"
                target="_blank"
                data-interception="off"
                rel="noopener noreferrer"
              >
                <FormattedMessage id={"nav.observatory"} />
              </a>
            </li>

            {/* <NavDropdown title={<FormattedMessage id={"lang"} />} id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => { changeLanguage("en"); }} ><FormattedMessage id={"english"} /></NavDropdown.Item>
              <NavDropdown.Item onClick={() => { changeLanguage("es"); }} ><FormattedMessage id={"spanish"} /></NavDropdown.Item>
            </NavDropdown> */}
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbars;