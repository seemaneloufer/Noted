import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright Seema Neloufer ⓒ  {year}</p>
    </footer>
  );
}

export default Footer;
