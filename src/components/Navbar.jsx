import React from "react";
import logo from "../assets/imgs/Logo.svg";
import "./styles/navbar.css";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends React.Component {
  scrollToTop = () => {
    scroll.scrollToTop;
  };

  render() {
    return (
      <nav>
        <div className="logo">
          <Link spy={true} smooth={true} offset={-60} duration={300} to="home">
            <img src={logo} alt="Logo" onClick={this.scrollToTop} />
          </Link>
        </div>
        <div className="navlinks">
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
            to="home"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
            to="specials"
          >
            Menu
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
            to="testimonials"
          >
            Testimonials
          </Link>
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-60}
            duration={300}
            to="about"
          >
            About
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
