import React from "react";
import logo from "../logo.png";
import { NavLink ,Link} from "react-router-dom";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li>
          <Link to="/netflix-app">
            <img src={logo} alt="logo" className="img" />
          </Link>
        </li>
      </ul>
      <div>
        <NavLink to="/tvShows">TV Show</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/recent">Recently Added</NavLink>
        <NavLink to="/mylist">My List</NavLink>
      </div>
      <FaSearch className="search-icon" />
    </nav>
  );
};

export default Header;
