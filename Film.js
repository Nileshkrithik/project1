import React from "react";
import NavBar from "./Navbar";


function Film() {
  return (
    <div>
    <NavBar />
      <h1>Famous Films and Directors</h1>
      <h2>English</h2>
      <ul>
        <li>
          <strong>The Godfather</strong> (1972) - directed by Francis Ford Coppola
        </li>
        <li>
          <strong>Citizen Kane</strong> (1941) - directed by Orson Welles
        </li>
        <li>
          <strong>The Shawshank Redemption</strong> (1994) - directed by Frank Darabont
        </li>
      </ul>
      <h2>French</h2>
      <ul>
        <li>
          <strong>Breathless</strong> (1960) - directed by Jean-Luc Godard
        </li>
        <li>
          <strong>La Haine</strong> (1995) - directed by Mathieu Kassovitz
        </li>
        <li>
          <strong>Amélie</strong> (2001) - directed by Jean-Pierre Jeunet
        </li>
      </ul>
      <h2>Tamil</h2>
      <ul>
        <li>
          <strong>Asuran</strong> (2019) - directed by VetriMaaran
        </li>
        <li>
          <strong>Kaithi</strong> (2018) - directed by Lokesh Kanagaraj
        </li>
        <li>
          <strong>Saarpatta Parambarai</strong> (2020) - directed by Pa.Ranjith
        </li>
      </ul>
      
    </div>
  );
}

export default Film;