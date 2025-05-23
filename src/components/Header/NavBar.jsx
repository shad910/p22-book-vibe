import React from "react";
import "./NavStyle.css";
import { NavLink } from "react-router";

const NavBar = () => {
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/listed-Books">Listed Books</NavLink>
      </li>
      <li>
        <NavLink to="/pages-to-read">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-white mb-10">
      <section className="navbar-start">
        <a className="btn btn-ghost text-2xl font-bold">Book Vibe</a>
      </section>
      <section className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2.5">{link}</ul>
      </section>
      <section className="navbar-end gap-2.5">
        <div className="md:flex gap-2.5 hidden">
          <a className="btn bg-[#23BE0A] text-white hover:border-[#23BE0A] hover:text-[#23BE0A] hover:bg-white">
            Sign In
          </a>
          <a className="btn bg-[#59C6D2] text-white hover:border-[#59C6D2] hover:text-[#59C6D2] hover:bg-white">
            Sign Up
          </a>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default NavBar;
