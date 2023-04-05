import React from 'react'
import {  Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-danger">
                <a className="navbar-brand" href="#" style={{ marginLeft: "20px" }} id="film"><img src="https://i.pinimg.com/280x280_RS/94/6c/2d/946c2d4430a0b141585e068574882b72.jpg" id="img"></img>Filmipedia</a>
                <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link to="/home" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Home</a></Link>
                        <Link to="/about" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >About</a></Link>
                        <Link to="/contact" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Contact</a></Link>
                        <Link to="/film" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >Film</a></Link>
                         <Link to="/ott" style={{ textDecoration: "none" }}><a className="nav-item nav-link " >OTT</a></Link>


                    </div>
                </div>
            </nav>
        </div>
    )
}