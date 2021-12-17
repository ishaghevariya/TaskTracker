import React from "react";
import "../styles.css";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header class="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

Header.PropTypes = {
  title: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: "red",
//   backgroundColor: "black"
// };
export default Header;
