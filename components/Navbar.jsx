import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import navStyles from "../styles/Nav.module.css";
const Navbar = () => {
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex h-20 px-7 bg-violet-700 backdrop-filter backdrop-blur-lg bg-opacity-70">
      <nav className="flex items-center justify-between w-full">
        <div className="text-4xl">
          bid<span className="text-5xl">Me</span>
        </div>
        <ul className="flex">
          <li className="px-2 text-2xl">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 text-2xl">
            <Link href="/auctions">Auctions</Link>
          </li>
          <li className="px-2 text-2xl">
            <Link href="/about ">About</Link>
          </li>
        </ul>
        <div className={navStyles.nav_menu}>
          <ul className={navStyles.nav_items}>
            {!userInfo ? (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/register">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li className="text-2xl">
                  <Link href="mybids">My bids</Link>
                </li>
                <li className="text-2xl">
                  <Link href="/profile">Nelson</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
