import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} | StG999</p>
    </footer>
  );
}

export default Footer;
