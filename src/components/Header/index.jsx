import React from "react";
import {
  Link
} from "react-router-dom";

import Profile from "./Profile";

const Header = () => {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
        
          </li>
          <li>
            <Profile />
          </li>
        </ul>
      </nav>
  )
}
export default Header;