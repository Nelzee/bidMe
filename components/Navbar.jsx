import Link from "next/link";
import React from "react";
import navStyles from "../styles/Nav.module.css";
const Navbar = () => {
  return (
    <div>
      <nav className={navStyles.nav_container}>
        <div className="logo">bidMe</div>
        <ul className={navStyles.nav_items}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/auctions">Auctions</Link>
          </li>
          <li>
            <Link href="/about ">About</Link>
          </li>
        </ul>
        <div className={navStyles.nav_menu}>
          <ul className={navStyles.nav_items}>
            <li>
              <Link href="mybids">My bids</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Sign Up</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
