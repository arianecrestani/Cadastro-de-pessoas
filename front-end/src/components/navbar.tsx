import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex", gap: 20 }}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;