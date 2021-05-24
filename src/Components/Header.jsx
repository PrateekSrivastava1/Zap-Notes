import React from "react";
import FlashOnIcon from '@material-ui/icons/FlashOn';
function Header(handleLogout) {
  return<header>
  <h1><FlashOnIcon />Notes</h1>
  <button onClick={handleLogout} >Logout</button>
</header>
}

export default Header;