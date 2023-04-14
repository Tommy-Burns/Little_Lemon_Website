import React from "react";
import { Link } from "react-scroll";

class MoveToBtn extends React.Component {
  render() {
    const { name, to } = this.props;
    return (
      <button>
        <Link spy={true} smooth={true} offset={-60} duration={300} to={to}>
          {name}
        </Link>
      </button>
    );
  }
}

export default MoveToBtn;
