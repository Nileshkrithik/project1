import React from "react";
import NavBar from "./Navbar";


function Contact() {
  return (
    <div>
    <NavBar />
      <h1>Contact Us</h1>
      <p>
        If you have any questions or concerns about our website, please don't
        hesitate to contact us.
      </p>
      <ul>
        <li>Email: Filmipedia@gmail.com</li>
        <li>Phone: 9397137740</li>
        <li>Address: Tricky Street,Lake Point,Coimbatore</li>
      </ul>
      <footer><marquee>the page is under develop</marquee></footer>
    </div>
  );
}

export default Contact;