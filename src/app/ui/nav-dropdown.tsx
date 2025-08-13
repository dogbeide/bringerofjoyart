'use client';

import { useState } from "react";

export default function NavDropdown() {

  const [showDropdown, toggleShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    toggleShowDropdown((prevShowDropdown) => !prevShowDropdown)
  }

  return(
    <div className="dropdown" id="nav-dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        onClick={handleDropdownToggle}
      >
        Menu
      </a>
      {showDropdown && <div
        className="dropdown-menu dropdown-menu-right my-dropdown"
      >
        <a className="dropdown-item_my text-shadow" href="/#whoami">
          WHOAMI
        </a>
        <a className="dropdown-item_my text-shadow" href="/#connect">
          CONNECT
        </a>
        <div className="dropdown-divider" />
        <a className="dropdown-item_my text-shadow" href="/#books">
          BOOKS
        </a>
        <a className="dropdown-item_my text-shadow" href="/#music">
          MUSIC
        </a>
      </div>}
    </div>
  )
}