import React from "react";
import NavBar from "./Navbar";

function OTT() {
    return (
        <div>
        <NavBar />
            <h1>OTT Platforms and Movies</h1>
            <h2>Netflix</h2>
            <ul>
                <li>
                    <strong>Stranger Things</strong> (TV series)
                </li>
                <li>
                    <strong>Bird Box</strong> (2018)
                </li>
                <li>
                    <strong>The Irishman</strong> (2019)
                </li>
                <li>
                    <strong>Shawshank Redemption</strong> (2001)
                </li>
                <li>
                    <strong>Get Out</strong> (2019)
                </li>
                <li>
                    <strong>Pursuit of Happiness</strong> (2012)
                </li>
                <li>
                    <strong>Vadachennai</strong> (2017)
                </li>
                <li>
                    <strong>Iron Man</strong> (2009)
                </li>
                <li>
                    <strong>Friends</strong> (2019)
                </li>

            </ul>
            <h2>Amazon Prime Video</h2>
            <ul>
                <li>
                    <strong>The Marvelous Mrs. Maisel</strong> (TV series)
                </li>
                <li>
                    <strong>Manchester by the Sea</strong> (2016)
                </li>
                <li>
                    <strong>The Big Sick</strong> (2017)
                </li>
            </ul>
            <h2>Disney+</h2>
            <ul>
                <li>
                    <strong>The Mandalorian</strong> (TV series)
                </li>
                <li>
                    <strong>Soul</strong> (2020)
                </li>
                <li>
                    <strong>Hamilton</strong> (2020)
                </li>
            </ul>

        </div>
    );
}

export default OTT;