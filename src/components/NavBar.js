import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const NavLinks = links.map((link)=>{return (<a href={"#link"} key={link}>{link}</a>)})
  return <nav>{/* display an <a> tag for each link here */}{NavLinks}</nav>;
}

export default NavBar;
