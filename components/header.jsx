import React from "react";
import navStyles from "../styles/Nav.module.css";
const header = () => {
  return (
    <div>
      <nav className={navStyles.nav_container}>
        <div className="logo">bidMe</div>
        <ul className={navStyles.nav_items}>
          <li>home</li>
          <li>products</li>
          <li>about us</li>
        </ul>
      </nav>
    </div>
  );
};

export default header;
